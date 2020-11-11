import { useContext, useState, Fragment } from "react";
import { Input, Button } from "../components/UI";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

import AuthContext from "../contexts/AuthContext";
import { Heading, Text } from "../components/UI/Typography";
import { Flex, Form } from "../components/theme";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);

  const _handleSignIn = (e) => {
    e.preventDefault();
    signIn(email, password);
  };

  return (
    <Flex css={{ alignItems: "center", height: "100vh" }}>
      <Form id="signUp" onSubmit={_handleSignIn}>
        <Heading
          level={2}
          style={{
            marginBottom: "2rem",
            textAlign: "center",
            fontFamily: `'Happy Monkey', cursive;`,
          }}
        >
          Sign In
        </Heading>
        <Input
          type="email"
          name="email"
          id="email"
          label="Email"
          validator={(value) =>
            value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
          }
          changed={(value) => setEmail(value.trim())}
          value={email}
        />
        <Input
          type="password"
          name="password"
          id="password"
          label="Password"
          changed={(value) => setPassword(value)}
          value={password}
        />
        <Button.Primary type="submit">Sign In</Button.Primary>
      </Form>
    </Flex>
  );
};

export default Auth;
