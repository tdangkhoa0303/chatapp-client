import { Fragment, useContext, useState } from "react";

import { Sider, ChatPane } from "../components/";
import { Flex } from "../components/theme";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import Menu from "../assets/minion.svg";

import SocketContext from "../contexts/SocketContext";

export default function (props) {
  const {
    online,
    conversations,
    getConversation,
    sendMessage,
    current,
    setCurrent,
  } = useContext(SocketContext);

  const [isShow, setShow] = useState(false);

  const handleAvatarClick = async (_id) => {
    const conversation = await getConversation(_id);
    setCurrent(conversation);
  };

  return (
    <Fragment>
      <img
        src={Menu}
        alt="menu"
        onClick={() => setShow((isShow) => !isShow)}
        css={{
          position: "fixed",
          top: "3rem",
          right: "2rem",
          cursor: "pointer",
          display: "none !important",
          width: "3rem",

          "@media screen and (max-width: 1024px)": {
            display: "block !important",
            zIndex: "5",
          },
        }}
      ></img>
      <Flex css={{ height: "100vh" }}>
        <Sider
          online={online}
          conversations={conversations}
          setCurrent={setCurrent}
          handleAvatarClick={handleAvatarClick}
          isShow={isShow}
        />

        {current && (
          <ChatPane conversation={current} sendMessage={sendMessage} />
        )}
      </Flex>
    </Fragment>
  );
}
