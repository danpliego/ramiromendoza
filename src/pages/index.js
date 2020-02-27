import React from "react";

import Layout from "../components/layout";
import * as Comp from "../components/layoutComponents";
import SEO from "../components/seo";
import styled from "styled-components";
import ProductColumn from "../components/ProductColumn";
import { theme } from "../components/theme";

import HeroImage from "../images/home/hero-image.png";
import BannerImage from "../images/home/banner-image.png";

import PosTools from "../images/pos-tools/home-image.jpg";
import Servicios from "../images/servicios-en-la-nube/home-image.jpg";
import BillPocket from "../images/bill-pocket/home-image.jpg";
import Desarrollo from "../images/desarrollo-a-la-medida/home-image.jpg";
import TiempoAire from "../images/tiempo-aire/home-image.jpg";
import Corporativos from "../images/corporativos/home-image.jpg";
import Facturacion from "../images/facturacion/home-image.jpg";

import Slider from "infinite-react-carousel";

const IndexPage = () => (
  <Layout>
    <Comp.Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Hero>
        <Comp.Row mobile>
          <HeroContent>
            <h1 className="extended">
              La forma simple de administrar tu negocio.{" "}
            </h1>
            <p className="body-l" style={{ marginBottom: "2rem" }}>
              MyBusiness POS es el sistema de punto de venta que hará tu vida
              más sencilla, con su gran precio, su facilidad de uso y su
              experiencia en el mercado. Da clic y compruébalo tu mismo.
            </p>
            <Comp.ButtonContainer>
              <Comp.ButtonPrimary to="/productos/my-business">
                Pruébalo gratis
              </Comp.ButtonPrimary>
            </Comp.ButtonContainer>
          </HeroContent>
          <Comp.Column flex={1} style={{ marginTop: "-2rem" }}>
            <img
              src={HeroImage}
              style={{ width: "620px" }}
              alt="MyBusiness POS sistema de punto de venta gratis"
            />
          </Comp.Column>
        </Comp.Row>
      </Hero>
    </Comp.Container>
    <BlueArea>
      <RowButtons>
        <Comp.Row padded mobile>
          <ProductColumn
            title="Venta de Tiempo Aire"
            description="Aumenta tus ganancias y flujo de clientes ofreciendo recargas y pago de servicios."
            link="/productos/tiempo-aire"
            image={TiempoAire}
            buttonText="Más información"
          />
          <ProductColumn
            title="Facturación Electrónica"
            description="Adquiere paquetes para generar facturas electrónicas en tu negocio."
            link="/productos/facturacion-electronica"
            image={Facturacion}
            buttonText="Más información"
            secondaryLink="/facturacion-electronica-comprar"
          />
          <ProductColumn
            title="Corporativos"
            description="Controla tus sucursales o franquicias con una solución adaptada a tu medida."
            link="/corporativos"
            image={Corporativos}
            buttonText="Más información"
          />
          <ProductColumn
            title="Servicios en la nube"
            description="Respalda tu información importante y accede a ella en el momento que lo necesites."
            link="/productos/servicios-en-la-nube"
            image={Servicios}
            buttonText="Más información"
          />
        </Comp.Row>
      </RowButtons>
      <HomeBannerContainer>
        <Comp.BannerImage>
          <img
            src={BannerImage}
            alt="MyBusiness POS sistema de punto de venta gratis"
          />
        </Comp.BannerImage>
        <CarouselContainer>
          <Slider autoplay>
            <div>
              <h3 className="expanded">
                MyBusiness POS me ayuda a controlar inventarios, medir las
                ventas del día y llevar un registro del dinero. En pocas
                palabras, nos ayuda a vender mejor
              </h3>
              <h6>Javier Sánchez Navarrete propietario de Súper 24</h6>
            </div>
            <div>
              <h3 className="expanded">
                Con MyBusiness POS llevo un mejor control y me ayuda a agilizar
                el proceso de venta gracias a la simpleza en la interfaz del
                punto de venta.
              </h3>
              <h6>Angie Durán propietaria de Ferremas México</h6>
            </div>
            <div>
              <h3 className="expanded">
                MyBusiness POS es la columna vertebral de mi negocio, con el
                controlo, programo, superviso y administro todo de forma rápida
                y sencilla.
              </h3>
              <h6>Aurelio Arratia propietario de Lechería Victoria</h6>
            </div>
            <div>
              <h3 className="expanded">
                MyBusiness POS me ha ayudado a desarrollar oportunidades de
                negocio en áreas de comercio al por mayor.
              </h3>
              <h6>Gustavo Mendoza propietario de IntegraBits</h6>
            </div>
          </Slider>
        </CarouselContainer>
      </HomeBannerContainer>
      <Comp.Container style={{ marginTop: "3rem" }}>
        <h4 style={{ textAlign: "center", marginBottom: "3rem" }}>
          Más soluciones para tu Negocio.
        </h4>
        <Comp.Row padded mobile>
          <ProductColumn
            title="Billpocket"
            description="Genera ventas y levanta pedidos desde tu celular."
            link="/productos/bill-pocket"
            image={BillPocket}
            buttonText="Más información"
          />
          <ProductColumn
            title="POS Tools"
            description="Controla el inventario, ventas y pagos de tu negocio desde tu celular."
            link="/productos/pos-tools"
            image={PosTools}
            buttonText="Más información"
          />
          <ProductColumn
            title="Desarrollo a la medida"
            description="El único sistema de punto de venta que se adecúa a tu requerimiento particular o giro comercial."
            link="/productos/desarrollo-a-la-medida"
            image={Desarrollo}
            buttonText="Más información"
          />
        </Comp.Row>
      </Comp.Container>
    </BlueArea>
  </Layout>
);

