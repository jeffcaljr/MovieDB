import 'isomorphic-fetch'
import config from '../config'
import {GENRES} from "../constants/genres";

export const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/";
export const BASE_VIDEOS_URL_PREFIX = "https://api.themoviedb.org/3/movie/";
export const BASE_VIDEOS_URL_SUFFIX = `/videos?language=en-US&api_key=${config.MOVIEDB_KEY}`;
export const BASE_YOUTUBE_URL = "https://www.youtube.com/embed/";
export const BASE_SEARCH_URL_PREFIX = `https://api.themoviedb.org/3/search/movie?api_key=${config.MOVIEDB_KEY}&language=en-US&query=`;
export const BASE_SEARCH_URL_SUFFIX = "&include_adult=false&page=";
export const BASE_UPCOMING_MOVIES_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${config.MOVIEDB_KEY}&language=en-US&page=`;
export const BASE_NOW_PLAYING_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.MOVIEDB_KEY}&language=en-US&page=`;
export const BASE_SIMILAR_MOVIES_URL_PREFIX= "https://api.themoviedb.org/3/movie/";
export const BASE_SIMILAR_MOVIES_URL_SUFFIX = `/similar?api_key=${config.MOVIEDB_KEY}&language=en-US&page=`;

class Movie{
    constructor(id, title = "", releaseDate = -1, tagline = "", overview = "", voteAverage = 0.0, voteCount = 0, genreIDs = [], hasVideo = false, imagePath = "", favorited = false){
        this.id = id;
        this.title = title;
        this.releaseDate = releaseDate;
        this.tagline = tagline;
        this.overview = overview;
        this.voteAverage = voteAverage;
        this.voteCount = voteCount;
        this.genreIDS = genreIDs;
        this.hasVideo = hasVideo;
        this.imagePath = imagePath;
        this.favorited = favorited;


    }

    getImage = (width = 500) => {
        if(!this.imagePath){
            return undefined
        }
        else{
            return `${BASE_IMAGE_URL}w${width}${this.imagePath}`
        }
    }

    toggleFavorited = () => {
        this.favorited = !this.favorited;
    }

    // loadYouTubeTrailerURL = (resolve, reject) => {
    //     const url = `${BASE_VIDEOS_URL_PREFIX}${this.id}${BASE_VIDEOS_URL_SUFFIX}`
    //     // alert(url)
    //
    //
    //
    //     return fetch(url)
    //         .then( (res) => {
    //             if(res.ok){
    //                 return res.json()
    //             }
    //             else{
    //                 return reject(new Error("Error loading videos"))
    //             }
    //         })
    //         .catch((err) => {
    //             return reject(err)
    //         })
    // }

    getGenres = () => {

        let genres = [];

        this.genreIDS.map((genreID) => {
            let genre = GENRES.find((genre) => {return genreID == genre.id})
            genres.push(genre)
        })

        // alert("genres: " + JSON.stringify(genres))

        return genres.sort((first, second) => {
            first < second
        })
    }
}

export const MockMovie = new Movie(381284, "Hidden Figures", "2016-12-10", "",
    "The untold story of Katherine G. Johnson, Dorothy Vaughan and Mary Jackson – brilliant African-American women working at NASA and serving as the brains behind one of the greatest operations in history – the launch of astronaut John Glenn into orbit. The visionary trio crossed all gender and race lines to inspire generations to dream big.",
    7.8, 2091, [{id: 2, name: "Drama"}], false, "/6cbIDZLfwUTmttXTmNi8Mp3Rnmg.jpg")


export default Movie;