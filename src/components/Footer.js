import LogoRondBeige from "../assets/images/logos/Logo rond beige.png";

function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="col footerCol1">
          <p className="pFooter">
            Suivez l'actualité du salon sur les réseaux !
          </p>
          <i className="bi bi-instagram"></i> <i className="bi bi-facebook"></i>
        </div>
        <div className="col footerCol2">
          <p className="pFooter">Le Caméo</p>
          <p className="pFooter">36 avenue La Fayette</p>
          <p className="pFooter">17300 Rochefort</p>
          <p className="pFooter">lecameo17@gmail.com</p>
        </div>
        <div className="col footerCol3">
          <img className="logoFooter" src={LogoRondBeige} />
        </div>
        <div className="col footerCol4">
          <p className="pFooter">
            <a href="../pages/Program.js">Programme</a>
          </p>
          <p className="pFooter">
            <a href="../pages/Shop.js">Boutique</a>
          </p>
          <p className="pFooter">
            <a href="../pages/Blog.js">Blog</a>
          </p>
          <p className="pFooter">
            <a href="../pages/Partnership.js">Partenaires</a>
          </p>
          <p className="pFooter">
            <a href="../pages/Mentions.js">Mentions légales</a>
          </p>
        </div>
        <div className="col footerCol5">
          <p className="pFooter">
            Créez un compte et abonnez-vous à la newsletter pour profiter des
            bons plans !
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
