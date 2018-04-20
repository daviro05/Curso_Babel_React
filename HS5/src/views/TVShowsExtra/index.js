import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

import MovieTvShow from '../../components/MovieTvShow'
import * as tvShowsActions from '../../actions/tvShowsActions'


class TVShowsExtra extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            tvshows: [],
            comments: [],
            page: 1,
            loadingTvShows: false,
            nowViewing: true
        }
    }

    componentDidMount(){
        const { tvshows, comments, nowViewing, page } = this.state
        const { tvShowsActions, match } = this.props
        
        if(this.props.match.params.option !== 'comentarios')
            tvShowsActions.tvShowOptions(match.params.id, match.params.option)
        else
            tvShowsActions.obtenerComentarios(match.params.id)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.tvshows.length > this.state.tvshows.length) {
            this.setState({
                loadingTvShows: false,
                page: this.state.page + 1,
                tvshows: nextProps.tvshows,
                comments: nextProps.comments
            })
        }
        else {
            this.setState({
                comments: nextProps.comments,
                tvshows: nextProps.tvshows,
                loadingTvShows: false
            })
        }
    }

    sortMovies = tvshows => {
        const { sortBy } = this.state

        return _.orderBy(tvshows, 'name', 'asc')
    }

    prepareMovies = tvshows => {

        console.log("TVShows: " + tvshows)
        return this.sortMovies(tvshows)
    }

    render() {
        const { tvshows, comments, nowViewing, sortBy, viewingThisYearOnly, match } = this.state

        if(this.props.match.params.option === 'comentarios'){
            return (
                <section className="container main movies">
                    <header className="row">
                        <div className="col-12">
                            <h1>{'Comentarios'}</h1>
                        </div>
                    </header>
                    <div className="row movie-list-wrapper">
                    {tvshows.map((comment, i) => {
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
                            <h1>{tvshows.length > 0 ? this.props.match.params.option : 'No hay resultados'}</h1>
                        </div>
                    </header>
                    <div className="row movie-list-wrapper">
                        {this.prepareMovies(tvshows).map((tvshow, i) => {
                            tvshow.tipo = 'tvshows'
                            return (
                                <MovieTvShow
                                    key={i}
                                    {...tvshow}
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
        comments: state.comments,
        tvshows: state.tvshows
    }
}

function mapDispatchToProps(dispatch){
    return {
        tvShowsActions: bindActionCreators(tvShowsActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TVShowsExtra)

