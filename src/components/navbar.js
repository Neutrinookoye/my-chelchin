import React , {useState} from 'react'
import {Link , NavLink} from 'react-router-dom'

import {Collapse , Navbar , NavItem , Nav} from 'reactstrap' ;

function IndexNavbar() {
  const [collapseOpen , setCollapseOpen] = useState(false) ;

  return (
    <>
      {collapseOpen ? (
        <div id="bodyClick" 
          onClick={() => {document.documentElement.classList.toggle("nav-open") 
                    setCollapseOpen(false) ;}
          }    
        />
      ) : null}
      <Navbar className="fixed-top shadow-sm" expand="lg">
        <div className="container"> 
          <div className="">
            <Link to="/" id="navbar-brand" className="navbar-brand"> My-Celchin</Link>
          </div>
          <button className="navbar-toggler" 
            onClick={() => {
                document.documentElement.classList.toggle('nav-open')
                setCollapseOpen(!collapseOpen)
            }}
              aria-expanded={collapseOpen}
              type="button"
            >
            <span className="navbar-toggler-bar top-bar"></span>
            <span className="navbar-toggler-bar middle-bar"></span>
            <span className="navbar-toggler-bar bottom-bar"></span>
          </button>
        <Collapse className="justify-content-end"
          isOpen={collapseOpen}
          navbar
        >
          <Nav navbar className="">
            <NavItem>
              <NavLink 
                to="/shop/home"
                className="nav-link"
                activeClassName="active"
              >
                <span>Shop</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                to="/about"
                className="nav-link"
                activeClassName="active"
              >
                <span>About Us</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                to="/hire"
                className="nav-link"
                activeClassName="active"
              >
                <span>Hire</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                to="/services"
                className="nav-link"
                activeClassName="active"
              >
                <span>Services</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                to="/contact"
                className="nav-link"
                activeClassName="active"
              >
                <span>Contact Us</span>
              </NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
        </div>
      </Navbar>
    </>
  )
}


export default IndexNavbar