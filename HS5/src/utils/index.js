export const moviesURL = {
    upcoming: page => {
        return `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`
    },
    topRated: page => {
        return `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`
    },
    popular: page => {
        return `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`
    },
    similares: id => {
        return `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`
    },
    recomendadas: id => {
        return `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`
    }
}

export const tvShowsURL = {
    topRated: page => {
        return `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`
    },
    popular: page => {
        return `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`
    },
    similares: id => {
        return `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`
    },
    recomendadas: id => {
        return `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`
    }
}