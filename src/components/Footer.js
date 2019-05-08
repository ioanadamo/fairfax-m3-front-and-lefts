import React from "react";
import logoDisena from "../images/logo-disena-aventura.jpg";
import logoAdalab from "../images/logo-adalab.png";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer__page">
        <div className="footer__flex-wrapper column-center">
          {" "}
          <small className="footer__copyright">
            Awesome profile-cards @2019
          </small>
          <div className="logos">
            <img
              src={logoDisena}
              alt="Logo de Diseña tu aventura"
              className="footer__image--logo"
            />{" "}
            <a
              className="footer__link"
              href="https://adalab.es/"
              target="blank"
            >
              <img
                src={logoAdalab}
                alt="Logo de Adalab"
                className="footer__image"
              />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
