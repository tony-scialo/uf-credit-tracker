import React from 'react'
import './App.scss'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import Login from './login/login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import reducers from './reducers/reducer'
import Dashboard from './dashboard/Dashboard'

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
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
