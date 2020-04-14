import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import { property } from 'lodash'
import setPublicPath from './set-public-path.js'

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  loadRootComponent: () => import('./root.component.js').then(property('default')),
  domElementGetter,
})

export const bootstrap = [
  () => {
    return setPublicPath()
  },
  reactLifecycles.bootstrap,
]

export const mount = (props) => reactLifecycles.mount(props)

export const unmount = [
  reactLifecycles.unmount,
]

export const unload = [
  reactLifecycles.unload,
]

function domElementGetter() {
  let el = document.getElementById("app_mess_react");
  if (!el) {
    el = document.createElement('div');
    el.id = 'app_mess_react';
    document.body.appendChild(el);
  }

  return el;
}
