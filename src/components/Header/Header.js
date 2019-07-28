import React from "react";
import "./Header.css";

const Header = props => <div className="header">

  <nav className="navbar navbar-expand-lg navbar-light bg-danger white">
   <h3 className="nav-item justify-self-start">Clicky Game</h3>
   <h3 className="nav-item justify-self-center">{props.message}</h3>
   <h3 className="nav-item justify-self-end">Score: {props.userScore || 0} | High Score: {props.highScore}</h3>
  </nav>
</div>

export default Header;