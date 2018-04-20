import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as tvShowActions from '../../actions/tvShowActions'

import MovieTvShow from '../../components/MovieTvShow'

class TVShow extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            tvshow: {}
        }
    }

    componentDidMount(){
        const { tvShowActions, match } = this.props

        tvShowActions.loadTvShow(match.params.id)
    }

    componentWillReceiveProps({tvshow}) {
        this.setState({tvshow})
    }


    hacerComentario = e => {
        const { tvShowActions, match } = this.props
        const comentario = document.querySelector(".comentario").value;
        const user = document.querySelector(".user").value;
        tvShowActions.comentar(match.params.id, comentario, user )      
    }


    render() {
        const { tvshow } = this.state

        return (
            <section className="container main movie" style={{backgroundImage: tvshow.id ? `url(https://image.tmdb.org/t/p/w342/${tvshow.backdrop_path})` : ''}}>
                <div className="overlay"></div>
                <header className="row">
                    <div className="col-12">
                        <h1 style={{color: 'white'}}>{tvshow.id ? tvshow.title : 'Loading...'}</h1>
                    </div>
                </header>
                <article className="row movie-item">
                    <footer className="col-md-4 offset-md-1 my-4 movie-poster" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w342/${tvshow.poster_path})`}}>

                    </footer>
                    <div className="col-md-6 my-4">
                        <header className="w-100">
                            <h1>{tvshow.name}</h1>
                        </header>
                        <p className="d-block">{tvshow.overview}</p>
                    </div>
                </article>
                <button>
                <Link className="d-block" to={`/tvshows/${tvshow.id}/similares`}>Similares</Link>
                </button>
                <button>
                <Link className="d-block" to={`/tvshows/${tvshow.id}/recomendadas`}>Recomendaciones</Link>
                </button>
                <button><Link className="d-block" to={`/tvshows/${tvshow.id}/comentarios`}>Comentarios</Link>
                </button>

                
                <div className="coment">
                    <p><input type="text" className="user" id="" placeholder="username" required/></p>
                    <textarea className="comentario" cols="100" rows="5" placeholder="Añadir comentario" required></textarea>
                    <p><button onClick={() => this.hacerComentario()}>Comentar</button></p>
                </div>

            </section>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        tvshow: state.tvshow
    }
}

function mapDispatchToProps(dispatch){
    return {
        tvShowActions: bindActionCreators(tvShowActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TVShow)

