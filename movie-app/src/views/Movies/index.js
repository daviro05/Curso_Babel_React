import React from 'react'

import _ from 'lodash'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Movie from '../../components/Movie'

import * as moviesActions from '../../actions/moviesActions'

class Movies extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            movies: [],
            page: 1,
            loadingMovies: false,
            category: 'all',
            parametro: 'title',
            opt: 'asc',
            year: 2018,
            marcado_anio: false,
            marcado_adult: false
        }
    }

    componentDidMount(){
        const { movies, category, parametro, opt } = this.state
        const { moviesActions } = this.props

        switch(category){
            case 'popular': this.props.moviesActions.popularMovies(1);  break;
            case 'top-rated':  this.props.moviesActions.topMovies(1); break;
            case 'upcoming':  this.props.moviesActions.loadComingSoon(1); break;
            default: this.props.moviesActions.loadMovies(1); break;
            
        }

        window.addEventListener("scroll", this.infiniteScroller, false);
    }

    cambiarCategoria = e => {
        const { page } = this.state
        const { moviesActions } = this.props
        const categoria = e.target.value
        
        switch(categoria){
            case 'popular': this.props.moviesActions.popularMovies(1);  break;
            case 'top-rated':  this.props.moviesActions.topMovies(1); break;
            case 'upcoming':  this.props.moviesActions.loadComingSoon(1); break;
            default: this.props.moviesActions.loadMovies(1); break;
        }
        this.setState({category : categoria})
        console.log(categoria)
    }

    cambiarSort = e => {

        const sort = e.target.value
        this.ordenarPor(sort)
    }


    infiniteScroller =  e => {
        const { page, category } = this.state
        const { moviesActions } = this.props
        const scrollTop = window.scrollY
        const trackLength = document.querySelector('body').scrollHeight - window.innerHeight
        const pctScrolled = Math.floor(scrollTop/trackLength * 100)
        if(pctScrolled > 95 && !this.state.loadingMovies) {
            
            switch(category){
                case 'popular': this.props.moviesActions.popularMovies(page);  break;
                case 'top-rated':  this.props.moviesActions.topMovies(page); break;
                case 'upcoming':  this.props.moviesActions.loadComingSoon(page); break;
                default: this.props.moviesActions.loadMovies(page); break;
            }
            this.setState({category : category})

            this.setState({
                loadingMovies: true
            })
        }
    }

    esteAnio = e => {
        const marcado_anio = e.target.checked
        const year = (new Date().getFullYear())

        if(marcado_anio){
            this.setState({ 
                marcado_anio: true,
                year: year,
                movies: _.filter(this.state.movies, function(o) {return o.release_date.includes(year+'-') }) 
            });
        }
        else{
            this.setState({ 
                marcado_anio: false,
                movies: _.filter(this.state.movies, function(o) {return true }) 

            });
        }
    }

    // Hacer una llamada antes del map que nos devuelva el array ordenado para luego hacer un filter.

    ordenarPor(sort){

        const orden = sort.split("-")
        const parametro = orden[0]
        const opt = orden[1]

        console.log(this.state.movies[0])

        this.setState({ 
            parametro: parametro,
            opt: opt,
            movies: _.orderBy(this.state.movies, [parametro], [opt]) 
        });

    }

    componentWillUnmount() {
        // you need to unbind the same listener that was binded.
        window.removeEventListener('scroll', this.infiniteScroller, false);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.movies.length > this.state.movies.length) {
            this.setState({
                loadingMovies: false,
                page: this.state.page + 1,
                movies: nextProps.movies
            })
        }
        else{
            this.setState({
                loadingMovies: false,
                movies: nextProps.movies
            })
        }
    }

    seleccion(categoria, page) {
        switch(categoria){
            case 'popular': this.props.moviesActions.popularMovies(page);  break;
            case 'top-rated':  this.props.moviesActions.topMovies(page); break;
            case 'upcoming':  this.props.moviesActions.loadComingSoon(page); break;
            default: this.props.moviesActions.loadMovies(page); break;
        }
        this.setState({category : categoria})
    }

    render() {
        const { movies, category, sort, parametro, opt , year, marcado_anio} = this.state

        return (
            <section className="container main movies">
                <header className="row">
                    <div className="col-12">
                        <h1>{movies.length > 0 ? 'Movies' : 'Loading...'}</h1>
                    </div>
                </header>
                <aside className="row">
                    <div className="form-group">
                        <label>Now viewing:</label>
                        <select id="sel_categoria" className="form-control" onChange={this.cambiarCategoria} 
                        defaultValue={category} >
                            <option value="all">All</option>
                            <option value="popular">Popular</option>
                            <option value="top-rated">Top Rated</option>
                            <option value="upcoming">Upcoming</option>
                        </select>
                    </div>
                </aside>
                <div className="form-group">
                        <label>Sort by:</label>
                        <select className="form-control" defaultValue={sort} onChange={this.cambiarSort} >
                            <option value="title-asc">Title (Asc)</option>
                            <option value="title-desc">Title (Desc)</option>
                            <option value="popularity-asc">Less Popular</option>
                            <option value="popularity-desc">More Popular</option>
                            <option value="vote_average-asc">Worst</option>
                            <option value="vote_average-desc">Best</option>
                            <option value="release_date-asc">Oldest</option>
                            <option value="release_date-desc">Newest</option>
                        </select>
                    </div>

                <div className="form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" onClick={this.esteAnio} />
                            View this year only
                        </label>
                    </div>
                <div className="row movie-list-wrapper">
                    
                    {_.orderBy( marcado_anio ? _.filter(movies, function(o) {return o.release_date.includes(year+'-') }) : movies ,[parametro],[opt]).map((movie, i) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Movies)

