import config from "../config";

export const BASE_REVIEWS_URL_PREFIX = `https://api.themoviedb.org/3/movie/`;
export const BASE_REVIEWS_URL_SUFFIX = `/reviews?api_key=${config.MOVIEDB_KEY}&language=en-US&page=`;


class Review{
    constructor(id, author, content, url){
        this.id = id;
        this.author = author;
        this.content = content;
        this.url = url;
    }
}

export default Review;