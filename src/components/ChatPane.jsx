import { useContext, useState, Fragment, createRef, useEffect } from "react";
import { getMember } from "../helpers/messenger.helper";
import AuthContext from "../contexts/AuthContext";
import { Container, Typography } from "./UI";
import Avatar from "./Avatar";
import { Flex } from "./theme";
import { Input, Button } from "./UI";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import Messages from "./Messages";

export default ({ conversation, sendMessage }) => {
  const { members, messages } = conversation;

  const {
    auth: { user },
  } = useContext(AuthContext);

  useEffect(() => {
    lastMessageRef.current.scrollIntoView();
  }, [messages.length]);

  const [message, setMessage] = useState("");

  const member = getMember(members, user);

  const conversationName = conversation.name || member.fullName;

  const lastMessageRef = createRef(null);

  const renderMessages = (messages) => {
    if (!messages.length) return [];

    let content = [],
      messageGroup = [messages[0]],
      i;
    for (i = 1; i < messages.length; i++) {
      if (messages[i].from !== messages[i - 1].from) {
        content.push(
          <Messages key={i} messages={messageGroup} member={member} />
        );
        messageGroup = [messages[i]];
      } else messageGroup.push(messages[i]);
    }

    if (messageGroup.length)
      content.push(
        <Messages key={i} messages={messageGroup} member={member} />
      );
    return content;
  };

  const handleOnSubmitMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    sendMessage(conversation._id, message);
    setMessage("");
  };

  return (
    <Container
      style={{
        flexGrow: 2,
        display: "flex",
        flexDirection: "column",
        padding: "1rem 0",
      }}
    >
      {conversation && (
        <Fragment>
          <Container.Heading
            style={{
              borderStyle: "solid",
              borderColor: "#eeeeee",
              borderWidth: "0 0 1px 0",
              padding: "2rem",
            }}
          >
            <Avatar src={member.avatar} />
            <Typography.Heading level={4} style={{ fontWeight: "400" }}>
              {conversationName}
            </Typography.Heading>
          </Container.Heading>
          <Flex
            css={{ flexDirection: "column", flexGrow: "2", overflow: "hidden" }}
          >
            <div
              css={{
                flexGrow: "2",
                overflowY: "scroll",
                padding: "0 3rem 0 2rem",

                "::-webkit-scrollbar": {
                  display: "none",
                },

                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
            >
              {renderMessages(messages)}
              <div ref={lastMessageRef}></div>
            </div>
            <Flex>
              <form
                css={{
                  display: "flex",
                  width: "100%",
                  padding: "1rem 2rem 0",
                  height: "100%",
                }}
                onSubmit={handleOnSubmitMessage}
              >
                <Input
                  type="text"
                  name="message"
                  id="message"
                  changed={(e) => setMessage(e.target.value)}
                  value={message}
                  placeholder="Enter message..."
                  style={{ margin: "0 1rem 0 0" }}
                />
                <Button.Primary type="submit">Send</Button.Primary>
              </form>
            </Flex>
          </Flex>
        </Fragment>
      )}
    </Container>
  );
};
