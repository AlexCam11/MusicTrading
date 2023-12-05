import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../../src/assets/img/logo/logoMus.png";
import { scrollToTop } from "../../lib/helpers";

const FooterOne = () => {
  return (
    <footer>
      <div className="footer-area">
        <div className="container">
          <div className="footer-scroll-wrap">
            <button
              className="scroll-to-target"
              data-target="html"
              onClick={scrollToTop}
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
          <div className="footer-top">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <Link to="/" className="f-logo">
                    <img src={logoImage} alt="BigTech Logo" />
                  </Link>
                  <div className="footer-content">
                    <p>
                      Una nueva forma de hacer trading en la musica con los pagos fáciles, fiables y 100% seguros.
                    </p>
                    <ul className="footer-social">
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-skype"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div
                  className="footer-widget  wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <h4 className="fw-title">ENLACES UTILES</h4>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link to="/">Contactanos</Link>
                      </li>
                      <li>
                        <Link to="/">Como funciona</Link>
                      </li>
                      <li>
                        <Link to="/">Crear</Link>
                      </li>
                      <li>
                        <Link to="/">Explorar</Link>
                      </li>
                      <li>
                        <Link to="/">Terminos y Servicios</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <h4 className="fw-title">Comunidad</h4>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link to="/">Centro de ayuda</Link>
                      </li>
                      <li>
                        <Link to="/">Socios</Link>
                      </li>
                      <li>
                        <Link to="/">Sugerencias</Link>
                      </li>
                      <li>
                        <Link to="/">Blog</Link>
                      </li>
                      <li>
                        <Link to="/">Boletines</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <h4 className="fw-title">Sucripcion</h4>
                  <div className="footer-newsletter">
                    <p>
                   Recibe información sobre nuevos lanzamientos
                    </p>
                    <form action="#">
                      <input
                        type="email"
                        placeholder="nexaxcorp@gmail.com"
                        required
                      />
                      <button type="submit">
                        <i className="fas fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>Copyright &copy; 2023. All Rights Reserved Nexas Corp</p>
                </div>
              </div>
              <div className="col-lg-6 d-none d-sm-block">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link to="#">Terminos y Condiciones</Link>
                    </li>
                    <li>
                      <Link to="#">Politica de privacidad</Link>
                    </li>
                    <li>
                      <Link to="#">Ingresar / Registrar</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
