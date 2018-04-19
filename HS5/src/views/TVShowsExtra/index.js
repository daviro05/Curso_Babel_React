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
            page: 1,
            loadingTvShows: false,
            nowViewing: true
        }
    }

    componentDidMount(){
        const { tvshows, nowViewing, page } = this.state
        const { tvShowsActions, match } = this.props
        
        console.log(match.params.option)
        //tvShowsActions.loadTvShows()
        tvShowsActions.tvShowOptions(match.params.id, match.params.option)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.tvshows.length > this.state.tvshows.length) {
            this.setState({
                loadingTvShows: false,
                page: this.state.page + 1,
                tvshows: nextProps.tvshows
            })
        }
        else {
            this.setState({
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
        const { tvshows, nowViewing, sortBy, viewingThisYearOnly, match } = this.state

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

function mapStateToProps(state, ownProps){
    return {
        tvshows: state.tvshows
    }
}

function mapDispatchToProps(dispatch){
    return {
        tvShowsActions: bindActionCreators(tvShowsActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TVShowsExtra)

