//A list of all genres for MovieDB API
//list was pre-fetched for convenience
//An up-to-date list of genres can be retrieved by sending request to https://api.themoviedb.org/3/genre/movie/list?api_key=[YOUR_API_KEY]


export const SEARCHED = {
    "id:": -1,
    "name": "Results"
}
export const TRENDING_GENRE = {
    "id": -2,
    name: "Trending"
}

export const NEW_RELEASES = {
    "id": -3,
    name: "New Releases"
}

export const NOW_PLAYING = {
    "id": -4,
    name: "In Theaters"
}

export const UPCOMING = {
    "id": -5,
    name: "Upcoming"
}

const MOVIE_DB_GENRES = [
    {
        "id":28,
        "name":"Action"
    },
    {
        "id":12,
        "name":"Adventure"
    },
    {
        "id":16,
        "name":"Animation"
    },
    {
        "id":35,
        "name":"Comedy"
    },
    {
        "id":80,
        "name":"Crime"
    },
    {
        "id":99,
        "name":"Documentary"
    },
    {
        "id":18,
        "name":"Drama"
    },
    {
        "id":10751,
        "name":"Family"
    },
    {
        "id":14,
        "name":"Fantasy"
    },
    {
        "id":36,
        "name":"History"
    },
    {
        "id":27,
        "name":"Horror"
    },
    {
        "id":10402,
        "name":"Music"
    },
    {
        "id":9648,
        "name":"Mystery"
    },
    {
        "id":10749,
        "name":"Romance"
    },
    {
        "id":878,
        "name":"Science Fiction"
    },
    {
        "id":10770,
        "name":"TV Movie"
    },
    {
        "id":53,
        "name":"Thriller"
    },
    {
        "id":10752,
        "name":"War"
    },
    {
        "id":37,
        "name":"Western"
    }
]

//ALL_GENRES is displayed in nav, and shoudlnt list some custom genres, like search results
let ALL_GENRES = MOVIE_DB_GENRES.slice();
ALL_GENRES.unshift(UPCOMING)
ALL_GENRES.unshift(NOW_PLAYING)
ALL_GENRES.unshift(NEW_RELEASES)
ALL_GENRES.unshift(TRENDING_GENRE)
export const GENRES = ALL_GENRES


//GENRE_OPTIONS_ALL includes every possible genre category, and should not be used for display
let GENRE_OPTIONS_ALL = ALL_GENRES.slice()
GENRE_OPTIONS_ALL.unshift(SEARCHED)

export const ALL_POSSIBLE_GENRES = GENRE_OPTIONS_ALL