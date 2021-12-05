import React from "react"
import { NavLink } from "react-router-dom"
import './Nav.scss'

class Nav extends React.Component{
    render() {
        return (
            <div className="topnav">
                {/* <a className="active" href="/">Home</a>
                <a href="/todo">Todo</a>
                <a href="/about">About</a> */}
                <NavLink to="/" activeClassName="active" exact={true}>
                    Home
                </NavLink>
                <NavLink to="/todo" activeClassName="active">
                    Todo
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                    About
                </NavLink>
                <NavLink to="/user" activeClassName="active">
                    User
                </NavLink>
            </div>
        )
    }
}

export default Nav