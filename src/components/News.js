import { useEffect, useState } from "react";
import axios from "axios";

function News() {
  const [actu, setActu] = useState(null);

  const baseURL = "http://lecameo17.local/wp-json/wp/v2";

  useEffect(() => {
    const fetchActu = async () => {
      try {
        const endpoints = [
          `${baseURL}/article?meta_key=mettre_en_actu&meta_value=1&per_page=1`,
          `${baseURL}/evenement?meta_key=mettre_en_actu&meta_value=1&per_page=1`,
          `${baseURL}/atelier?meta_key=mettre_en_actu&meta_value=1&per_page=1`,
        ];

        const responses = await Promise.all(
          endpoints.map((url) => axios.get(url).catch(() => []))
        );

        for (const res of responses) {
          if (res.data && res.data.length > 0) {
            setActu(res.data[0]);
            break;
          }
        }
      } catch (err) {
        console.error("Erreur lors du chargement de l’actualité :", err);
      }
    };

    fetchActu();
  }, []);

  if (!actu) return null;

  const { title, acf, excerpt } = actu;
  console.log("acf.image:", acf.image);

  return (
    <div className="newsDiv">
      <div className="imageNewsDiv">
        {acf.image && typeof acf.image === "object" && (
          <img
            className="imageNews"
            src={acf.image.url}
            alt={acf.image.alt || title?.rendered}
          />
        )}
      </div>
      <div className="texteNews">
        <h3>{title.rendered}</h3>
        {acf.intervenant && (
          <p>
            <strong>Intervenant :</strong> {acf.intervenant}
          </p>
        )}
        <p style={{ textDecoration: "underline" }}>QUAND ?</p>
        {acf.date && (
          <p>
            <strong>Date :</strong> {acf.date}
          </p>
        )}
        {(acf.heure_de_debut || acf.heure_de_fin) && (
          <p>
            <strong>Heure :</strong> {acf.heure_de_debut || ""} –{" "}
            {acf.heure_de_fin || ""}
          </p>
        )}
        <p style={{ textDecoration: "underline" }}>OÙ ?</p>
        <p>
          <strong>{acf.lieu}</strong>
        </p>
        {acf.description && <p>{acf.description}</p>}
        <button className="boutonReservation">
          <a href="/agenda">Voir l'agenda</a>
        </button>
      </div>
      {excerpt?.rendered && (
        <div className="col-12">
          <p dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
        </div>
      )}
    </div>
  );
}

export default News;
