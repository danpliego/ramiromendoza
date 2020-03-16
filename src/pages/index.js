import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import * as Comp from "../components/layoutComponents";
import styled from "styled-components";
import Hero from "../components/hero";
import { theme } from "../components/theme";
import { Proyectos } from "../components/proyectos";

import BlackImage from "../images/black-bg.png";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Hero />
    <MainContainer>
      <ServiciosSection>
        <ServiciosTitle>Servicios</ServiciosTitle>
        <ServiciosContent>
          <Comp.Row mobile>
            <Comp.Column>
              <h3 className="serif">
                <span>01</span>
                Proyectos
              </h3>
              <ul>
                <li>Proyecto arquitectónico</li>
                <li>Proyecto arquitectónico ejecutivo.</li>
                <li>Diseño y ejecución</li>
              </ul>
            </Comp.Column>
            <Comp.Column>
              <h3 className="serif">
                <span>02</span>
                Enfoques
              </h3>
              <ul>
                <li>Proyecto casa habitación (unifamiliar)</li>
                <li>
                  <a href="#">Vivienda vertical (plurifamiliar)</a>
                </li>
                <li>Local comercial</li>
                <li>Local industrial</li>
              </ul>
            </Comp.Column>
            <Comp.Column>
              <h3 className="serif">
                <span>03</span>
                Remodelación
              </h3>
              <ul>
                <li>Casa habitación</li>
                <li>Condominios</li>
                <li>Local comercial</li>
                <li>Industrial</li>
              </ul>
            </Comp.Column>
          </Comp.Row>
        </ServiciosContent>
      </ServiciosSection>
      <Proyectos />
    </MainContainer>
    <FooterBio>
      <div>
        <span>RAMIRO MENDOZA // ARQUITECTO</span>
        Experto en desarrollo de proyectos que van desde el diseño hasta la
        ejecución de los mismos, siendo desde casa habitación hasta construcción
        de departamentos en condominio, así como remodelación de espacios, todo
        con una sola intención de entregar una calidad ejemplar.
      </div>
    </FooterBio>
  </Layout>
);

export default IndexPage;

const MainContainer = styled(Comp.Container)`
  z-index: 2;
  position: relative;
`;

const ServiciosSection = styled(Comp.Section)`
  position: relative;
  z-index: 1;
  padding-bottom: 0 !important;
  padding-left: 3rem;

  @media ${theme.breakpoint.onlyMobile} {
    padding: 0 0 0 3rem;
  }
`;

const ServiciosTitle = styled.p`
  color: ${theme.colors.primaryColor};
  transform: rotate(-90deg);
  display: inline-block;
  position: absolute;
  left: -2rem;
  margin-top: 150px;
`;

const ServiciosContent = styled.div`
  background: #111;
  border: 1px solid #2a2a2a;
  padding: 2.5rem;
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.2);

  h3 {
    display: flex;
    align-items: center;
    font-size: 2.25rem;

    span {
      border-bottom: 1px solid ${theme.colors.primaryColor};
      font-family: "GT America Mono";
      font-size: 1rem;
      color: ${theme.colors.primaryColor};
      margin-right: 1rem;
      padding-bottom: 0.33rem;
    }
  }

  ul {
    padding-right: 2rem;

    li {
      color: ${theme.colors.bodyLColor};
    }
  }
`;

const FooterBio = styled.div`
  background: url(${BlackImage});
  position: relative;
  background-size: cover;

  margin-top: -10rem;
  padding: 10rem 5rem 10rem;

  span {
    color: ${theme.colors.primaryColor};
    display: block;
    margin-bottom: 2rem;
  }

  > div {
    @media ${theme.breakpoint.upFromMobile} {
      width: 75%;
      margin: 0 auto;
    }

    border: 1px solid ${theme.colors.primaryColor};
    padding: 3rem;
    font-size: 18px;
    text-align: center;
  }
`;
