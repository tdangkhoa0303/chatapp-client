/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Heading } from "./Typography";

const Section = ({ heading, style, children }) => {
  return (
    <section css={{ marginBottom: "2rem", ...style }}>
      {heading && (
        <Heading
          level={heading.level || 4}
          style={{ marginBottom: "1rem", ...heading.style }}
        >
          {heading.content}
        </Heading>
      )}
      {children}
    </section>
  );
};

export default Section;
