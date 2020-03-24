import React from 'react'
import './App.css'
import { createStore, applyMiddleware } from 'redux'
import AppReducer from './reducers/app/app.reducer'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import Login from './login/login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const store = createStore(AppReducer, applyMiddleware(thunkMiddleware))

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
