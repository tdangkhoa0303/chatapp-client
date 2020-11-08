import { Component } from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

const Default = styled.button`
  padding: 1.5rem 3rem;
  border: none;
  outline: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-size: 1.6rem;
  border-radius: 4rem;
`;

const Primary = css`
  color: #ffffff;
  background: #fdc830;
  background: -webkit-linear-gradient(to right, #f37335, #fdc830);
  background: linear-gradient(to right, #f37335, #fdc830);
  box-shadow: 0px 3px 10px rgba(3, 3, 3, 0.2);

  &:hover {
    box-shadow: 0px 3px 15px rgba(3, 3, 3, 0.3);
    transform: translateY(-2px);
  }
`;

export default class Button extends Component {
  static Primary = ({ children, ...props }) => (
    <Default css={Primary} {...props}>
      {children}
    </Default>
  );
  static Secondary = ({ children, ...props }) => (
    <Default {...props}>{children}</Default>
  );
  static Link = ({ children, ...props }) => (
    <Default {...props}>{children}</Default>
  );

  render() {
    return <Default {...this.props}>{this.props.children}</Default>;
  }
}
