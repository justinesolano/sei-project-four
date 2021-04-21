import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Register from './auth/Register'
import Login from './auth/Login'
import PlantIndex from './components/PlantIndex'
import UserProfile from './components/UserProfile'
// import PlantCard from './components/PlantCard'
import PlantShow from './components/PlantShow'
// import Search from './components/Search'
// import Slider from './components/slide/Slider.js'
import CategoryIndex from './components/categories/CategoryIndex'
import CommentEdit from './components/comments/CommentEdit'
import MakePost from './components/MakePost'
import Explore from './components/Explore'


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
        <Route path="/explore">
          <Explore />
        </Route>
        <Route path="/categories">
          <CategoryIndex />
        </Route>
        <Route path="/plants/:id/comment">
          <CommentEdit />
        </Route>
        <Route exact path="/profile/:id"> 
          <UserProfile />
        </Route>
        <Route path="/plants/:id"> 
          <PlantShow />
        </Route>
        <Route path="/newpost"> 
          <MakePost />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App