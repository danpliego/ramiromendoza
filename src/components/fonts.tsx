import styled, { css } from "styled-components";

export interface TypographyProps {
  color?: string;
  weight?: string;
  marginBottom?: string;
  hasEllipsis?: boolean;
  isItalic?: boolean;
  noWrap?: boolean;
  isUppercase?: boolean;
  textCenter?: boolean;
  isUnderlined?: boolean;
  fontSize?: string;
  hasCustomColor?: boolean;
}

export interface BadgeProps {
  bgColor?: string;
  color?: string;
  isRounded?: boolean;
}

const sharedBody = css<TypographyProps>`
  color: ${props => props.color || props.theme.colors.bodyColor};
  font-weight: ${props => props.weight || "400"};
  font-size: ${props => props.fontSize || props.theme.fontSizes.body};
  margin-bottom: ${props => props.marginBottom || props.theme.space.level0};
  
  a {
    text-decoration: underline;
    color: ${props => props.color || props.theme.colors.bodyColor};
  }
  
  ${props =>
    props.hasEllipsis &&
    css`
      ${ellipsis}
    `}
    
  ${props =>
    props.isItalic &&
    css`
      font-style: italic;
    `}

  ${props =>
    props.isUppercase &&
    css`
      ${sharedUppercase};
    `}
      
  ${props =>
    !props.noWrap &&
    css`
      word-break: break-word;
    `}

  ${props =>
    props.textCenter &&
    css`
      display: block;
      text-align: center;
    `}

  ${props =>
    props.isUnderlined &&
    css`
      text-decoration: underline;
    `}

  
`;

const sharedLink = css<TypographyProps>`
  ${sharedBody}
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  ${props =>
    props.hasCustomColor &&
    css`
      color: ${props.theme.customColors.textColor};
    `}
`;

// Headings

export const Display = styled.h1<TypographyProps>`
  ${sharedHeading}
  font-size:${props => props.theme.fontSizes.display};
`;

export const Heading1 = styled.h1<TypographyProps>`
  ${sharedHeading}
  font-size: ${props => props.theme.fontSizes.heading1};
`;

export const Heading2 = styled.h2<TypographyProps>`
  ${sharedHeading}
  font-size: ${props => props.theme.fontSizes.heading2};
`;

export const Heading3 = styled.h3<TypographyProps>`
  ${sharedHeading}
  font-size: ${props => props.theme.fontSizes.heading3};
`;

export const Heading4 = styled.h4<TypographyProps>`
  ${sharedHeading}
  font-size: ${props => props.theme.fontSizes.heading4};
`;

export const Heading5 = styled.h5<TypographyProps>`
  ${sharedHeading}
  font-size: ${props => props.theme.fontSizes.heading5};
`;

export const Heading6 = styled.h6<TypographyProps>`
  ${sharedHeading}
  font-size: ${props => props.theme.fontSizes.body};
`;

// Body

export const Body = styled.p<TypographyProps>`
  ${sharedBody}
`;

// Todo danpliego: delete all this font-size constants and change them to use a prop

export const BodySM = styled.p<TypographyProps>`
  ${sharedBody}
  font-size: ${props => props.theme.fontSizes.bodySM};
`;

export const BodyXS = styled.p<TypographyProps>`
  ${sharedBody}
  font-size: ${props => props.theme.fontSizes.bodyXS};
`;

export const BodyXXS = styled.p<TypographyProps>`
  ${sharedBody}
  font-size: ${props => props.theme.fontSizes.bodyXXS};
`;

export const BodyXXXS = styled.p<TypographyProps>`
  ${sharedBody}
  font-size: ${props => props.theme.fontSizes.bodyXXXS};
`;

// Links

export const Link = styled(LinkTo)<TypographyProps>`
  ${sharedLink}
`;

export const LinkSM = styled(Link)`
  ${sharedLink}
  font-size: ${props => props.theme.fontSizes.bodySM};
`;

export const LinkXS = styled(Link)`
  ${sharedLink}
  font-size: ${props => props.theme.fontSizes.bodyXS};
`;

export const LinkXXS = styled(Link)`
  ${sharedLink}
  font-size: ${props => props.theme.fontSizes.bodyXXS};
`;

export const LinkXXXS = styled(Link)`
  ${sharedLink}
  font-size: ${props => props.theme.fontSizes.bodyXXXS};
`;

export const UnorderedList = styled.ul`
  ${sharedBody}
  padding-left: 1rem;

  li {
    margin-bottom: 0.33rem;
  }
`;

export const OrderedList = styled.ol`
  ${sharedBody}
  padding-left: 1rem;
  margin-bottom: 0.66rem;

  li {
    margin-bottom: 0.33rem;
  }

  > ol {
    list-style-type: lower-alpha;
  }

  > ol > li > ol {
    margin-top: 0.33rem;
    list-style-type: lower-roman;
    margin-bottom: 0.66rem;
  }
`;

export const Badge = styled(BodyXS)<BadgeProps>`
  ${sharedBody}
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.colors.bodyColor};
  display: inline-block;
  font-weight: ${props => props.theme.fontWeight.bold};
  color: ${props => props.color || props.theme.colors.bodyColor};
  background: ${props =>
    props.bgColor || props.theme.customColors.highlightColor};

  ${props =>
    props.isRounded &&
    css`
      border-radius: 1rem;
    `}
`;
