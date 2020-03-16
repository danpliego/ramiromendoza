import React, { useState } from "react";
import styled, { css } from "styled-components";
import * as Comp from "../components/layoutComponents";
import { theme } from "./theme";

import { ProjectCard, ProjectTitle } from "./project";

import Zempoala1 from "../images/zempoala/1.jpg";
import Zempoala2 from "../images/zempoala/2.jpg";
import Zempoala3 from "../images/zempoala/3.jpg";
import Zempoala4 from "../images/zempoala/4.jpg";
import Zempoala5 from "../images/zempoala/5.jpg";
import Zempoala6 from "../images/zempoala/6.jpg";
import Zempoala7 from "../images/zempoala/7.jpg";
import Zempoala8 from "../images/zempoala/8.jpg";
import Zempoala9 from "../images/zempoala/9.jpg";

import Mar1 from "../images/mar/1.jpg";
import Mar2 from "../images/mar/2.jpg";
import Mar3 from "../images/mar/3.jpg";
import Mar4 from "../images/mar/4.jpg";
import Mar5 from "../images/mar/5.jpg";
import Mar6 from "../images/mar/6.jpg";
import Mar7 from "../images/mar/7.jpg";

import Oriente1 from "../images/oriente/1.jpg";
import Oriente2 from "../images/oriente/2.jpg";
import Oriente3 from "../images/oriente/3.jpg";
import Oriente4 from "../images/oriente/4.jpg";
import Oriente5 from "../images/oriente/5.jpg";
import Oriente6 from "../images/oriente/6.jpg";
import Oriente7 from "../images/oriente/7.jpg";
import Oriente8 from "../images/oriente/8.jpg";
import Oriente9 from "../images/oriente/9.jpg";

import Lago1 from "../images/lago/1.jpg";
import Lago2 from "../images/lago/2.jpg";
import Lago3 from "../images/lago/3.jpg";
import Lago4 from "../images/lago/4.jpg";
import Lago5 from "../images/lago/5.jpg";
import Lago6 from "../images/lago/6.jpg";

import Construccion1 from "../images/construccion/1.jpg";
import Construccion2 from "../images/construccion/2.jpg";
import Construccion3 from "../images/construccion/3.jpg";
import Construccion4 from "../images/construccion/4.jpg";
import Construccion5 from "../images/construccion/5.jpg";
import Construccion7 from "../images/construccion/7.jpg";
import Construccion8 from "../images/construccion/8.jpg";
import Construccion9 from "../images/construccion/9.jpg";

import ConstruccionExtra1 from "../images/construccion/extra1.jpg";
import ConstruccionExtra2 from "../images/construccion/extra2.jpg";
import ConstruccionExtra3 from "../images/construccion/extra3.jpg";
import ConstruccionExtra4 from "../images/construccion/extra4.jpg";

