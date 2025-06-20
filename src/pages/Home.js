import Interieur1 from "../assets/images/Lieu/le-cameo-int4.jpg";
import Interieur2 from "../assets/images/Lieu/le-cameo-pat.jpg";
import ImageArticle1 from "../assets/images/Lieu/le-cameo-littoral.jpg";
import ImageArticle2 from "../assets/images/Lieu/le-cameo-sudouest.jpg";
import Exterieur1 from "../assets/images/Lieu/le-cameo-ext.jpg";

function Home() {
  return (
    <div className="home">
      <section className="bande1">
        <h1>La pâtisserie de la semaine</h1>
        <div className="row sousBande1">
          <div className="col Bande1Col1"></div>
          <div className="col Bande1Col2"></div>
          <div className="col Bande1Col3"></div>
        </div>
      </section>
      <section className="bande2">
        <h2>Actualités</h2>
      </section>
      <section className="bande3 py-4">
        <h2>Le Caméo, c'est quoi ?</h2>
        <div className="row mb-4 cadreDef1">
          <div className="col-7 py-4 px-4">
            <h3>La Création du Caméo</h3>
            <p className="sousTitre">Une histoire de passion</p>
            <p>
              Au départ, le projet de Mathilde a été de créer un endroit qui lui
              ressemble à tous les niveaux et où elle pourrait exposer sa
              créativité et celles des autres et assouvir son besoin de partage.
            </p>
            <p>
              La passion de Mathilde pour le cinéma a toujours été importante et
              elle n’a pas cessé de réfléchir à un rapprochement possible entre
              cette dernière et son métier.
            </p>
            <p>
              Depuis maintenant quelques années, des livres de cuisine
              thématique voient le jour et notamment autour du cinéma. L’attrait
              est véritablement présent et rapproche plusieurs générations. Lui
              vient l’idée d’un lieu pour rassembler ces cinéphiles de tout âge.
            </p>
          </div>
          <div className="col-5 py-4 px-4 photoDef1">
            <img
              className="photoCadre1"
              src={Interieur1}
              alt="intérieur du salon de thé avec une rangée de siège comme au cinéma"
            />
          </div>
        </div>
        <div className="row mb-4 cadreDef1">
          <div className="col-5 py-4 px-4 photoDef1">
            <img
              className="photoCadre1"
              src={Interieur2}
              alt="intérieur du salon de thé avec une rangée de siège comme au cinéma"
            />
          </div>
          <div className="col-7 py-4 px-4">
            <h3>Tout le monde est bienvenu</h3>
            <p className="sousTitre">Un lieu accueillant et chaleureux</p>
            <p>
              Le Caméo est un salon de thé sur la thématique du cinéma. Les
              clients pourront déguster des pâtisseries directement tirées de
              leur univers cinématographique préféré.
            </p>
            <p>
              Le concept passe par l’assiette mais également dans l’ambiance et
              la décoration du salon de thé puisque il y a des affiches de
              cinéma ou encore des objets qui font directement référence à
              divers univers cinématographiques. Les pâtisseries sont toutes
              faites maison et sur place. Le but est de travailler avec le
              maximum de partenaires locaux.
            </p>
          </div>
        </div>
        <div className="row divArticle">
          <h3>Ils parlent du Caméo...</h3>
          <div className="col-6 imageArticle">
            <img
              src={ImageArticle1}
              className="imageArticle1"
              alt="Mathilde souriante assise dans son salon de thé"
            />

            <a href="https://www.le-littoral.com/actualite-17185-rochefort-le-cameo-quand-le-7e-art-rencontre-l-art-du-the">
              <p className="lienArticle">
                Rochefort. Le Caméo : quand le 7e art rencontre l'art du thé{" "}
              </p>
            </a>
          </div>
          <div className="col-6 imageArticle">
            <img
              src={ImageArticle2}
              className="imageArticle1"
              alt="portrait de Mathilde fière debout devant une affiche de cinéma de son salon"
            />
            <a href="https://www.le-littoral.com/actualite-17185-rochefort-le-cameo-quand-le-7e-art-rencontre-l-art-du-the">
              <p className="lienArticle">
                Rochefort : avec son salon de thé, elle partage sa passion pour
                le septième art
              </p>
            </a>
          </div>
        </div>
      </section>
      <section className="bande4">
        <h2>Le Caméo, c'est où ?</h2>
        <div className="row px-4 py-4">
          <div className="col-4 carteGoogleDiv">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2401.7040519489146!2d-0.9633540990930719!3d45.93499175739425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4801415a4a79b7c1%3A0x9f46aae248ebd2e!2zTGUgQ2Ftw6lv!5e0!3m2!1sfr!2sfr!4v1750432728740!5m2!1sfr!2sfr"
              title="Carte d’emplacement du Caméo"
              className="carteGoogle"
            ></iframe>
          </div>
          <div className="col-4 adresseDiv">
            <p className="adresse">36 avenue LaFayette</p>
            <p className="adresse">17300 Rochefort</p>
          </div>
          <div className="col-4 imageDevantureDiv">
            <img
              src={Exterieur1}
              className="imageDevanture"
              alt="devanture du salon de thé"
            />
          </div>
        </div>
        <div className="avis">
          <h3>Ce qu'ils en pensent...</h3>
          <div className="row">
            <div className="col-4">
              <p className="nomClient">Lucie</p>
              <div className="starRate">
                <i class="bi bi-star-fill fs-6"></i>
                <i class="bi bi-star-fill fs-6"></i>
                <i class="bi bi-star-fill fs-6"></i>
                <i class="bi bi-star-fill fs-6"></i>
                <i class="bi bi-star-fill fs-6"></i>
              </div>
              <p className="avisGoogle">
                Déjà plusieurs visites à mon actif, toujours un très agréable
                moment. Mathilde est adorable et tout est absolument délicieux
                😋!!!! …
              </p>
            </div>
            <div className="col-4">
              <p className="nomClient">Alyssa</p>
              <div className="starRate">
                <i class="bi bi-star-fill fs-6"></i>
                <i class="bi bi-star-fill fs-6"></i>
                <i class="bi bi-star-fill fs-6"></i>
                <i class="bi bi-star-fill fs-6"></i>
                <i class="bi bi-star-fill fs-6"></i>
              </div>
              <p className="avisGoogle">
                Une pause goûter comme à la maison ☺️ J’ai adoré le concept
                livre & jeux de société à disposition 📚 On peux même choisir sa
                tasse ☕️ Le chocolat chaud est délicieux et je vous parles pas
                des pâtisseries 😋 Hâte de revenir les tester !
              </p>
            </div>
            <div className="col-4">
              <p className="nomClient">Armell</p>
              <div className="starRate">
                <i class="bi bi-star-fill fs-6"></i>
                <i class="bi bi-star-fill fs-6"></i>
                <i class="bi bi-star-fill fs-6"></i>
                <i class="bi bi-star-fill fs-6"></i>
                <i class="bi bi-star-fill fs-6"></i>
              </div>
              <p className="avisGoogle">
                Un joli lieu-refuge, où déguster d’excellentes pâtisseries, en
                jouant à des jeux de société, ou en testant ses connaissances
                sur le cinéma. Une merveille de salon de thé, petite cuisine le
                midi, comme on aimerait en trouver plus souvent !
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
