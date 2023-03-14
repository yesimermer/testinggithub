import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav className ='App-header'>
   <ul>
    <li><Link to="/blogs" >Blogs</Link></li>
    <li><Link to="/contact" >Contact</Link></li>
    <li><Link to="/nopage" >NoPage</Link></li>
   </ul>
      </nav>
    </div>
  )
}
export default Nav