export default IndexPage;

export const Hero = styled.div``;

export const HeroContent = styled(Comp.Column)`
  @media ${theme.breakpoint.upFromMobile} {
    width: 45%;
    padding-right: 3rem;
    padding-top: 4rem;

    h1 {
      margin: 2rem 0;
    }
  }

  @media ${theme.breakpoint.onlyMobile} {
    margin-bottom: 2rem;
    order: 2;

    h1 {
      margin: -1rem 0 1rem;
    }
  }
`;

export const BlueArea = styled.div`
  background: #f0f4f6;
  padding: 3rem 0;

  @media ${theme.breakpoint.upFromMobile} {
    margin-top: -6rem;
  }
`;

export const RowButtons = styled(Comp.Container)`
  padding: 1.5rem;
`;

const CarouselContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 500px;
  z-index: 10000;
  top: 15%;

  @media ${theme.breakpoint.upFromMobile} {
    top: 30%;
  }

  div {
    text-align: center;
  }

  h3,
  h6 {
    color: #fff;
    max-width: 70%;
    margin: 1rem auto;
    text-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  }

  .carousel-arrow {
    color: #000 !important;
    background: #fff;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    &:before {
      font-size: 1rem;
      display: block;
      background: none;
      padding-top: 9px;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  .carousel-next {
    right: 2rem;
    top: 3rem;
  }

  .carousel-prev {
    left: 2rem;
    top: 3rem;
  }

  .carousel-next:before {
    content: ">";
  }

  .carousel-prev:before {
    content: "<";
  }

  @media ${theme.breakpoint.onlyMobile} {
    h3 {
      font-size: 1rem;
    }

    .carousel-arrow {
      color: #000 !important;
      background: #fff;
      width: 2rem;
      height: 2rem;

      &:before {
        font-size: 0.8rem;
      }

      &.carousel-next {
        right: 1rem;
      }

      &.carousel-prev {
        left: 1rem;
      }
    }
  }
`;

const HomeBannerContainer = styled(Comp.BannerContainer)`
  min-height: 300px;

  img {
    opacity: 0.8;
  }

  @media ${theme.breakpoint.upFromMobile} {
    height: 600px;
  }
`;
