import { useState, Fragment } from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

const Label = styled.label({
  position: "absolute",
  top: "1.5rem",
  left: "3rem",
  color: "#888",
});

const InputWrapper = styled.div({
  position: "relative",
  fontSize: "1.6rem",
  marginBottom: "2rem",
});

const Message = styled.span({
  position: "absolute",
  padding: "1rem 1.5rem",
  backgroundColor: "#ffffff",
  borderRadius: "4px",
  boxShadow: "0 6px 14px rgba(3, 3, 3, 0.1)",
  top: "-3rem",
  left: "calc(100% - 3.5rem)",
  display: "none",

  "&:before": {
    content: "''",
    position: "absolute",
    width: 0,
    height: 0,
    borderLeft: "0.5rem solid transparent",
    borderRight: "0.5rem solid transparent",
    borderTop: "0.5rem solid #ffffff",
    bottom: "-0.5rem",
    left: "0.5rem",
  },
});

const Input = ({
  elementType,
  id,
  label,
  value,
  message = "asdadsadsa",
  changed,
  size,
  style,
  validator,
  autoComplete,
  ...elementConfig
}) => {
  const [isValidated, setValidated] = useState(true);

  const inputStyle = {
    padding: "1.5rem 3rem",
    width: "100%",
    outline: "none",
    backgroundColor: "#eeeeee",
    border: "none",
    borderRadius: "4rem",
  };

  const handleOnChange = (event) => {
    if (validator) {
      const validated = validator(event.target.value);
      setValidated(validated);
    }

    changed(event.target.value);
  };

  let inputElement = null;
  switch (elementType) {
    case "textarea":
      inputElement = (
        <textarea
          value={value}
          id={id}
          onChange={handleOnChange}
          css={inputStyle}
          {...elementConfig}
        ></textarea>
      );
      break;
    case "select":
      inputElement = (
        <select value={value} id={id} onChange={handleOnChange}>
          {elementConfig.options.map((e) => (
            <option key={e.key} value={e.value}>
              {e.text}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          value={value}
          placeholder={label}
          id={id}
          onChange={handleOnChange}
          autoComplete={autoComplete || "off"}
          css={inputStyle}
          {...elementConfig}
        />
      );
  }

  return (
    <InputWrapper
      css={{
        width: size ? `calc(${size} - 8px)` : "100%",
        ...style,
      }}
    >
      {inputElement}
      {!isValidated && (
        <Fragment>
          <i
            className="fas fa-info-circle"
            css={{
              position: "absolute",
              transform: "translateY(-50%)",
              top: "50%",
              right: "1.5rem",
              cursor: "pointer",
              color: "#ea907a",

              "&:hover + span": {
                display: "block",
              },
            }}
          ></i>
          <Message>{message}</Message>
        </Fragment>
      )}
    </InputWrapper>
  );
};

export default Input;
