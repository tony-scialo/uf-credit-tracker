import React from 'react'
import './App.css'
import { createStore, applyMiddleware } from 'redux'
import AppReducer from './reducers/app/app.reducer'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'

const store = createStore(AppReducer, applyMiddleware(thunkMiddleware))

function App() {
  return (
    <Provider store={store}>
      <div>TEST</div>
    </Provider>
  )
}

export default App
