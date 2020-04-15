import React from 'react'
import {singleSpa} from '../utils/singleSpa'

export default class HomePage extends React.Component {
    back = () => {
        singleSpa.router.back()
    }
    render () {
        return (
            <div>
                <h1>HomePage !</h1>
                <button onClick={this.back}>返回上一页</button>
            </div>
        )
    }
}