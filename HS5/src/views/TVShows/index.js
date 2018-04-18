import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

import MovieTvShow from '../../components/MovieTvShow'

import * as tvShowsActions from '../../actions/tvShowsActions'

class TVShows extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            tvshows: [],
            page: 1,
            loadingTvShows: false,
            nowViewing: 'popular',
            sortBy: 'name-asc',
            viewingThisYearOnly: false
        }
    }

    componentDidMount(){
        const { tvshows, nowViewing, page } = this.state
        const { tvShowsActions } = this.props

        tvShowsActions.loadTvShows(page, nowViewing)

        window.addEventListener("scroll", this.infiniteScroller, false);
    }

    infiniteScroller =  e => {
        const { tvShowsActions } = this.props
        const { page, nowViewing } = this.state
        const scrollTop = window.scrollY
        const trackLength = document.querySelector('body').scrollHeight - window.innerHeight
        const pctScrolled = Math.floor(scrollTop/trackLength * 100)
        if(pctScrolled > 95 && !this.state.loadingTvShows) {
            tvShowsActions.loadTvShows(page, nowViewing)
            this.setState({
                loadingTvShows: true
            })
        }
    }

    componentWillUnmount() {
        // you need to unbind the same listener that was binded.
        window.removeEventListener('scroll', this.infiniteScroller, false);
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

    onViewingChange = e => {
        const nowViewing = e.target.value
        const { tvShowsActions } = this.props
        tvShowsActions.loadTvShows(1, nowViewing)
        this.setState({
            page: 2,
            loadingTvShows: true,
            nowViewing
        })
    }

    onSortChange = e => {
        this.setState({sortBy: e.target.value})
    }

    sortMovies = tvshows => {
        const { sortBy } = this.state
        const sorting = sortBy.split('-')

        return _.orderBy(tvshows, sorting[0], sorting[1])
    }

    onToggleViewingThisYearOnly = e => {
        this.setState({viewingThisYearOnly: !this.state.viewingThisYearOnly})
    }

    filterMovies = tvshows => {
        return tvshows.filter(tvshows => {
            console.log(tvshows.first_air_date, tvshows.first_air_date.includes('2018'))
            return tvshows.first_air_date.includes('2018')
        })
    }

    prepareMovies = tvshows => {
        const { viewingThisYearOnly } = this.state
        let filteredMovies = viewingThisYearOnly ? this.filterMovies(tvshows) : tvshows
        console.log(filteredMovies.length)
        return this.sortMovies(filteredMovies)
    }

    render() {
        const { tvshows, nowViewing, sortBy, viewingThisYearOnly } = this.state

        return (
            <section className="container main movies">
                <header className="row">
                    <div className="col-12">
                        <h1>{tvshows.length > 0 ? 'TV Shows' : 'Loading...'}</h1>
                    </div>
                </header>
                <aside className="row">
                    <div className="form-group">
                        <label>Now viewing:</label>
                        <select className="form-control" onChange={this.onViewingChange} defaultValue={nowViewing}>
                            <option value="popular">Popular</option>
                            <option value="topRated">Top Rated</option>
                            <option value=""></option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Sort by:</label>
                        <select className="form-control" onChange={this.onSortChange} defaultValue={sortBy}>
                            <option value="name-asc">Title (Asc)</option>
                            <option value="name-desc">Title (Desc)</option>
                            <option value="popularity-asc">Less Popular</option>
                            <option value="popularity-desc">More Popular</option>
                            <option value="vote_average-asc">Worst</option>
                            <option value="vote_average-desc">Best</option>
                            <option value="first_air_date-asc">Oldest</option>
                            <option value="first_air_date-desc">Newest</option>
                        </select>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" onChange={this.onToggleViewingThisYearOnly} type="checkbox" checked={viewingThisYearOnly} />
                            View this year only
                        </label>
                    </div>
                </aside>
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

export default connect(mapStateToProps, mapDispatchToProps)(TVShows)

