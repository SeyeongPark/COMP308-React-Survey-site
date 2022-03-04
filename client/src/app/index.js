import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { SurveysList, SurveysCreate, SurveysUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/surveys/list" exact component={SurveysList} />
                <Route path="/surveys/create" exact component={SurveysCreate} />
                <Route
                    path="/surveys/update/:id"
                    exact
                    component={SurveysUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App
