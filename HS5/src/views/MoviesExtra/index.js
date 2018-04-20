import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

import MovieTvShow from '../../components/MovieTvShow'
import * as moviesActions from '../../actions/moviesActions'

import * as movieActions from '../../actions/movieActions'

class MoviesExtra extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            movies: [],
            comments: [],
            page: 1,
            loadingMovies: false,
            nowViewing: 'popular',
        }
    }

    componentDidMount(){
        const { movies, comments, nowViewing, page } = this.state
        const { moviesActions, match } = this.props

        if(this.props.match.params.option !== 'comentarios')
            moviesActions.moviesOptions(match.params.id, match.params.option)
        else
            moviesActions.obtenerComentarios(match.params.id)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.movies.length > this.state.movies.length) {
            this.setState({
                loadingMovies: false,
                page: this.state.page + 1,
                movies: nextProps.movies
            })
        }
        else {
            this.setState({
                movies: nextProps.movies,
                loadingMovies: false
            })
        }
    }

    sortMovies = movies => {
        const { sortBy } = this.state

        return _.orderBy(movies, 'name', 'asc')
    }

    prepareMovies = movies => {

        console.log("Movies: " + movies)
        return this.sortMovies(movies)
    }

    render() {
        const { movies, nowViewing, sortBy, viewingThisYearOnly, match } = this.state

        if(this.props.match.params.option === 'comentarios'){
            return (
                <section className="container main movies">
                    <header className="row">
                        <div className="col-12">
                            <h1>{'Comentarios'}</h1>
                        </div>
                    </header>
                    <div className="row movie-list-wrapper">
                    {movies.map((comment, i) => {
                       return (
                        <div class="row">
                        <div class="col-md-2">
                            <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid"/>
                            <p class="text-secondary text-center">{comment.id}</p>
                        </div>
                        <div class="col-md-10">
                            <p>
                                <strong>{comment.user}</strong>
                           </p>
                           <div class="clearfix"></div>
                            <p>{comment.body}</p>
                        </div>
                    </div>
                       )
                    })}
                    </div>
                </section>
            )

        }
        else{
            return (
                <section className="container main movies">
                    <header className="row">
                        <div className="col-12">
                            <h1>{movies.length > 0 ? this.props.match.params.option : 'No hay resultados'}</h1>
                        </div>
                    </header>
                    <div className="row movie-list-wrapper">
                        {this.prepareMovies(movies).map((movie, i) => {
                            movie.tipo = 'movies'
                            return (
                                <MovieTvShow
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
}

function mapStateToProps(state, ownProps){
    return {
        movies: state.movies
    }
}

function mapDispatchToProps(dispatch){
    return {
        moviesActions: bindActionCreators(moviesActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesExtra)

