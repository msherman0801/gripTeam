import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: black;
  height: 100%;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  overflow: auto;
  .loading{
    text-align:
    font-size: 3rem;
  }
`
const MovieRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
const Movie = styled.div`
  margin: 0px 0px 100px 0px;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 600px;
  align-items: center;
  .title{
    height: 40px;
    padding: 10px;
    font-size: 1rem;
  }
  img{
    min-width: 400px;
    min-height: 600px;
    max-width: 400px;
    max-height: 600px;
    object-fit: cover;
  }
    .rating{
    width: 80%;
    padding: 10px;
    font-size: 1rem;
    display: flex;
    flex-direction: row;
    .up{
      height: 20px;
      flex: 1;
      padding: 10px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      background-color: lightblue; //THIS COLOR MUST CHANGE
      transition: .2s all;
       &:hover{
        cursor: pointer;
        background-color: green;
      }
    }
    .down{
      height: 20px;
      padding: 10px;
      flex: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      background-color: orange; //THIS COLOR MUST CHANGE
      transition: .2s all;
      &:hover{
        background-color: red;
      }
    }
  }
`
class CenterList extends Component {

  componentDidMount() {
    if (this.props.movieList && !this.props.movieList.length) {
      this.props.getMovies();
    }

  }

  checkForMovies = movies => {
    if (movies && movies.length) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <Container>
        <MovieRow>
          {this.checkForMovies(this.props.movieList) ? this.props.movieList.map(movie => {
            return (
              <Movie>
                <div className="title">
                  {movie.Title}
                </div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://images-na.ssl-images-amazon.com/images/I/11382C6KyhL._SX425_.jpg'} alt="" />
                <div className="rating">
                  <div className="up">Upvote</div>
                  {movie.Rating}
                  <div className="down">Downvote</div>
                </div>

              </Movie>
            )
          }
          ) : null}
        </MovieRow>
        {!this.props.movieList.length ? (<div className='loading'>Loading...</div>) : null}
      </Container>
    )
  }
}

export default CenterList;