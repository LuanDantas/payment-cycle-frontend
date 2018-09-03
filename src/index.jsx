// Default imports
import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'

// Components imports
import App from './main/app'
import reducers from './main/reducers'

// Definindo a store para o Redux
const store = applyMiddleware(promise)(createStore)(reducers)

// Render
ReactDOM.render(
    // Envolver toda a aplicação com a tag Provider do Redux
    <Provider store={ store }>
        <App />
    </Provider>
, document.getElementById('app'))