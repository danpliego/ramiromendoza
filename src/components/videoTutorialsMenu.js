import { string } from "prop-types";
import React from "react";
import styled from "styled-components";
import * as Layout from "./layoutComponents";
import { Link } from "gatsby";
import { theme } from "./theme";

import MyBusiness from "../images/icons/mybusiness.png";
import Facturacion from "../images/icons/factura.png";
import BillPocket from "../images/icons/bill-pocket.png";
import Otros from "../images/icons/otros.png";

const VideoTutorialsMenu = () => (
  <VideoTutorialsMenuContainer>
    <Link to="/soporte/video-tutoriales">
      <img src={MyBusiness} width="24" alt="" className="hidden-xs" />
      MyBusiness POS
    </Link>
    <Link to="/soporte/video-tutoriales/facturacion">
      <img src={Facturacion} width="24" alt="" className="hidden-xs" />
      Facturación
    </Link>
    <Link to="/soporte/video-tutoriales/bill-pocket/">
      <img src={BillPocket} width="22" alt="" className="hidden-xs" />
      Bill Pocket
    </Link>
    <Link to="/soporte/video-tutoriales/varios">
      <img src={Otros} width="20" alt="" className="hidden-xs" />
      Varios
    </Link>
  </VideoTutorialsMenuContainer>
);

VideoTutorialsMenu.propTypes = {
  name: string,
  subtitle: string || null
};

export default VideoTutorialsMenu;

const VideoTutorialsMenuContainer = styled(Layout.FlexContainer)`
  margin-bottom: 3rem;

  img {
    margin-right: 1rem;
  }
  a {
    display: flex;
    flex: 1;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-right: 1px solid #dbe4ea;
    border-bottom: 1px solid #dbe4ea;
    color: ${theme.colors.bodyColor};

    &:last-child {
      border-right: 0;
    }

    &:hover {
      background: #f4f4f4;
    }
  }
`;
