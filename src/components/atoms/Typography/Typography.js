import { default as styled } from "styled-components";
import {
  color,
  space,
  typography as styledTypography,
  border,
  layout,
  display,
  position,
} from "styled-system";

const FONT_SIZE_MAP = {
  h1: [30, 30, 42, 50, 55, 65],
  h2: [25, 25, 30, 35, 40, 45],
  h3: [22, 22, 27, 30, 32, 35],
  h4: [20, 20, 22, 23, 25, 25],
  h5: [18, 18, 18, 20, 20, 20],
  h6: [16, 16, 16, 16, 18, 18],
  p: "1rem",
  span: "1rem",
};

const FONT_WEIGHT_MAP = {
  h1: 600,
  h2: 600,
  h3: 600,
  h4: 600,
  h5: 600,
  h6: 700,
  p: 300,
  span: 300,
};

const LINE_HEIGHT_MAP = {
  h1: [1.156],
  h2: [1.333],
  h3: [1.28],
  h4: [1.6],
  h5: [1.5],
  h6: [1.55],
  p: "inherit",
  span: "inherit",
};

const LETTER_SPACING_MAP = {
  h1: "-0.022em",
  h2: "-0.022em",
  h3: "-0.022em",
  h4: "-0.022em",
  h5: "-0.05em",
  h6: "0.3em",
  p: "-0.022em",
  span: "inherit",
};

const TEXT_TRANSFORM_MAP = {
  h1: "inherit",
  h2: "inherit",
  h3: "inherit",
  h4: "inherit",
  h5: "uppercase",
  h6: "uppercase",
  p: "inherit",
  span: "inherit",
};

const Typography = styled.input.attrs((props) => ({
  fontSize: props.fontSize || FONT_SIZE_MAP[props.as],
  fontWeight: props.fontWeight || FONT_WEIGHT_MAP[props.as],
  lineHeight: props.lineHeight || LINE_HEIGHT_MAP[props.as],
  letterSpacing: props.letterSpacing || LETTER_SPACING_MAP[props.as],
}))`
  font-family: ${(props) => props.theme.typography.fontFamily};
  color: #20222d;

  text-transform: ${(props) => TEXT_TRANSFORM_MAP[props.as]};

  ${(props) =>
    props.gradientBackground &&
    `
        background-image: linear-gradient(
            ${props.gradientBackground.degrees?.[0] || "90deg"}, 
            ${props.gradientBackground.color1} ${
      props.gradientBackground.degrees?.[1] || "0%"
    },
            ${props.gradientBackground.color2} ${
      props.gradientBackground.degrees?.[2] || "50%"
    },
            ${props.gradientBackground.color1} ${
      props.gradientBackground.degrees?.[3] || "100%"
    }
        );

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    `}

  ${(props) =>
    props.animatedGradient &&
    `
        animation: gradient-translate ${
          props.gradientAnimationDuration || 5
        }s ease-in-out infinite;
        background-size: 200% auto;
        `}

    ${(props) =>
    props.gradientUnderline &&
    `
        border-bottom: ${props.gradientUnderline.size} solid;
        border-image-slice: 1;
        border-image-source: linear-gradient(to left, ${props.gradientUnderline.colorStart}, ${props.gradientUnderline.colorEnd});
        padding-bottom: 2px;
    `}

    ${space}
    ${color}
    ${styledTypography}
    ${border}
    ${layout}
    ${display}
    ${position}
`;

Typography.defaultProps = {
  as: "span",
};

export default Typography;
