import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store, { persistor } from './store'
import App from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import { PersistGate } from 'redux-persist/integration/react'
import './stylesheets/index.scss'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
