import React, { useState } from "react";
import styled, { css } from "styled-components";
import * as Comp from "../components/layoutComponents";
import { theme } from "./theme";
import { CustomSlider } from "./hero";

import PlaceholderImage from "../images/gallery-placeholder.png";

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
            </Comp.TextCenter>

            <Project>
              <ProjectTitle>
                Zempoala 560
                <small>
                  REMODELACIÓN SIN MODIFICAR ESTRUCTURA / ACABADOS / MADERAS /
                  ALUMINIOS / READECUACIÓN DE ESPACIOS
                </small>
              </ProjectTitle>

              <CustomSlider autoplay>
                <div>
                  <Comp.Row mobile>
                    <GalleryColumnBig>
                      <img src={PlaceholderImage} />
                    </GalleryColumnBig>
                    <GalleryColumnSmall>
                      <img src={PlaceholderImage} />
                      <img src={PlaceholderImage} />
                    </GalleryColumnSmall>
                  </Comp.Row>
                </div>
                <div>
                  <Comp.Row mobile>
                    <GalleryColumnBig>
                      <img src={PlaceholderImage} />
                    </GalleryColumnBig>
                    <GalleryColumnSmall>
                      <img src={PlaceholderImage} />
                      <img src={PlaceholderImage} />
                    </GalleryColumnSmall>
                  </Comp.Row>
                </div>
              </CustomSlider>
            </Project>
          </>
        ) : (
          <>
            <Comp.TextCenter>
              <h1 className="serif" style={{ marginTop: "2rem" }}>
                Proyectos Arquitectónicos
              </h1>
            </Comp.TextCenter>

            <Project>
              <ProjectTitle>
                Zempoala 560
                <small>
                  REMODELACIÓN SIN MODIFICAR ESTRUCTURA / ACABADOS / MADERAS /
                  ALUMINIOS / READECUACIÓN DE ESPACIOS
                </small>
              </ProjectTitle>

              <CustomSlider autoplay>
                <div>
                  <Comp.Row mobile>
                    <GalleryColumnBig>
                      <img src={PlaceholderImage} />
                    </GalleryColumnBig>
                    <GalleryColumnSmall>
                      <img src={PlaceholderImage} />
                      <img src={PlaceholderImage} />
                    </GalleryColumnSmall>
                  </Comp.Row>
                </div>
                <div>
                  <Comp.Row mobile>
                    <GalleryColumnBig>
                      <img src={PlaceholderImage} />
                    </GalleryColumnBig>
                    <GalleryColumnSmall>
                      <img src={PlaceholderImage} />
                      <img src={PlaceholderImage} />
                    </GalleryColumnSmall>
                  </Comp.Row>
                </div>
              </CustomSlider>
            </Project>

            <Project>
              <ProjectTitle>
                Zempoala 560
                <small>
                  REMODELACIÓN SIN MODIFICAR ESTRUCTURA / ACABADOS / MADERAS /
                  ALUMINIOS / READECUACIÓN DE ESPACIOS
                </small>
              </ProjectTitle>

              <CustomSlider autoplay>
                <div>
                  <Comp.Row mobile>
                    <GalleryColumnBig>
                      <img src={PlaceholderImage} />
                    </GalleryColumnBig>
                    <GalleryColumnSmall>
                      <img src={PlaceholderImage} />
                      <img src={PlaceholderImage} />
                    </GalleryColumnSmall>
                  </Comp.Row>
                </div>
                <div>
                  <Comp.Row mobile>
                    <GalleryColumnBig>
                      <img src={PlaceholderImage} />
                    </GalleryColumnBig>
                    <GalleryColumnSmall>
                      <img src={PlaceholderImage} />
                      <img src={PlaceholderImage} />
                    </GalleryColumnSmall>
                  </Comp.Row>
                </div>
              </CustomSlider>
            </Project>

            <Project>
              <ProjectTitle>
                Zempoala 560
                <small>
                  REMODELACIÓN SIN MODIFICAR ESTRUCTURA / ACABADOS / MADERAS /
                  ALUMINIOS / READECUACIÓN DE ESPACIOS
                </small>
              </ProjectTitle>

              <CustomSlider autoplay>
                <div>
                  <Comp.Row mobile>
                    <GalleryColumnBig>
                      <img src={PlaceholderImage} />
                    </GalleryColumnBig>
                    <GalleryColumnSmall>
                      <img src={PlaceholderImage} />
                      <img src={PlaceholderImage} />
                    </GalleryColumnSmall>
                  </Comp.Row>
                </div>
                <div>
                  <Comp.Row mobile>
                    <GalleryColumnBig>
                      <img src={PlaceholderImage} />
                    </GalleryColumnBig>
                    <GalleryColumnSmall>
                      <img src={PlaceholderImage} />
                      <img src={PlaceholderImage} />
                    </GalleryColumnSmall>
                  </Comp.Row>
                </div>
              </CustomSlider>
            </Project>

            <Project>
              <ProjectTitle>
                Zempoala 560
                <small>
                  REMODELACIÓN SIN MODIFICAR ESTRUCTURA / ACABADOS / MADERAS /
                  ALUMINIOS / READECUACIÓN DE ESPACIOS
                </small>
              </ProjectTitle>

              <CustomSlider autoplay>
                <div>
                  <Comp.Row mobile>
                    <GalleryColumnBig>
                      <img src={PlaceholderImage} />
                    </GalleryColumnBig>
                    <GalleryColumnSmall>
                      <img src={PlaceholderImage} />
                      <img src={PlaceholderImage} />
                    </GalleryColumnSmall>
                  </Comp.Row>
                </div>
                <div>
                  <Comp.Row mobile>
                    <GalleryColumnBig>
                      <img src={PlaceholderImage} />
                    </GalleryColumnBig>
                    <GalleryColumnSmall>
                      <img src={PlaceholderImage} />
                      <img src={PlaceholderImage} />
                    </GalleryColumnSmall>
                  </Comp.Row>
                </div>
              </CustomSlider>
            </Project>
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

  &:hover {
    transform: translate(0px, -3px);
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.darkColor};
  }
`;

const Project = styled.div`
  padding: 2rem 0;
`;

const ProjectTitle = styled.h4`
  font-family: "Ogg";
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  small {
    margin-left: 1rem;
    font-family: "GT America Mono";
    color: ${theme.colors.bodyLColor};
    font-size: 0.8rem;
    letter-spacing: 1px;
  }
`;

const GalleryColumnBig = styled(Comp.Column)`
  width: 66.9%;
  padding: 0.5rem;
`;

const GalleryColumnSmall = styled(Comp.Column)`
  width: 33.1%;
  padding: 0.5rem;

  img {
    margin-bottom: 0.5rem;
  }
`;
