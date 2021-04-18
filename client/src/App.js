import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Register from './auth/Register'
import Login from './auth/Login'
import PlantIndex from './components/PlantIndex'
import UserProfile from './components/UserProfile'
import PlantCard from './components/PlantCard'
import PlantShow from './components/PlantShow'



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
        <Route path="/allplants">
          <PlantIndex />
        </Route>
        <Route path="/plants">
          <PlantCard />
        </Route>
        <Route exact path='/profile/:id'> 
          <UserProfile />
        </Route>
        <Route exact path='/:plant_name'> 
          <PlantShow />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App