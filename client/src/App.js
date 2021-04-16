import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Register from './auth/Register'
import Login from './auth/Login'
import ExplorePlants from './components/ExplorePlants'
import UserProfile from './components/UserProfile'


const App = () => {

  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/explore">
          <ExplorePlants />
        </Route>
        <Route exact path='/profile/:id'> 
          <UserProfile />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App