import React from "react";
import styled, { css } from "styled-components";
import * as Comp from "./layoutComponents";
import { theme } from "./theme";
import Slider from "infinite-react-carousel";
import * as Keyframes from "./keyframes";

import Logo from "../images/logo.svg";
import PlaceholderImage from "../images/gallery-placeholder.png";
import YellowDetailImage from "../images/soumaya.jpg";
import BlackDetailImage from "../images/black-detail.jpg";

import ArrowRight from "../images/arrow-right.png";
import ArrowLeft from "../images/arrow-left.png";

const Hero = () => (
  <HeroContainer>
    <Comp.Container>
      <HeroContent mobile>
        <HeroText>
          <img src={Logo} style={{ marginBottom: "2rem" }} />
          <p style={{ opacity: "75%" }}>
            Arquitecto integral especializado en construcción, remodelación y
            reutilización de espacios existentes para giros habitacional,
            comercial e industrial.
          </p>
        </HeroText>
        <HeroGallery>
          <CustomSlider autoplay>
            <HeroGalleryItem>
              <img src={PlaceholderImage} />
              <p>Zempoala 560 - 2018</p>
            </HeroGalleryItem>
            <HeroGalleryItem>
              <img src={PlaceholderImage} />
              <p>Zempoala 560</p>
            </HeroGalleryItem>
          </CustomSlider>
        </HeroGallery>
      </HeroContent>
    </Comp.Container>
    <HeroYellowShade>
      <img src={YellowDetailImage} />
    </HeroYellowShade>
    <HeroBlackShade>
      <img src={BlackDetailImage} />
    </HeroBlackShade>
  </HeroContainer>
);

export default Hero;

const HeroContainer = styled.div`
  position: relative;
`;

const sharedDetail = css`
  position: absolute;
  top: 0;

  img {
    height: 100%;
    width: auto;
    max-width: none;
  }
`;

const HeroYellowShade = styled.div`
  ${sharedDetail}
  animation: ${Keyframes.SlideTop} .5s ease-in-out;
  right: 0;
  width: 50%;
  height: 120%;
`;

const HeroBlackShade = styled.div`
  ${sharedDetail}
  animation: ${Keyframes.SlideTop} .5s ease-in-out;

  left: 0;
  width: 50%;
  height: 120%;
`;

const HeroContent = styled(Comp.Row)`
  align-items: center;
  position: relative;
  z-index: 1;
  padding-top: 5rem;
`;

const HeroText = styled(Comp.Column)`
  animation: ${Keyframes.SlideBottomLarge} 1s ease-in-out;
`;

const HeroGallery = styled(Comp.Column)`
  min-width: 75%;

  @media ${theme.breakpoint.upFromMobile} {
    padding-left: 10%;
  }
`;

export const CustomSlider = styled(Slider)`
  min-height: 500px;
  animation: ${Keyframes.Dissolve} 1s ease-in-out;

  .carousel-arrow {
    background: black;
    width: 3rem;
    height: 3rem;
    border-radius: 0;
    top: 42%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
    transition: all 0.15s ease-in-out;

    &:hover {
      transform: translate(0px, -3px);
    }

    &.carousel-prev {
      &:before {
        background-image: url(${ArrowLeft});
      }
    }

    &.carousel-next {
      &:before {
        background-image: url(${ArrowRight});
      }
    }

    &:before {
      font-size: 0.9rem;
    }
  }
`;

const HeroGalleryItem = styled.div`
  border-bottom: 1px solid ${theme.colors.primaryColor};

  p {
    text-align: right;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-top: 0.5rem;
    font-size: 12px;
  }
`;
