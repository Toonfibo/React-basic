import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
   <ul>
    <li><a className="active" href='/'>My App</a></li>
    <li><a  href='/'>Home</a></li>
    <li><a  href='/'>About</a></li>
   </ul>
  )
}

export default Navbar