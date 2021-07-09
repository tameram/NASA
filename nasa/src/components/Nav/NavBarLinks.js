
import React, { useState } from "react"
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import Home from "../Container/Home"
import Search from "../Container/Search"
import Favourites from "../Container/Favourites"
function NavBarLinks() {
    // your code here


    return (
        <div>
            <Router>
                <Link to='./Home'>Home</Link>
                <Link to='./Search'>Search</Link>
                <Link to='./Favourites'>Favourites</Link>

                <Route exact path="/home" component={Home} />
                <Route exact path="/Search" component={Search} />
                <Route exact path="/Favourites" component={Favourites} /></Router>
        </div>
    )
}
export default NavBarLinks