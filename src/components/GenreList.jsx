import React, { Component } from 'react';
import styled from 'styled-components';
const Container = styled.div`
  background-color: pink;
  height: 100%;
  width: 100%;
  color: white;
  overflow: auto;
  display: flex;
  flex-direction: column;
`
const Genre = styled.div`
  width: 100%;
  background-color: white;
  color: black;
  height: 100px;
  &:hover{
    background-color: grey;
  }
`
class GenreList extends Component {
  render() {
    const { genres } = this.props
    return (
      <Container>
        {genres ? genres.map(item => {
          return (
            <Genre>
              {item.title}
            </Genre>)
        }
        ) : null}
      </Container>
    )
  }
}

export default GenreList;