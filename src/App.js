import React, { Component } from 'react';
import 'isomorphic-fetch'

import Movie, {MockMovie} from "./models/movie";
import './App.css';
import NavigationMenu from "./components/NavigationMenu";
import MovieList from "./components/MovieList";
import NavigationMenuCollapsed from "./components/NavigationMenuCollapsed";
import DropdownWrapper from "./components/DropdownWrapper";
import VideoPlayer from "./components/VideoPlayer";
import config from "./config";
import {GENRES} from "./constants/genres";

class App extends Component {
    constructor(){
        super();

        this.state = {
            page: 1,
            movies: [],
            categories: GENRES,
            videoPlaying: null,
            lastQuery: ''
        }

        this.loadTopMovies = this.loadTopMovies.bind(this)
        this.toggleVideoPlayer = this.toggleVideoPlayer.bind(this)
        this.loadMoreMovies = this.loadMoreMovies.bind(this)
    }

    // movies = [MockMovie, MockMovie,MockMovie,MockMovie,MockMovie,MockMovie,MockMovie,MockMovie,MockMovie]

    loadTopMovies = (page = this.state.page) => {
        return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${config.MOVIEDB_KEY}&language=en-US&page=${page}`)
            .then( (res) => {
                if(res.ok){
                    return res.json();
                }
                else{
                    return Promise.reject(new Error("Error"))
                }
            })
            .catch((err) => Promise.reject(err))
    }

    loadMoviesByCategory(genreID){
        return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${config.MOVIEDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genres=${genreID}`)
            .then( (res) => {
                if(res.ok){
                    return res.json();
                }
                else{
                    return Promise.reject(new Error("Error"))
                }
            })
            .catch((err) => Promise.reject(err))
    }


    toggleVideoPlayer = (movie) => {
        // alert("playing movie " + movie.title)

        if(this.state.videoPlaying != null){
            //stop the video
            alert("hiding movie")
            this.setState({playingVideo: null})

        }
        else{
            //play a video when none was playing before
            this.setState({videoPlaying: movie})
        }

    }


    loadMoreMovies = () =>{
        this.loadTopMovies()
            .then((res) => {
                alert(JSON.stringify(res.results))
                let moviesJSON = res.results;
                let movies = []
                moviesJSON.map( (newMovie) => {
                    let movie = new Movie(newMovie.id, newMovie.title, newMovie["release_date"], "", newMovie.overview, newMovie["vote_average"], newMovie["vote_count"], newMovie["genre_ids"], newMovie.video, newMovie["poster_path"])
                    movies.push(movie)
                })
                this.setState({movies: this.state.movies.concat(movies), page: ++this.state.page})
            })
            .catch((err) => alert(err))
    }

    loadMoreMoviesForCategory = (category) => {
        // alert("loading movies for genre: " + category)
        this.loadMoviesByCategory(category)
            .then((res) => {
                // alert(JSON.stringify(res.results))
                let moviesJSON = res.results;
                let movies = []
                moviesJSON.map( (newMovie) => {
                    let movie = new Movie(newMovie.id, newMovie.title, newMovie["release_date"], "", newMovie.overview, newMovie["vote_average"], newMovie["vote_count"], newMovie["genre_ids"], newMovie.video, newMovie["poster_path"])
                    movies.push(movie)
                })
                this.setState({movies: this.state.movies.concat(movies), page: ++this.state.page})
            })
            .catch((err) => alert(err))
    }


  render() {
    return (

      <div className="App">

          {this.state.videoPlaying != null ? <VideoPlayer movie={this.state.videoPlaying} toggleVideo={(movie) => this.toggleVideoPlayer(movie)}/>  : ""}



          <div className="container-fluid">
              <div className="row">
                  <NavigationMenu
                      className="navigation-container col-md-3 hidden-sm-down"
                      categories={this.state.categories}
                      onFilterSelected={(genreID) => {
                          this.setState({page: 1, movies: []}, this.loadMoreMoviesForCategory(genreID))}}/>
                  <NavigationMenuCollapsed className=" navigation-container hidden-md-up col-12 navbar navbar-toggleable-md navbar-light bg-faded"/>
                  <MovieList
                      movies={this.state.movies}
                      className="movie-items-container col-md-9 "
                      playVideo={(movie) => this.toggleVideoPlayer(movie)}
                      loadMore={() => this.loadMoreMovies()}/>
              </div>
          </div>
      </div>
    );
  }

  componentDidMount(){
        this.loadMoreMovies()
  }
}

export default App;
