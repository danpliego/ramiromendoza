import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import * as Comp from "../components/layoutComponents";
import styled from "styled-components";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero>
      <Comp.Container>
        <Comp.Row mobile>
          <Comp.Column>
            logo
            <p>
              Arquitecto integral especializado en construcción, remodelación y
              reutilización de espacios existentes para giros habitacional,
              comercial e industrial.
            </p>
          </Comp.Column>
          <Comp.Column>slider here</Comp.Column>
        </Comp.Row>
      </Comp.Container>
    </Hero>
    <Comp.Container>
      <Comp.Section>
        <ServiciosTitle>Servicios</ServiciosTitle>
        <ServiciosContent>
          <Comp.Row mobile>
            <Comp.Column>
              <h3>
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
              <h3>
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
              <h3>
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
      </Comp.Section>

      <Comp.Section>
        <button>Proyectos Arquitectónicos</button>
        <button>Proyectos de Construcción</button>
      </Comp.Section>

      <Comp.Section>
        <h4>
          Zempoala 560
          <small>
            REMODELACIÓN SIN MODIFICAR ESTRUCTURA / ACABADOS / MADERAS /
            ALUMINIOS / READECUACIÓN DE ESPACIOS
          </small>
        </h4>
        <Gallery>
          <GalleryItem>
            <Comp.Row mobile>
              <Comp.Column>foto 1</Comp.Column>
              <Comp.Column>Foto 2 y 3</Comp.Column>
            </Comp.Row>
          </GalleryItem>
        </Gallery>
      </Comp.Section>
    </Comp.Container>
  </Layout>
);

export default IndexPage;

const Hero = styled.div``;

const ServiciosTitle = styled.p``;

const ServiciosContent = styled.div`
  background: #000;

  h3 {
    span {
      border-bottom: 1px solid yellow;
    }
  }
`;

const Gallery = styled.div``;

const GalleryItem = styled.div``;
