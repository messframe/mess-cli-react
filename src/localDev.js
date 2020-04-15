import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import {resetSingleSpa} from './utils/singleSpa'
import MessRouter from 'mess-router'

resetSingleSpa({
    router: new MessRouter('hash')
})

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);