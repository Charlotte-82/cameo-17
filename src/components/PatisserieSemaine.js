import { useEffect, useState } from "react";
import axios from "axios";

function PatisserieSemaine() {
  const [patisserie, setPatisserie] = useState(null);

  useEffect(() => {
    axios
      .get(
        "http://lecameo17.local/wp-json/wp/v2/patisserie_semaine?per_page=1&orderby=date&order=desc"
      )
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setPatisserie(res.data[0].acf);
        }
      })
      .catch((err) => {
        console.error("Erreur chargement pâtisserie", err);
      });
  }, []);

  if (!patisserie) return <p>Chargement...</p>;

  const videoUrl = patisserie.extrait_video_ou_image;

  const convertToEmbed = (url) => {
    if (!url) return null;
    const youtubeMatch = url.match(
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/
    );
    if (youtubeMatch && youtubeMatch[1]) {
      return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
    }
    return null;
  };

  const embedUrl = convertToEmbed(videoUrl);

  return (
    <div className="patSemaine">
      {patisserie.image_de_la_patisserie?.url && (
        <div className="imagePatSemaineDiv">
          <img
            src={patisserie.image_de_la_patisserie.url}
            alt={patisserie.nom_de_la_patisserie}
            className="imagePatisserieSemaine"
          />
        </div>
      )}

      <div className="PatSemaineDiv">
        <div className="cadrePat">
          <h2 className="titrePatSemaine">{patisserie.nom_de_la_patisserie}</h2>
          <p className="titrePatSemaine">{patisserie.prix}</p>
        </div>
        <p className="titreFilm">{patisserie.titre_du_film}</p>
        <p className="realFilm">{patisserie.auteur_de_loeuvre}</p>
        <p className="dateFilm">{patisserie.date_de_sortie_de_loeuvre}</p>
      </div>
      <div className="videoExtrait">
        {embedUrl && (
          <iframe
            src={embedUrl}
            title={`Vidéo ${patisserie.nom_de_la_patisserie}`}
            frameBorder="0"
            className="imagePatisserieSemaine"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default PatisserieSemaine;
