import { default as styled } from "styled-components";
import {
  flexbox,
  space,
  layout,
  color,
  textAlign,
  border,
  position,
  shadow,
  gridGap,
  gridTemplateColumns,
} from "styled-system";

export const Container = styled.div`
  ${(props) => props.transition && `transition: ${props.transition};`}
  ${(props) =>
    props.gradientBackground &&
    `
        background-image: linear-gradient(
            ${props.gradientBackground.degrees?.[0] || "90.53deg"}, 
            ${props.gradientBackground.color1} ${
      props.gradientBackground.degrees?.[1] || "0.66%"
    },
            ${props.gradientBackground.color2} ${
      props.gradientBackground.degrees?.[2] || "98.27%"
    },
            ${props.gradientBackground.color1} ${
      props.gradientBackground.degrees?.[3] || "100%"
    }
        );
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
    props.gradientBorder &&
    `
        border-width: ${props.gradientBorder.width};
        border-style: solid;
        border-image: linear-gradient(${
          props.gradientBorder.degrees?.[0] || "90.53deg"
        },
        ${props.gradientBorder.color1} ${
      props.gradientBorder.degrees?.[1] || "0.66%"
    },
        ${props.gradientBorder.color2} ${
      props.gradientBorder.degrees?.[2] || "98.27%"
    }
        ${
          props.gradientBorder.color3
            ? `, ${props.gradientBorder.color3} ${
                props.gradientBorder.degrees?.[3] || "100%"
              })`
            : ")"
        } 1;
`}
    ${(props) =>
    props.backgroundImage &&
    `background-image: url(${props.backgroundImage});
         background-size: cover;
    `}
    ${(props) =>
    props.cursor &&
    `cursor: ${props.cursor};
    `}

    ${(props) => props.filter && `filter: ${props.filter};`}
    ${(props) =>
    props.backdropFilter && `backdrop-filter: ${props.backdropFilter};`}
    ${layout}
    ${space}
    ${flexbox}
    ${color}
    ${textAlign}
    ${border}
    ${position}
    ${shadow}
    ${gridGap}
    ${gridTemplateColumns}
`;

Container.defaultProps = {
  display: "flex",
};
