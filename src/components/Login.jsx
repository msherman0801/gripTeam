import React, { Component } from 'react';
import styled from 'styled-components';
const Container = styled.div`
  background-color: wheat;
  height: 100%;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
`
class Login extends Component {
  render() {
    return (
      <Container>
        <div>Login Here</div>
      </Container>
    )
  }
}

export default Login;