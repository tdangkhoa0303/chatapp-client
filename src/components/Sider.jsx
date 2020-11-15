import { useState } from "react";
import Card from "./ConversationCard";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";

import { searchUsers } from "../helpers/api";

import Avatar from "./Avatar";
import { List, Container, Typography, Input, Section } from "./UI";
import ContactCard from "./ContactCard";

export default ({ online, handleAvatarClick, conversations, isShow }) => {
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState([]);

  const handleSearchChange = async (q) => {
    if (q) {
      setSearch(q);
      setLoading(true);
      const {
        data: {
          data: { users },
        },
      } = await searchUsers(q);
      setContacts(users);
      setLoading(false);
      return;
    }
    setSearch("");
  };

  const handleContactClick = (_id) => {
    setSearch("");
    setLoading(false);
    setContacts([]);
    handleAvatarClick(_id);
  };

  return (
    <Container
      style={{
        borderWidth: "0 1px 0 0",
        width: "40rem",
        overflow: "auto",
        height: "100vh",
        backgroundColor: "#ffffff",

        "@media screen and (max-width: 1024px)": {
          position: "fixed",
          top: 0,
          right: 0,
          borderWidth: "0 0 0 1px",
          maxWidth: "50rem",
          width: "90%",
          transition: "all 0.2s ease-out",
          transform: isShow ? "translateX(0)" : "translateX(100%)",
        },
      }}
    >
      <Container.Heading>
        <Typography.Heading level={3}>Chat</Typography.Heading>
      </Container.Heading>

      <Section>
        <Input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          style={{ margin: "0" }}
          changed={handleSearchChange}
        />
      </Section>

      <Section heading={{ content: "Online" }}>
        <List style={{ marginBottom: "2rem" }} direction="horizontal">
          {online &&
            Object.values(online).map((e) => (
              <List.Item key={e._id}>
                <Avatar
                  src={e.avatar}
                  size="7rem"
                  onClick={(event) => handleAvatarClick(e._id)}
                  style={{ marginRight: "1rem" }}
                />
              </List.Item>
            ))}
        </List>
      </Section>
      {search ? (
        <Section heading={{ content: "Find contact" }}>
          {loading ? (
            <span>Loading...</span>
          ) : (
            contacts.map((contact) => (
              <ContactCard
                key={contact._id}
                contact={contact}
                handleContactClick={(e) => handleContactClick(contact._id)}
              />
            ))
          )}
        </Section>
      ) : (
        <Section heading={{ content: "Conversations" }}>
          <List>
            {conversations &&
              conversations
                .sort(
                  (a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt)
                )
                .map((conversastion) => (
                  <Card key={conversastion._id} conversation={conversastion} />
                ))}
          </List>
        </Section>
      )}
    </Container>
  );
};
