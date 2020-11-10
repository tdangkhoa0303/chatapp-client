import { Component } from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";

import { Flex, Form } from "./theme";
import { Heading, Text } from "./UI/Typography";
import { Input } from "./UI";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstName: {
        value: "",
        validated: true,
      },
      lastName: {
        value: "",
        validated: true,
      },
      email: {
        value: "",
        validated: true,
      },
      password: {
        value: "",
        validated: true,
      },
      confirmPassword: {
        value: "",
        validated: true,
      },
    };
  }

  _handleSignUp = () => {};

  render() {
    const {
      email,
      lastName,
      firstName,
      password,
      confirmPassword,
    } = this.state;

    return (
      <Flex css={{ alignItems: "center", height: "100vh" }}>
        <Form id="signUp" onSubmit={this._handleSignUp}>
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
            type="text"
            name="firstName"
            id="firstName"
            label="First Name"
            changed={}
            value={firstName.value}
          />
          <Input
            type="text"
            name="lastName"
            id="lastName"
            label="Last Name"
            changed={}
            value={lastName.value}
          />
          <Input
            type="email"
            name="email"
            id="email"
            label="Email"
            changed={}
            value={email.value}
          />
          <Input
            type="password"
            name="password"
            id="password"
            label="Password"
            changed={}
            value={password}
          />
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            label="Confirm Password"
            changed={}
            value={confirmPassword.value}
          />
          <Button.Primary>Sign Up</Button.Primary>
          <Text>
            Not a member?
            <span onClick={() => setRole(false)}>Sign Up Now</span>
          </Text>
        </Form>
      </Flex>
    );
  }
}

export default SignUp;
