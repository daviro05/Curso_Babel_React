import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import * as movieActions from '../../actions/movieActions'

class Movie extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            movie: {}
        }
    }

    componentDidMount(){
        const { movieActions, match } = this.props

        movieActions.loadMovie(match.params.id)
    }

    componentWillReceiveProps({movie}) {
        this.setState({movie})
    }

    hacerComentario = e => {
        const { movieActions, match } = this.props
        const comentario = document.querySelector(".comentario").value;
        const user = document.querySelector(".user").value;
        movieActions.comentar(match.params.id, comentario, user )      
    }

    render() {
        const { movie } = this.state

        return (
            <section className="container main movie" style={{backgroundImage: movie.id ? `url(https://image.tmdb.org/t/p/w342/${movie.backdrop_path})` : ''}}>
                <div className="overlay"></div>
                <header className="row">
                    <div className="col-12">
                        <h1 style={{color: 'white'}}>{movie.id ? movie.title : 'Loading...'}</h1>
                    </div>
                </header>
                <article className="row movie-item">
                    <footer className="col-md-4 offset-md-1 my-4 movie-poster" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w342/${movie.poster_path})`}}>

                    </footer>
                    <div className="col-md-6 my-4">
                        <header className="w-100">
                            <h1>{movie.title}</h1>
                        </header>
                        <p className="d-block">{movie.overview}</p>
                    </div>
                </article>
                <button>
                <Link className="d-block" to={`/movies/${movie.id}/similares`}>Similares</Link>
                </button>
                <button>
                <Link className="d-block" to={`/movies/${movie.id}/recomendadas`}>Recomendaciones</Link>
                </button>
                <button>
                <Link className="d-block" to={`/movies/${movie.id}/comentarios`}>Comentarios</Link>
                </button>

                <div className="coment">
                    <p><input type="text" className="user" id="" placeholder="username" required/></p>
                    <textarea name="" className="comentario" cols="100" rows="5" placeholder="Añadir comentario" required></textarea>
                    <p><button onClick={() => this.hacerComentario()}>Comentar</button></p>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        movie: state.movie
    }
}

function mapDispatchToProps(dispatch){
    return {
        movieActions: bindActionCreators(movieActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)

