import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <ul id="dropdown1" class="dropdown-content">
          <li>
            <Link to="/">one</Link>
          </li>
          <li>
            <Link to="/">two</Link>
          </li>
          <li class="divider" />
          <li>
            <Link to="/">three</Link>
          </li>
        </ul>
        <nav className="z-depth-0">
          <div className="nav-wrapper deep-purple lighten-3">
            <Link to="/" class="brand-logo">
              <img src={logo} alt="" />
            </Link>
<Link to="#!" data-target="slide-out" class="sidenav-trigger"><i className="material-icons">menu</i></Link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <Link to="/"> One </Link>
              </li>
              <li>
                <Link to="/"> Two </Link>
              </li>
              <li>
                <Link to="/"> Three </Link>
              </li>
              <li>
                <Link class="dropdown-trigger" data-target="dropdown1">
                  Dropdown<i class="material-icons right">arrow_drop_down</i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <ul id="slide-out" class="sidenav">
    <li><div className="user-view">
      <div className="background">
        {/* <img src="images/office.jpg"> */}
      </div>
      {/* <a href="/"><img class="circle" src="images/yuna.jpg"></a> */}
      <a href="/"><span class="white-text name">John Doe</span></a>
      <a href="/"><span class="white-text email">jdandturk@gmail.com</span></a>
    </div></li>
    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
    <li><a href="#!">Second Link</a></li>
    <li><div class="divider"></div></li>
    <li><Link className="subheader">Subheader</Link></li>
    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
  
      </div>
      
    );
  }
}
export default Navbar;
