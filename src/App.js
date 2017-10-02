import React, { Component } from 'react';
import 'isomorphic-fetch'

import Movie, {MockMovie} from "./models/movie";
import './App.css';
import NavigationMenu from "./components/NavigationMenu";
import MovieList from "./components/MovieList";
import NavigationMenuCollapsed from "./components/NavigationMenuCollapsed";
import DropdownWrapper from "./components/DropdownWrapper";
import VideoPlayer from "./components/VideoPlayer";

class App extends Component {
    constructor(){
        super();

        this.state = {
            page: 1,
            movies: [],
            categories: [],
            videoPlaying: null
        }

        this.loadTopMovies = this.loadTopMovies.bind(this)
        this.loadCategories = this.loadCategories.bind(this)
        this.toggleVideoPlayer = this.toggleVideoPlayer.bind(this)
        this.loadMoreMovies = this.loadMoreMovies.bind(this)
    }

    // movies = [MockMovie, MockMovie,MockMovie,MockMovie,MockMovie,MockMovie,MockMovie,MockMovie,MockMovie]

    loadTopMovies = (page = this.state.page) => {
        return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f3d495d80d7a7139830e3297dc3923e1&language=en-US&page=${page}`)
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

    loadCategories = () => {
        return fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=f3d495d80d7a7139830e3297dc3923e1&language=en-US\n")
            .then((res) => {
                if(res.ok){
                    return res.json();
                }
                else{
                    return Promise.reject(new Error("Error Loading Categories"))
                }

            })
            .catch( (err) => Promise.reject(err))
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
                // alert(JSON.stringify(res.results))
                let moviesJSON = res.results;
                let movies = []
                moviesJSON.map( (topMovie) => {
                    let movie = new Movie(topMovie.id, topMovie.title, topMovie["release_date"], "", topMovie.overview, topMovie["vote_average"], topMovie["vote_count"], topMovie["genre_ids"], topMovie.video, topMovie["poster_path"])
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
                  <NavigationMenu className="navigation-container col-md-3 hidden-sm-down" categories={this.state.categories}/>
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
        this.loadCategories()
            .then( (res) => this.setState({categories: res.genres}))
            .catch( (err) => alert(err))
  }
}

export default App;
