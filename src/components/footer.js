import React from "react";
import styled from "styled-components";
import * as Comp from "./layoutComponents";
import { theme } from "./theme";
import MyForm from "./download_form";

import YellowImage from "../images/soumaya.jpg";
import Logo from "../images/logo.svg";

import IconEmail from "../images/email.svg";
import IconPhone from "../images/phone.svg";

const Footer = () => (
  <FooterContainer>
    <Comp.Container>
      <FooterBio className="serif">
        Cuenta con amplia experiencia en desarrollo de proyectos que van desde
        el diseño hasta la ejecución de los mismos, siendo desde casa habitación
        hasta construcción de departamentos en condominio, así como remodelación
        de espacios, todo con una sola intención de entregar una calidad
        ejemplar.
      </FooterBio>
      <Comp.Row mobile padded>
        <Comp.Column style={{ flex: "1" }} padded>
          <h4 className="serif">Solicita una cotización</h4>
          <MyForm />
        </Comp.Column>
        <Comp.Column style={{ flex: "1", paddingLeft: "3rem" }} padded>
          <a href="/">
            <img src="" width="180" />
          </a>
          <img src={Logo} style={{ width: "225px", marginBottom: "2rem" }} />
          <InfoRow style={{ marginBottom: "2rem", alignItems: "center" }}>
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
          </InfoRow>
          <InfoRow style={{ marginBottom: "2rem" }}>
            <Comp.Column>
              <img src={IconPhone} />
            </Comp.Column>
            <Comp.Column>
              <a
                href="https://api.whatsapp.com/send?phone=525534336491"
                style={{ marginBottom: "0" }}
              >
                55 3433 6491
              </a>
            </Comp.Column>
          </InfoRow>
        </Comp.Column>
      </Comp.Row>
      <BodyFooter>
        © {new Date().getFullYear()}, Ramiro Mendoza Arquitecto
      </BodyFooter>
    </Comp.Container>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  background: url(${YellowImage});
  background-size: cover;
  color: ${props => props.theme.colors.whiteColor};
  margin-top: -10rem;
  padding-top: 10rem;
`;

const FooterBio = styled.h2`
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid ${theme.colors.primaryColor};
`;

const InfoRow = styled(Comp.Row)`
  img {
    width: 1.5rem !important;
    margin-right: 1rem;
  }
`;

const BodyFooter = styled.div`
  text-align: center;
  padding: 2rem;
  margin-top: 2rem;
  font-size: 0.8rem;
  border-top: 1px solid ${theme.colors.primaryColor};
`;

export default Footer;
