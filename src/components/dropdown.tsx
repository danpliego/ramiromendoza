import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import { useOnClickOutside } from "./useOnClickOutside";
import { Link } from "gatsby";
import { theme } from "./theme";

interface DropdownProps {
  dropdownToggle: JSX.Element;
}
export const Dropdown: React.FC<DropdownProps> = ({
  children,
  dropdownToggle
}) => {
  return (
    <>
      <DropdownWrapper>
        <DropdownToggleContainer>{dropdownToggle}</DropdownToggleContainer>
        <DropdownContent>{children}</DropdownContent>
      </DropdownWrapper>
    </>
  );
};

export const DropdownContent = styled.div<{
  isOpen: boolean;
}>`
  opacity: 0;
  pointer-events: none;
  position: absolute;
  background: #fff;
  border: 1px solid ${props => props.theme.colors.bodyColor};
  border-radius: 2px;
  transition: opacity 0.15s ease-in-out;
  z-index: ${props => props.theme.zIndex.level3};
  top: 100%;
  left: 0;

  > div {
    overflow: hidden;
  }

  ${props =>
    props.isOpen &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`;

export const DropdownWrapper = styled.div`
  position: relative;

  @media ${theme.breakpoint.onlyMobile} {
    display: none;
  }

  &:hover {
    ${DropdownContent} {
      opacity: 1;
      pointer-events: auto;
    }
  }
`;

export const DropdownToggleContainer = styled.div`
  cursor: pointer;
`;

export const DropdownItem = styled(Link)`
  width: 100%;
  white-space: nowrap;
  padding: 1rem 2rem;
  text-align: left;
  outline: 0;
  display: block;

  &:hover {
    background: ${props => props.theme.colors.bodyColor};
    color: ${props => props.theme.colors.whiteColor};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.colors.bodyColor};
  }
`;
