import React , {useEffect} from 'react'
import {Route, Switch, NavLink} from "react-router-dom";

import HomeComponent from '../home-view/main' ;
import SpareParts from '../home-view/spare_parts';
import Generators from '../home-view/generators' ;
import Solar from '../home-view/solar';
import Accessories from '../home-view/accessories'


const HomePage = () => {
    useEffect(() => {
        document.body.classList.add("index-page")
        document.body.classList.remove("signup-page")
        document.body.classList.add("sidebar-collapse")
        document.documentElement.classList.remove("nav-open")
    })

    return(
        <>
          
           <div className="main">
               <div className="home-nav ">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-lg-4 search-col order-last order-lg-first">
                                <i className="fa fa-search"></i>
                                <input type="search" placeholder="Search" className="search-box" />
                            </div>
                            <div className="col-lg-8 h-navs order-first order-lg-last">
                                <ul className="">
                                    <li className="nav-item">
                                        <NavLink to="/shop/home" activeClassName="active">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/shop/spareparts" activeClassName="active">Spare Parts</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/shop/generators" activeClassName="active">Generators</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/shop/solar" activeClassName="active">Solar</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/shop/accessories" activeClassName="active">Accessories</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
               </div>

               <div className="home-page">
                <Switch>
                    <Route
                        exact path="/shop/home"
                        component={HomeComponent} />
                    <Route
                        exact path="/shop/spareparts"
                        component={SpareParts} />
                    <Route
                        exact path="/shop/generators"
                        component={Generators} />
                    <Route
                        exact path="/shop/solar"
                        component={Solar} />
                    <Route
                        exact path="/shop/accessories"
                        component={Accessories} />
                </Switch>
               </div>
           </div>
        </>
    )

}



export default HomePage