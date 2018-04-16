import React from 'react'

import Movie from '../../components/Movie'

class Movies extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            movies: []
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/discover/movie?api_key='+process.env.REACT_APP_TMDB_API_KEY)
        .then(response => response.json())
        .then(json => json.results)
        .then(data => this.setState({movies: data}))
        .catch(error => alert('We could not load the page at this time.'))
        window.addEventListener("scroll", function(e) {
            const scrollTop = this.scrollY
            const trackLength = document.querySelector('body').scrollHeight - window.innerHeight
            const pctScrolled = Math.floor(scrollTop/trackLength * 100)
            console.log(pctScrolled + '% scrolled')
        }, false);
    }

    render() {
        const { movies } = this.state

        return (
            <section className="container main movies">
                <header className="row">
                    <div className="col-12">
                        <h1>{movies.length > 0 ? 'Movies' : 'Loading...'}</h1>
                    </div>
                </header>
                <div className="row movie-list-wrapper">
                    {movies.map((movie, i) => {
                        return (
                            <Movie
                                key={i}
                                {...movie}
                            />
                        )
                    })}
                </div>
            </section>
        )
    }
}

export default Movies