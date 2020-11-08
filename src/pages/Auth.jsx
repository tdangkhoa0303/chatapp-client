import { useContext, useState } from "react";
import { Input, Button } from "../components/UI";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

import AuthContext from "../contexts/AuthContext";
import { Heading } from "../components/UI/Typography";
import { Flex } from "../components/theme";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 3rem 2rem;
  align-items: center;
  justify-content: center;
  max-width: 40rem;
  width: 90%;
  box-shadow: 2px 3px 14px rgba(3, 3, 3, 0.1);
`;

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          changed={(e) => setEmail(e.target.value.trim())}
          value={email}
        />
        <Input
          type="password"
          name="password"
          id="password"
          label="Password"
          changed={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button.Primary>Sign In</Button.Primary>
      </Form>
    </Flex>
  );
};

export default Auth;
