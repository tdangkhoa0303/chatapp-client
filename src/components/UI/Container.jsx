import { Component } from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";

export default class Container extends Component {
  static Heading = ({ children, style }) => (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        height: "10rem",
        padding: "2rem 0",

        ...style,
      }}
    >
      {children}
    </div>
  );

  render() {
    return (
      <div
        css={{
          padding: "1rem",
          borderStyle: "solid",
          borderColor: "#eeeeee",
          borderWidth: "0",
          ...this.props.style,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
