import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import SocketContext from "../contexts/SocketContext";
import { getMember } from "../helpers/messenger.helper";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";

import { Heading, Text } from "./UI/Typography";
import { Flex } from "./theme";

import Avatar from "./Avatar";

const Card = ({ conversation }) => {
  const {
    auth: { user },
  } = useContext(AuthContext);

  const { toggleConversationStatus, setCurrent, current } = useContext(
    SocketContext
  );

  const { members, name, messages, _id, seen } = conversation;

  const member = getMember(members, user);

  const conversationName = name || member.fullName;

  const lastMessage = messages[messages.length - 1];

  const handleConversationClick = () => {
    if (!seen) toggleConversationStatus(_id, true);
    setCurrent(conversation);
  };

  return (
    <Flex
      css={{
        alignItems: "stretch",
        padding: "1rem",
        cursor: "pointer",
        backgroundColor: current && current._id === _id ? "#f9f9f9" : "#ffffff",
        borderRadius: "1rem",
      }}
      onClick={handleConversationClick}
    >
      <Avatar src={member.avatar} size={"5rem"} />
      <Flex
        css={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Heading
          level={4}
          style={{
            fontWeight: seen ? "400" : "500",
            marginBottom: "4px",
          }}
        >
          {conversationName}
        </Heading>

        <Text
          style={{
            fontSize: "1.5rem",
            fontWeight: seen ? "400" : "500",
            lineHeight: "",
            maxHeight: "2.25rem",
            height: "2.25rem",
          }}
        >
          {lastMessage &&
            `${lastMessage.from === user._id ? "You" : member.fullName}: ${
              lastMessage.content
            }`}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Card;