export const Proyectos: React.FC = () => {
  const [isConstruccion, setConstruccion] = useState(false);
  return (
    <>
      <Comp.Section>
        <Comp.TextCenter>
          <SectionButton onClick={() => setConstruccion(false)}>
            Proyectos Arquitectónicos
          </SectionButton>
          <SectionButton onClick={() => setConstruccion(true)}>
            Proyectos de Construcción
          </SectionButton>
        </Comp.TextCenter>
        {isConstruccion ? (
          <>
            <Comp.TextCenter>
              <h1 className="serif" style={{ marginTop: "2rem" }}>
                Proyectos de Construcción
              </h1>
              <TitleSmall>
                Proyectos de construcción.....en colaboración con Hermanos
                Mendoza, desde scouting en predios factibles para inversión,
                ejecución del proyecto Arquitectónico ejecutivo, hasta llave en
                mano.
              </TitleSmall>
            </Comp.TextCenter>
            <ProjectConstruccion>
              <div>
                <ProjectTitle>ANDREA DEL CASTAÑO #51</ProjectTitle>
                <Comp.Row mobile>
                  <GalleryColumnBig>
                    <img src={Construccion9} />
                  </GalleryColumnBig>
                  <GalleryColumnSmall>
                    <img src={Construccion8} />
                    <img src={Construccion4} />
                  </GalleryColumnSmall>
                </Comp.Row>
              </div>
              <div>
                <ProjectTitle>TUXPAN #105</ProjectTitle>
                <Comp.Row mobile>
                  <GalleryColumnBig>
                    <img src={Construccion5} />
                  </GalleryColumnBig>
                  <GalleryColumnSmall>
                    <img src={Construccion3} />
                    <img src={ConstruccionExtra1} />
                  </GalleryColumnSmall>
                </Comp.Row>
              </div>
              <div>
                <ProjectTitle>CALETA #19</ProjectTitle>
                <Comp.Row mobile>
                  <GalleryColumnBig>
                    <img src={ConstruccionExtra2} />
                  </GalleryColumnBig>
                  <GalleryColumnSmall>
                    <img src={Construccion1} />
                    <img src={Construccion7} />
                  </GalleryColumnSmall>
                </Comp.Row>
              </div>
              <div>
                <ProjectTitle>CASAS GRANDES #33</ProjectTitle>
                <Comp.Row mobile>
                  <GalleryColumnBig>
                    <img src={ConstruccionExtra3} />
                  </GalleryColumnBig>
                  <GalleryColumnSmall>
                    <img src={Construccion2} />
                    <img src={ConstruccionExtra4} />
                  </GalleryColumnSmall>
                </Comp.Row>
              </div>
            </ProjectConstruccion>
          </>
        ) : (
          <>
            <Comp.TextCenter>
              <h1 className="serif" style={{ marginTop: "2rem" }}>
                Proyectos Arquitectónicos
              </h1>
            </Comp.TextCenter>

            <ProjectCard
              title="Zempoala 560"
              description="REMODELACIÓN SIN MODIFICAR ESTRUCTURA / ACABADOS / MADERAS / ALUMINIOS
              / READECUACIÓN DE ESPACIOS"
            >
              <div>
                <Comp.Row mobile>
                  <GalleryColumnBig>
                    <img src={Zempoala1} />
                  </GalleryColumnBig>
                  <GalleryColumnSmall>
                    <img src={Zempoala2} />
                    <img src={Zempoala3} />
                  </GalleryColumnSmall>
                </Comp.Row>
              </div>
              <div>
                <Comp.Row mobile>
                  <GalleryColumnBig>
                    <img src={Zempoala4} />
                  </GalleryColumnBig>
                  <GalleryColumnSmall>
                    <img src={Zempoala5} />
                    <img src={Zempoala6} />
                  </GalleryColumnSmall>
                </Comp.Row>
              </div>
              <div>
                <Comp.Row mobile>
                  <GalleryColumnBig>
                    <img src={Zempoala7} />
                  </GalleryColumnBig>
                  <GalleryColumnSmall>
                    <img src={Zempoala8} />
                    <img src={Zempoala9} />
                  </GalleryColumnSmall>
                </Comp.Row>
              </div>
            </ProjectCard>

            <ProjectCard
              title="Mar de la Tranquilidad 20"
              description="PROYECTO DE REMODELACIÓN INTERIOR Y EXTERIOR ESPECÍFICAMENTE DE ACABADOS"
            >
              <div>
                <Comp.Row mobile>
                  <GalleryColumnSmall>
                    <img src={Mar2} />
                  </GalleryColumnSmall>
                  <GalleryColumnBig>
                    <img src={Mar1} />
                  </GalleryColumnBig>
                </Comp.Row>
              </div>
              <div>
                <Comp.Row mobile>
                  <GalleryColumnSmall>
                    <img src={Mar4} />
                    <img src={Mar5} />
                  </GalleryColumnSmall>
                  <GalleryColumnBig>
                    <img src={Mar3} />
                  </GalleryColumnBig>
                </Comp.Row>
              </div>
              <div>
                <Comp.Row mobile>
                  <GalleryColumnSmall>
                    <img src={Mar7} />
                  </GalleryColumnSmall>
                  <GalleryColumnBig>
                    <img src={Mar6} />
                  </GalleryColumnBig>
                </Comp.Row>
              </div>
            </ProjectCard>

            <ProjectCard
              title="Oriente 237 - 430"
              description="REMODELACIÓN CON REESTRUCTURACIÓN INTERIOR Y EXTERIOR CONVIRTIENDO LA PROPIEDAD DE CASA HABITACIÓN A 6 DEPARTAMENTOS EN RENTA."
            >
              <div>
                <Comp.Row mobile>
                  <GalleryColumnBig>
                    <img src={Oriente1} />
                  </GalleryColumnBig>
                  <GalleryColumnSmall>
                    <img src={Oriente2} />
                    <img src={Oriente3} />
                  </GalleryColumnSmall>
                </Comp.Row>
              </div>
              <div>
                <Comp.Row mobile>
                  <GalleryColumnBig>
                    <img src={Oriente4} />
                  </GalleryColumnBig>
                  <GalleryColumnSmall>
                    <img src={Oriente5} />
                    <img src={Oriente6} />
                  </GalleryColumnSmall>
                </Comp.Row>
              </div>
              <div>
                <Comp.Row mobile>
                  <GalleryColumnBig>
                    <img src={Oriente7} />
                  </GalleryColumnBig>
                  <GalleryColumnSmall>
                    <img src={Oriente8} />
                    <img src={Oriente9} />
                  </GalleryColumnSmall>
                </Comp.Row>
              </div>
            </ProjectCard>

            <ProjectCard
              title="Lago Victoria 86"
              description="EJECUCIÓN DE CANCELERÍA Y CELOSÍA"
            >
              <div>
                <Comp.Row mobile>
                  <GalleryColumnSmall>
                    <img src={Lago2} />
                    <img src={Lago3} />
                  </GalleryColumnSmall>
                  <GalleryColumnBig>
                    <img src={Lago1} />
                  </GalleryColumnBig>
                </Comp.Row>
              </div>
              <div>
                <Comp.Row mobile>
                  <GalleryColumnSmall>
                    <img src={Lago5} />
                    <img src={Lago6} />
                  </GalleryColumnSmall>
                  <GalleryColumnBig>
                    <img src={Lago4} />
                  </GalleryColumnBig>
                </Comp.Row>
              </div>
            </ProjectCard>
          </>
        )}
      </Comp.Section>
    </>
  );
};

