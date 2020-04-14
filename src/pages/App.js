import HomePage from './homePage'
import Page1 from './page1'
import Page2 from './page2'
import React from 'react'
import {Route,BrowserRouter, Switch} from 'react-router-dom'

export default class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/mess_react" component={HomePage}/>
                    <Route exact path="/mess_react/page1" component={Page1}/>
                    <Route exact path="/mess_react/page2" component={Page2}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
