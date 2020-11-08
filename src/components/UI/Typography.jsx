/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";

export const Heading = ({ level, children, style }) => {
  const styles = {
    fontWeight: "bold",
    ...style,
  };

  switch (level) {
    case 1:
      return (
        <h1
          css={{
            fontSize: "4rem",
            lineHeight: "4rem",
            marginBottom: "30px",
            ...styles,
          }}
        >
          {children}
        </h1>
      );
    case 2:
      return (
        <h2
          css={{
            fontSize: "3rem",
            lineHeight: "3rem",
            marginBottom: "20px",
            ...styles,
          }}
        >
          {children}
        </h2>
      );
    case 3:
      return (
        <h3
          css={{
            fontSize: "2.5rem",
            lineHeight: "2.5rem",
            ...styles,
          }}
        >
          {children}
        </h3>
      );
    case 4:
      return (
        <h4
          css={{
            fontSize: "2rem",
            lineHeight: "2rem",
            ...styles,
          }}
        >
          {children}
        </h4>
      );
    case 5:
    default:
      return (
        <h5
          css={{
            fontSize: "1.5rem",
            lineHeight: "1.5rem",
            marginBottom: "4px",
            ...styles,
          }}
        >
          {children}
        </h5>
      );
  }
};

export const Text = ({ type, children, style }) => {
  switch (type) {
    case "quote":
      return (
        <p css={{ fontSize: "12px", lineHeight: "18px", ...style }}>
          {children}
        </p>
      );
    case "normal":
    default:
      return (
        <p css={{ ...style, fontSize: "2rem", lineHeight: "3rem", ...style }}>
          {children}
        </p>
      );
  }
};

export default { Heading, Text };
