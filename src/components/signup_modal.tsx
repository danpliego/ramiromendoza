import React, { useState } from "react";
import styled, { css } from "styled-components";
import * as Components from "../components/layoutComponents";
import { theme } from "./theme";

export const SignupModal: React.FC = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  console.log(isModalOpen);
  return (
    <>
      <Components.BtnPrimary small onClick={() => setModalOpen(true)}>
        Descargar ahora{" "}
      </Components.BtnPrimary>
      <ModalWrapper isModalOpen={isModalOpen}>
        <ModalContent>
          <CloseButton onClick={() => setModalOpen(false)}>X</CloseButton>
          <h4 className="extended" style={{ width: "90%" }}>
            Completa el formulario para descargar tu versión de prueba
          </h4>
          {children}
        </ModalContent>
        <ModalBackDrop />
      </ModalWrapper>
    </>
  );
};

export const ModalWrapper = styled.div<{
  isModalOpen: boolean;
}>`
  display: none;

  ${props =>
    props.isModalOpen &&
    css`
      display: block;
    `}
`;

export const ModalContent = styled.div`
  position: fixed;
  width: 50%;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 5px 30px (0, 0, 0, 0.3);
  left: 25%;
  top: 10%;
  z-index: 2;
  margin: 0px auto;
  padding: 2rem;

  @media ${theme.breakpoint.onlyMobile} {
    width: 100%;
    border-radius: 0;
    left: 0;
    top: 0;
`;

export const ModalBackDrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
`;

const CloseButton = styled.button`
  border: 0;
  background: none;
  font-size: 24px;
  position: absolute;
  right: 2rem;
  top: 2rem;
  font-weight: bold;
  opacity: 0.5;
  color: ${theme.colors.bodyColor};
`;
