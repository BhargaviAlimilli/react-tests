import React from "react"
import {BrowserRouter as Router, Link,Route} from 'react-router-dom'


function NavBar(){

 return(
  <nav>
  <div className="nav-wrapper">
    <Link to="/" className="brand-logo">Fact News</Link>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/covidnews">Covid News</Link></li>
      <li><Link to="/images">Foods</Link></li>
    </ul>
  </div>
  </nav>
 )

}

export default NavBar