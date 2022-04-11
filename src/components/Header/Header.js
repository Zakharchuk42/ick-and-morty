import React from 'react'

import {NavLink} from 'react-router-dom'

import './Header.scss'

const setActive = ({isActive}) => isActive ? 'Header__link Header__link_active' : 'Header__link'

const Header = () => {
  return (
    <div className={`Header`}>
      <NavLink to='/rick-and-morty/' className={setActive}>Characters</NavLink>
      <NavLink to='/rick-and-morty/to-do' className={setActive}>Todo List</NavLink>
      <NavLink to='/rick-and-morty/error-page' className={setActive}>Error Page</NavLink>
    </div>
  )
}

export default Header