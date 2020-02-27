import React from "react";
import styled from "styled-components";
import * as Comp from "./layoutComponents";
import { Link } from "gatsby";
import { theme } from "./theme";

import Facebook from "../images/icons/facebook.svg";
import Twitter from "../images/icons/twitter.svg";
import Instagram from "../images/icons/instagram.svg";
import Youtube from "../images/icons/youtube.svg";

const Footer = () => (
  <FooterContainer>
    <Comp.Container>
      <FooterContent>
        <Comp.Row mobile>
          <Comp.Column flex={1}>
            <FooterMenu>
              <h6>MyBusiness POS Desarrollos</h6>
              <li>
                <Link to="/nosotros/">Nosotros</Link>
              </li>
              <li>
                <Link to="/registro-de-licencias/">Registro de licencias</Link>
              </li>
              <li>
                <Link to="/homologaciones">Homologaciones</Link>
              </li>
              <li>
                <Link to="/corporativos">Corporativos</Link>
              </li>
              <li>
                <Link to="/descargas">Descargas</Link>
              </li>
              <li>
                <Link to="/aviso-de-privacidad/">Aviso de privacidad</Link>
              </li>
            </FooterMenu>
          </Comp.Column>
          <Comp.Column flex={1}>
            <FooterMenu>
              <h6>Productos</h6>
              <li>
                <Link to="/productos/my-business">MyBusiness POS</Link>
              </li>
              <li>
                <Link to="/productos/facturacion-electronica">
                  Facturación electrónica
                </Link>
              </li>
              <li>
                <Link to="/productos/tiempo-aire">Tiempo Aire</Link>
              </li>
              <li>
                <Link to="/productos/servicios-en-la-nube">
                  Servicios en la Nube
                </Link>
              </li>
              <li>
                <Link to="/productos/pos-tools">Pos Tools</Link>
              </li>
              <li>
                <Link to="/productos/bill-pocket">Bill Pocket</Link>
              </li>
              <li>
                <Link to="/productos/desarrollo-a-la-medida">
                  Desarrollo a la medida
                </Link>
              </li>
            </FooterMenu>
          </Comp.Column>
          <Comp.Column flex={1}>
            <FooterMenu>
              <h6>Canales de Venta</h6>
              <li>
                <Link to="/canales-de-venta/centros-de-servicio/">
                  Centros de servicio
                </Link>
              </li>
              <li>
                <Link to="/canales-de-venta/distribuidores/">
                  Distribuidores certificados
                </Link>
              </li>
            </FooterMenu>
            <FooterMenu>
              <h6>Redes Sociales</h6>
              <a
                style={{ marginRight: "0.66rem" }}
                href="https://www.facebook.com/MyBusinessPOSD/"
              >
                <img src={Facebook} />
              </a>
              <a
                style={{ marginRight: "0.66rem" }}
                href="https://www.instagram.com/mybusinessposd/"
              >
                <img src={Instagram} />
              </a>
              <a
                style={{ marginRight: "0.66rem" }}
                href="https://twitter.com/mybusinessposd"
              >
                <img src={Twitter} />
              </a>
              <a
                style={{ marginRight: "0.66rem" }}
                href="https://www.youtube.com/user/MyBusinessPOSD"
              >
                <img src={Youtube} />
              </a>
            </FooterMenu>
          </Comp.Column>
        </Comp.Row>
      </FooterContent>
      <BodyFooter>
        © {new Date().getFullYear()}, MyBusiness POS Desarrollos, S. A. de C. V.
      </BodyFooter>
    </Comp.Container>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  background: ${theme.colors.bodyColor};
  color: ${props => props.theme.colors.whiteColor};
`;

const FooterMenu = styled.ul`
  padding: 1rem;
  padding-left: 0;
  list-style: none;

  li {
    margin-bottom: 0.33rem;
  }

  li a {
    font-size: 0.8rem;
    color: ${props => props.theme.colors.whiteColor};
    opacity: 0.8;

    &:hover {
      opacity: 1;
      color: ${props => props.theme.colors.whiteColor};
    }
  }
`;

const BodyFooter = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 0.8rem;
  border-top: 1px solid ${theme.colors.bodyLColor};
`;

const FooterContent = styled.div`
  padding-top: 2rem;
`;

export default Footer;
