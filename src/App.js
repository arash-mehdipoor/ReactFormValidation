import React from 'react';
import './App.css';
import Home from './components/Pages/Home';
import Products from './components/Pages/Products';
import Services from './components/Pages/Services';
import SignUp from './components/Pages/Sign-up';
import NavBar from './components/Navbar'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/services" exact component={Services} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
      </Router>
    </>
  )
}

export default App
