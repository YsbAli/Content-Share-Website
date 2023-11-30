import React from "react";
import {
  Container,
  Wrapper,
  Title,
  SubTitle,
  Input,
  Button,
  More,
  Links,
  Link,
  Span,
} from "../Styles/Login";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue with Social Tube</SubTitle>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button>Sign in</Button>
        {/* <Span>Not have an account?</Span> */}
        {/* <Title>Sign Up</Title> */}
        <Title>Or</Title>
        <Input type="text" placeholder="Username" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        English(India)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default Login;
