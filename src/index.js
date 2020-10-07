import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

// Stylings........
import './assets/css/bootstrap.min.css'
import './assets/fontawesome/css/font-awesome.min.css'
import "./assets/scss/ace.scss"

import Navbar from '../src/components/navbar' ;
import Home from './layouts/home' ;
import About from './layouts/about' ;
import Hire from './layouts/hire' ;
import Services from './layouts/services'
import Contact from './layouts/contact'
import ProductComponent from './components/prod'


ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Switch >
        <Route 
            path="/shop/product/123"
            component={ProductComponent} 
        />
        <Route 
            path="/shop"
            component={Home} 
        />
        <Route 
            path="/about"
            component={About} 
        />
        <Route 
            path="/hire"
            component={Hire} 
        />
        <Route 
            path="/services"
            component={Services} 
        />
        <Route 
            path="/contact"
            component={Contact} 
        /> 

        <Redirect from='/' to="/shop/home" />
    </Switch>
  </BrowserRouter> ,
  document.getElementById('root')
) ;