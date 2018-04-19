import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux' 

import App from '../../layouts/App'
import Home from '../../views/Home'
import Movie from '../../views/Movie'
import Movies from '../../views/Movies'
import MoviesExtra from '../../views/MoviesExtra'

import TVShow from '../../views/TVShow'
import TVShows from '../../views/TVShows'
import TVShowsExtra from '../../views/TVShowsExtra'
import NotFound from '../../views/NotFound'

const Router = ({history}) => (
    <ConnectedRouter history={history}>
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/movies/:id/:option" component={MoviesExtra} />
                <Route path="/movies/:id" component={Movie} />
                <Route path="/movies" component={Movies} />
                <Route path="/tvshows/:id/:option" component={TVShowsExtra} />
                <Route path="/tvshows/:id" component={TVShow} />
                <Route path="/tvshows" component={TVShows} />
                <Route component={NotFound} />
            </Switch>
        </App>
    </ConnectedRouter>
)

export default Router