// Default imports
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Components imports
import App from './main/app'
import reducers from './main/reducers'

// Definindo a store para o Redux
const store = createStore( reducers )

// Render
ReactDOM.render(
    // Envolver toda a aplicação com a tag Provider do Redux
    <Provider store={ store }>
        <App />
    </Provider>
, document.getElementById('app'))