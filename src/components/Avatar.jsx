import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
const Avatar = ({ src, alt = "avatar", size = "30px", onClick, style }) => {
  return (
    <div
      onClick={onClick}
      css={{
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        width: size,
        height: size,
        marginRight: "1rem",
        ...(src
          ? { backgroundImage: `url(${src})` }
          : { background: "linear-gradient(to top, #11998e, #38ef7d)" }),
        ...style,
      }}
    ></div>
  );
};

export default Avatar;
