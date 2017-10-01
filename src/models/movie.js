const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/"

class Movie{
    constructor(id, title = "", releaseDate = -1, tagline = "", overview = "", voteAverage = 0.0, voteCount = 0, genres = [], hasVideo = false, imagePath = ""){
        this.id = id;
        this.title = title;
        this.releaseDate = releaseDate;
        this.tagline = tagline;
        this.overview = overview;
        this.voteAverage = voteAverage;
        this.voteCount = voteCount;
        this.genres = genres;
        this.hasVideo = hasVideo;
        this.imagePath = imagePath;

    }

    getImage(width = 500){
        if(imagePath == ""){
            return ""
        }
        else{
            return `${BASE_IMAGE_URL}w${width}${this.imagePath}`
        }
    }
}

export const MockMovie = new Movie(381284, "Hidden Figures", "2016-12-10", "",
    "The untold story of Katherine G. Johnson, Dorothy Vaughan and Mary Jackson – brilliant African-American women working at NASA and serving as the brains behind one of the greatest operations in history – the launch of astronaut John Glenn into orbit. The visionary trio crossed all gender and race lines to inspire generations to dream big.",
    7.8, 2091, [], false, "/6cbIDZLfwUTmttXTmNi8Mp3Rnmg.jpg")


export default Movie;