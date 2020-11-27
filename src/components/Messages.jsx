/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

import { Flex } from "./theme";
import Avatar from "./Avatar";

const Message = styled.div({
  width: "fit-content",
  padding: "1rem 2rem",
  borderRadius: "2rem",
  color: "#333333",
  backgroundColor: "#eeeeee",
  margin: "2px 0",
  fontSize: "2rem",
});

const Messages = ({ messages, member }) => {
  const isMine = messages[0].from !== member._id;
  return (
    <Flex
      css={{
        width: "100%",
        justifyContent: isMine ? "flex-end" : "flex-start",
        alignItems: "flex-end",
        marginBottom: "0.5rem",
        padding: "1rem 0",
      }}
    >
      {!isMine && <Avatar src={member.avatar.url} size="4rem" />}
      <Flex
        css={{
          flexDirection: "column",
          alignItems: isMine ? "flex-end" : "flex-start",
          ...(isMine
            ? {
                "& > div": {
                  color: "#ffffff",
                  backgroundColor: "#efbbcf",
                },
              }
            : {}),
        }}
      >
        {messages.map((message) => (
          <Message key={message.id}>{message.content}</Message>
        ))}
      </Flex>
    </Flex>
  );
};

export default Messages;
