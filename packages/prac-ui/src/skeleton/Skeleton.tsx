/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import { useMemo } from "react";

interface Props {
  width?: number;
  height?: number;
  circle?: boolean;
  rounded?: boolean;
  count?: number;
  unit?: string; // px or %
  animation?: boolean;
  color?: string;
  style?: React.CSSProperties;
  children?: any;
}

const pulseKeyFrame = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

// 1. styled - string
// const Base = styled.span<Props>`
//   background-color: ${({ color }) => color && color};
//   border-radius: ${({ rounded, circle }) => (rounded ? "8px" : "50%")};
//   display: ${({ width, height }) => (width || height) && "block"};
//   width: ${({ width, unit }) => width && unit && `${width}${unit}`};
//   height: ${({ height, unit }) => height && unit && `${height}${unit}`};
//   ${({ animation }) =>
//     animation ? `${pulseKeyFrame} 1.5s ease-in-out infinite` : "none"};
// `;

// 2. styled - obj
const Base = styled.span<Props>({}, (props) => ({
  backgroundColor: props?.color,
  borderRadius: props.rounded ? "8px" : props.circle ? "50%" : "0",
  display: props.width || props.height ? "block" : "inherit",
  width: props.width && props.unit && `${props.width}${props.unit}`,
  height: props.height && props.unit && `${props.height}${props.unit}`,
  animation: props.animation
    ? `${pulseKeyFrame} 1.5s ease-in-out infinite`
    : "none",
}));

// 3. css - string

// 4. css - obj -> 불편함
// const BaseSpan: React.FC<Props> = (props) => {
//   return (
//     <span
//       css={{
//         backgroundColor: props.color && props.color,
//         borderRadius: props.rounded ? "8px" : "50%",
//         display: props.width || props.height ? "block" : "inherit",
//         width: props.width && props.unit && `${props.width}${props.unit}`,
//         height: props.height && props.unit && `${props.height}${props.unit}`,
//         animation: props.animation
//           ? `${pulseKeyFrame} 1.5s ease-in-out infinite`
//           : "none",
//       }}
//     >
//       {props.children}
//     </span>
//   );
// };

const Content = styled.span`
  opacity: 0;
`;

const Skeleton: React.FC<Props> = ({
  animation = true,
  children,
  width,
  height,
  circle,
  rounded,
  count,
  unit = "px",
  color = "#f4f4f4",
  style,
}) => {
  // count 4 => '----'
  const content = useMemo(
    () => [...Array({ length: count })].map(() => "-").join(""),
    [count]
  );

  return (
    <Base
      style={style}
      rounded={rounded}
      circle={circle}
      width={width}
      height={height}
      animation={animation}
      unit={unit}
      color={color}
    >
      <Content>{children || content}</Content>
    </Base>
  );
};

export default Skeleton;
