import { useState } from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const Input = ({
  elementType,
  id,
  label,
  value,
  changed,
  size,
  style,
  validate,
  autoComplete,
  ...elementConfig
}) => {
  const [error, setError] = useState();

  const _handleInput = (e) => {
    if (validate) {
      let err = validate(e.target.value);
      if (err) setError(err);
    }
  };

  let inputElement = null;
  switch (elementType) {
    case "textarea":
      inputElement = (
        <textarea
          value={value}
          id={id}
          onChange={changed}
          onInput={_handleInput}
          {...elementConfig}
        ></textarea>
      );
      break;
    case "select":
      inputElement = (
        <select value={value} id={id} onChange={changed}>
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
          id={id}
          placeholder={label}
          onChange={changed}
          onInput={_handleInput}
          autoComplete={autoComplete || "off"}
          css={{
            padding: "1.5rem 3rem",
            width: "100%",
            outline: "none",
            backgroundColor: "#eeeeee",
            border: "none",
            borderRadius: "4rem",
          }}
          {...elementConfig}
        />
      );
  }
  return (
    <div
      css={{
        width: size ? `calc(${size} - 8px)` : "100%",
        fontSize: "1.6rem",
        marginBottom: "2rem",
        ...style,
      }}
    >
      {inputElement}
      <p css={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default Input;
