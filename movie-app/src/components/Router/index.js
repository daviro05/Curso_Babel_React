import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux' 

import App from '../../layouts/App'
import Home from '../../views/Home'
import Movies from '../../views/Movies'
import Movie from '../../views/Movie'
import Popular from '../../views/Popular'
import TopMovies from '../../views/TopMovies'
import NotFound from '../../views/NotFound'

const Router = ({history}) => (
    <ConnectedRouter history={history}>
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/movies/:id" component={Movie} />
                <Route path="/movies" component={Movies} />
                <Route path="/popular/movies" component={Popular} />
                <Route path="/top-rated/movies" component={TopMovies} />
                <Route component={NotFound} />
            </Switch>
        </App>
    </ConnectedRouter>
)

export default Router