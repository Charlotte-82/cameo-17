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

  // const videoUrl = patisserie.extrait_video_ou_image;

  // const convertToEmbed = (url) => {
  //   if (!url) return null;
  //   const youtubeMatch = url.match(
  //     /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/
  //   );
  //   if (youtubeMatch && youtubeMatch[1]) {
  //     return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  //   }
  //   return null;
  // };

  // const embedUrl = convertToEmbed(videoUrl);

  const mediaSourceUrl = patisserie.extrait_video_ou_image; // Cette variable contient l'URL de l'image ou de la vidéo

  /**
   * Fonction pour rendre le média approprié (YouTube, vidéo directe, ou image).
   * @param {string} url - L'URL du média à afficher.
   * @returns {JSX.Element|null} L'élément React pour le média, ou null si l'URL est invalide ou non reconnue.
   */
  const renderMedia = (url) => {
    if (!url) return null;

    // 1. Tenter d'identifier une URL YouTube
    // La regex est améliorée pour capturer l'ID même avec des URL raccourcies ou d'autres paramètres
    const youtubeMatch = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|.+youtu.be\/)|m\.youtube\.com\/watch\?v=)([^&?/\s]+)/
    );

    if (youtubeMatch && youtubeMatch[1]) {
      const videoId = youtubeMatch[1];
      // Correction de l'URL d'intégration YouTube et ajout de paramètres courants
      const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&showinfo=0&rel=0`;
      return (
        <iframe
          src={embedSrc}
          title={`Vidéo YouTube ${patisserie.nom_de_la_patisserie}`}
          frameBorder="0"
          className="videoEmbed" // Classe pour l'iframe YouTube
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    }

    // 2. Tenter d'identifier une URL de fichier vidéo directe (mp4, webm, etc.)
    // La regex vérifie l'extension du fichier à la fin de l'URL
    const videoFileMatch = url.match(/\.(mp4|webm|ogg|mov)$/i);
    if (videoFileMatch) {
      return (
        <video controls className="videoDirect">
          {" "}
          {/* Classe pour la balise <video> */}
          <source src={url} type={`video/${videoFileMatch[1].toLowerCase()}`} />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      );
    }

    // 3. Tenter d'identifier une URL d'image directe (jpg, jpeg, png, gif, svg)
    // La regex vérifie l'extension du fichier à la fin de l'URL
    const imageFileMatch = url.match(/\.(jpg|jpeg|png|gif|svg)$/i);
    if (imageFileMatch) {
      return (
        <img
          src={url}
          alt={`Extrait ${patisserie.nom_de_la_patisserie}`}
          className="imageDirect" // Classe pour la balise <img>
        />
      );
    }

    // Si l'URL ne correspond à aucun format connu
    console.warn(
      `Type de média non reconnu ou URL invalide pour l'extrait: "${url}"`
    );
    return null;
  };

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
      {/* <div className="videoExtrait">
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
      </div> */}

      <div className="videoExtrait">
        {renderMedia(mediaSourceUrl)}{" "}
        {/* Appel de la fonction qui rend le média approprié */}
      </div>
    </div>
  );
}

export default PatisserieSemaine;