const sharedSectionButton = css`
  border: 0;
  border-radius: 8px;
  padding: 1rem;
  background: ${theme.colors.darkColor};
  font-size: 0.8rem;
  margin-right: 1rem;
  text-transform: uppercase;
  font-family: "GT America Mono";
`;

const SectionButton = styled.button`
  ${sharedSectionButton}
  color: ${theme.colors.primaryColor};
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  outline: none;

  &:hover, &:active {
    transform: translate(0px, -3px);
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.darkColor};
  }
`;

export const GalleryColumnBig = styled(Comp.Column)`
  padding: 0.5rem;

  @media ${theme.breakpoint.upFromMobile} {
    width: 65.2%;
  }
`;

export const GalleryColumnSmall = styled(Comp.Column)`
  padding: 0.5rem;

  @media ${theme.breakpoint.upFromMobile} {
    width: 33.1%;
  }

  img {
    margin-bottom: 0.5rem;
  }
`;

const ProjectConstruccion = styled.div`
  position: relative;
  z-index: 2;

  > div {
    margin-bottom: 2rem;
  }
`;

const TitleSmall = styled.small`
  margin-left: 1rem;
  font-family: "GT America Mono";
  color: ${theme.colors.bodyLColor};
  font-size: 0.8rem;
  letter-spacing: 1px;
  white-space: normal;
  margin-bottom: 3rem;
  display: block;
`;
