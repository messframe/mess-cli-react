import React from 'react'
import {singleSpa} from '../utils/singleSpa'

export default class HomePage extends React.Component {
    goPage = (path) => {
        singleSpa.router.push(path)
    }
    render () {
        return (
            <div>
                <h1>Page1 !</h1>
                <button onClick={() => this.goPage('/mess_react')}>Home</button>
            </div>
        )
    }
}