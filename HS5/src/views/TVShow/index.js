import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as tvShowActions from '../../actions/tvShowActions'

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
                <button>Similares</button>
                <button onClick={() => tvShowActions.TvShowRecomendada(tvshow.id)}>Recomendaciones</button>
                <button>Comentarios</button>
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

