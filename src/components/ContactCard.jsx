/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";

import { Heading } from "./UI/Typography";
import { Flex } from "./theme";

import Avatar from "./Avatar";

const Card = ({ contact, handleContactClick }) => {
  return (
    <Flex
      css={{
        alignItems: "center",
        padding: "1rem",
        cursor: "pointer",
        backgroundColor: "#ffffff",
        borderRadius: "1rem",
      }}
      onClick={handleContactClick}
    >
      <Avatar src={contact.avatar} size={"3rem"} />

      <Heading
        level={4}
        style={{
          fontWeight: "400",
          lightHeight: "unset",
        }}
      >
        {contact.fullName}
      </Heading>
    </Flex>
  );
};

export default Card;
