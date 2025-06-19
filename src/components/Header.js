import LogoHeaderRouge from "../assets/images/logos/Logo baseline rouge.png";

function Header() {
  return (
    <div className="header">
      <div className="iconI">
        <i className="bi bi-instagram"></i>
      </div>
      <div className="iconU">
        <i className="bi bi-person-circle"></i>
      </div>
      <div className="iconFB">
        <i className="bi bi-facebook"></i>
      </div>

      <div className="logo">
        <a href="../pages/Home.js">
          <img
            className="logoHeader"
            src={LogoHeaderRouge}
            alt="logo du salon de thé Le Caméo"
          />
        </a>
      </div>
      <div className="menu">
        <p className="itemMenu">
          <a href="../pages/Program.js">Programme</a>
        </p>
        <p className="itemMenu">
          <a href="../pages/Shop.js">Boutique</a>
        </p>
        <p className="itemMenu">
          <a href="../pages/Blog.js">Blog</a>
        </p>
        <p className="itemMenu">
          <a href="../pages/Partnership.js">Partenaires</a>
        </p>
      </div>
    </div>
  );
}

export default Header;
