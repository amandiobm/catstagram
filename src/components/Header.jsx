// Exercise 6: Routing
// import Link from react-router-dom
// use the Link component to link to each route with a 'to' property
// check that your links work!

import React from "react";

class Header extends React.Component {
  render() {
    return (
      <ul className="Header">
        <li className="Logo">Catstagram</li>
        <li>Home</li>
        <li>About</li>
        <li>Profile</li>
      </ul>
    );
  }
}

export default Header;
