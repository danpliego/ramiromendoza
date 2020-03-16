import React from "react";
import { CustomSlider } from "./hero";
import styled from "styled-components";
import { theme } from "./theme";

export const ProjectCard = ({ title, description, children }) => {
  return (
    <Project>
      <ProjectTitle>
        {title}
        <small>{description}</small>
      </ProjectTitle>

      <CustomSlider>{children}</CustomSlider>
    </Project>
  );
};

const Project = styled.div`
  padding: 2rem 0;
`;

export const ProjectTitle = styled.h4`
  font-family: "Ogg";
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  white-space: nowrap;

  small {
    margin-left: 1rem;
    font-family: "GT America Mono";
    color: ${theme.colors.bodyLColor};
    font-size: 0.8rem;
    letter-spacing: 1px;
    white-space: normal;
  }

  @media ${theme.breakpoint.onlyMobile} {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1rem;

    small {
      margin-top: 1rem;
      margin-left: 0;
    }
  }
`;
