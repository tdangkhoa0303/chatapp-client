import { Component } from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";

class List extends Component {
  static Item = ({ children, style, ...props }) => (
    <li css={style} {...props}>
      {children}
    </li>
  );

  render() {
    const { children, style, direction } = this.props;
    return (
      <ul
        css={{
          listStyle: "none",
          ...(direction === "horizontal" ? { display: "flex" } : {}),
          ...style,
        }}
      >
        {children}
      </ul>
    );
  }
}
export default List;
