import React from "react";
import styled from "styled-components";
import * as Comp from "./layoutComponents";
import { theme } from "./theme";
import MyForm from "./download_form";

import IconEmail from "../images/email.svg";
import IconPhone from "../images/email.svg";

const Footer = () => (
  <FooterContainer>
    <Comp.Container>
      <p>
        Cuenta con amplia experiencia en desarrollo de proyectos que van desde
        el diseño hasta la ejecución de los mismos, siendo desde casa habitación
        hasta construcción de departamentos en condominio, así como remodelación
        de espacios, todo con una sola intención de entregar una calidad
        ejemplar.
      </p>
      <Comp.Row mobile>
        <Comp.Column>
          <h4>Solicita una cotización</h4>
          <MyForm />
        </Comp.Column>
        <Comp.Column>
          <a href="/">
            <img src="" width="180" />
          </a>
          <p style={{ margin: "2rem 0", color: theme.colors.primaryColor }}>
            Póngase en contacto con nuestro equipo.
          </p>
          <Comp.Row style={{ marginBottom: "2rem", alignItems: "center" }}>
            <Comp.Column>
              <img src={IconEmail} />
            </Comp.Column>
            <Comp.Column>
              <p style={{ marginBottom: "0" }}>
                <a href="mailto:info@indigo-translations.com.mx">
                  info@indigo-translations.com.mx
                </a>
              </p>
            </Comp.Column>
          </Comp.Row>
          <Comp.Row style={{ marginBottom: "2rem" }}>
            <Comp.Column>
              <img src={IconPhone} />
            </Comp.Column>
            <Comp.Column>
              <p style={{ marginBottom: "0" }}>
                Av. Yucatán No. 54, Int. 1350, Col. Roma Norte, Del. Cuauhtémoc,
                C.P. 06700, Ciudad de México, México
              </p>
            </Comp.Column>
          </Comp.Row>
        </Comp.Column>
      </Comp.Row>
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

const BodyFooter = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 0.8rem;
  border-top: 1px solid ${theme.colors.bodyLColor};
`;

export default Footer;
