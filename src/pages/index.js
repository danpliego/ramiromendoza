import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import * as Comp from "../components/layoutComponents";
import styled from "styled-components";
import Hero from "../components/hero";
import { theme } from "../components/theme";
import { Proyectos } from "../components/proyectos";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Comp.Container>
      <Hero />
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
    </Comp.Container>
  </Layout>
);

export default IndexPage;

const ServiciosSection = styled(Comp.Section)`
  position: relative;
  z-index: 1;
  padding-bottom: 0 !important;
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
