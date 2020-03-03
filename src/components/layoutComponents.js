import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { theme } from "./theme";

export const MainWrapper = styled.div`
  margin: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0px 1.0875rem;
  padding-top: 0;
`;
export const Row = styled.div`
  display: flex;
  flex: ${props => (props.flex ? props.flex : "initial")};
  margin: ${props => (props.padded ? "0 -1rem" : "0")};
  flex-direction: row;
  flex-wrap: ${props => (props.wrap ? props.wrap : "initial")};
  align-content: ${props =>
    props.alignContent ? props.alignContent : "initial"};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "initial"};
  @media screen and (max-width: 768px) {
    flex-direction: ${props => (props.mobile ? "column" : "row")};
  }
`;

export const Column = styled.div`
  flex: ${props => (props.flex ? props.flex : "initial")};
  padding: ${props => (props.padded ? "0 1rem" : "0")};
  flex-direction: column;
  align-content: ${props =>
    props.alignContent ? props.alignContent : "initial"};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "initial"};
  margin: ${props => (props.margin ? props.margin : "0")};
  width: ${props => (props.width ? props.width : "auto")};

  iframe {
    max-width: 100%;
  }
`;

const sharedButton = css`
  border: 1px solid;
  padding: ${props => (props.small ? ".5rem 1rem" : "1rem 2rem")};
  transition: all 0.15s ease-in-out;
  display: inline-block;
  font-size: ${props => (props.small ? ".8rem" : "1rem")};
  font-weight: 600;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    transform: translate(0px, -2px);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const ButtonPrimary = styled(Link)`
  ${sharedButton}
  border-color: ${props => props.theme.colors.bodyColor};
  background: ${props => props.theme.colors.bodyColor};
  color: ${props => props.theme.colors.whiteColor};

  &:hover {
    border-color: ${props => props.theme.colors.primaryColor};
    background: ${props => props.theme.colors.primaryColor};
    color: ${props => props.theme.colors.bodyColor};
  }
`;

export const BtnPrimary = styled.button`
  ${sharedButton}
  border-color: ${props => props.theme.colors.bodyColor};
  background: ${props => props.theme.colors.bodyColor};
  color: ${props => props.theme.colors.whiteColor};

  &:hover {
    border-color: ${props => props.theme.colors.primaryColor};
    background: ${props => props.theme.colors.primaryColor};
    color: ${props => props.theme.colors.bodyColor};
  }
`;

export const ButtonSecondary = styled(Link)`
  ${sharedButton}
  color: ${props => props.theme.colors.bodyColor};
  border-color: ${props => props.theme.colors.bodyColor};

  &:hover {
    border-color: ${props => props.theme.colors.primaryColor};
    background: ${props => props.theme.colors.primaryColor};
    color: ${props => props.theme.colors.bodyColor};
  }
`;

export const ButtonInverse = styled(Link)`
  ${sharedButton}
  color: ${props => props.theme.colors.whiteColor};
  border-color: ${props => props.theme.colors.whiteColor};

  &:hover {
    border-color: ${props => props.theme.colors.primaryColor};
    background: ${props => props.theme.colors.primaryColor};
    color: ${props => props.theme.colors.bodyColor};
  }
`;

export const ButtonDownload = styled.button`
  ${sharedButton}
  border-color: ${props => props.theme.colors.primaryColor};
  background: ${props => props.theme.colors.primaryColor};
  color: ${props => props.theme.colors.bodyColor};
  width: 100%;
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const Flex1 = styled.div`
  flex: 1;
`;

export const FlexCenterChild = styled(FlexContainer)`
  align-items: center;
  justify-content: center;
`;

export const FlexAlignChild = styled(FlexContainer)`
  talign-items: center;
`;

export const FlexJustifyChild = styled(FlexContainer)`
  justify-content: center;
`;

export const FlexColumn = styled(FlexContainer)`
  flex-direction: column;
`;

export const TextCenter = styled.div`
  text-align: center;
`;

export const TextRight = styled.div`
  text-align: center;
`;

export const sharedContainer = css`
  margin: 0px auto;
  padding: 3rem 0rem;
`;

export const Width75 = styled.div`
  ${sharedContainer}

  @media ${theme.breakpoint.upFromMobile} {
    max-width: 75%;
  }

`;

export const Width50 = styled.div`
  ${sharedContainer}
  @media ${theme.breakpoint.upFromMobile} {
    max-width: 50%;
  }
`;

export const Section = styled.div`
  ${sharedContainer}
`;
