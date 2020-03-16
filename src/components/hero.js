import React from "react";
import styled, { css } from "styled-components";
import * as Comp from "./layoutComponents";
import { theme } from "./theme";
import Slider from "infinite-react-carousel";
import * as Keyframes from "./keyframes";

import Logo from "../images/logo.png";
import YellowDetailImage from "../images/soumaya.jpg";
import BlackDetailImage from "../images/black-detail.jpg";

import ArrowRight from "../images/arrow-right.png";
import ArrowLeft from "../images/arrow-left.png";

import Image1 from "../images/gallery-placeholder.png";
import Image2 from "../images/hero2.jpg";
import Image3 from "../images/hero3.jpg";
import Image4 from "../images/hero4.jpg";
import Image5 from "../images/hero5.jpg";

const Hero = () => (
  <HeroContainer>
    <Comp.Container>
      <HeroContent mobile>
        <HeroText>
          <img src={Logo} style={{ marginBottom: "2rem" }} />
          <p style={{ opacity: "75%" }}>
            En ram arquitecto nos especializamos en construcción, remodelación y
            reutilización de espacios existentes para giros habitacional,
            comercial e industrial.
          </p>
        </HeroText>
        <HeroGallery>
          <CustomSlider autoplay>
            <HeroGalleryItem>
              <img src={Image1} />
              <p>Zempoala 560</p>
            </HeroGalleryItem>
            <HeroGalleryItem>
              <img src={Image2} />
              <p>Mar de la Tranquilidad 20</p>
            </HeroGalleryItem>
            <HeroGalleryItem>
              <img src={Image3} />
              <p>Zempoala 560</p>
            </HeroGalleryItem>
            <HeroGalleryItem>
              <img src={Image4} />
              <p>Lago Victoria 86</p>
            </HeroGalleryItem>
            <HeroGalleryItem>
              <img src={Image5} />
              <p>Oriente 237 - 430</p>
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

  @media ${theme.breakpoint.upFromMobile} {
    img {
      height: 100%;
      width: auto;
      max-width: none;
    }
  }
`;

const HeroYellowShade = styled.div`
  ${sharedDetail}
  animation: ${Keyframes.SlideTop} .5s ease-in-out;
  right: 0;
  width: 50%;
  height: 120%;

  @media ${theme.breakpoint.onlyMobile} {
    top: 500px;
    width: 100%;
    left: 0;
    height: 200px;
  }
`;

const HeroBlackShade = styled.div`
  ${sharedDetail}
  animation: ${Keyframes.SlideTop} .5s ease-in-out;

  left: 0;
  width: 50%;
  height: 120%;

  @media ${theme.breakpoint.onlyMobile} {
    display: none;
  }
`;

const HeroContent = styled(Comp.Row)`
  align-items: center;
  position: relative;
  z-index: 1;
  padding-top: 5rem;
`;

const HeroText = styled(Comp.Column)`
  animation: ${Keyframes.SlideBottomLarge} 1s ease-in-out;

  @media ${theme.breakpoint.upFromMobile} {
    padding-top: 10rem;

    img {
      position: absolute;
      width: 450px;
      top: 5rem;
      z-index: 3;
    }
  }

  @media ${theme.breakpoint.onlyMobile} {
    text-align: center;
    margin-bottom: 2rem;

    img {
      max-width: 75%;
    }
  }
`;

const HeroGallery = styled(Comp.Column)`
  min-width: 75%;

  @media ${theme.breakpoint.upFromMobile} {
    padding-left: 10%;
  }

  @media ${theme.breakpoint.onlyMobile} {
    width: 100%;
  }
`;

export const CustomSlider = styled(Slider)`
  min-height: 500px;
  animation: ${Keyframes.Dissolve} 1s ease-in-out forwards;
  animation-delay: 0.5s;
  opacity: 0;

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
