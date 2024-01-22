import React from 'react'
import '../style/header.css'
import { NavLink } from 'react-router-dom'
import logo from '../image/last.png'
import Burger from './Burger'
import Modal from './Modal'
function Header() {
  return (
    <header className='header'>
      <div className="container">
         <div className="header__grid">
            <div className="header__logo">
              <NavLink to='/'>
                <img  src={logo} alt="" />
              </NavLink>
              
            </div>
            <Burger />
            <Modal />
            <nav className='header__nav'>
              <ul className='header__list'>
                <li><NavLink to='/'>Bosh sahifa</NavLink></li>
                <li><a href="#about">Biz haqimizda</a></li>
                <li><a href="#roadMap">Yo'l xarita</a></li>
              </ul>
            </nav>

            <ul className="header__cta">
                <li>
                  <NavLink to="/login" >Kirish</NavLink>
                </li>
                <li>
                  <NavLink to="/register" >Ro'yhatdan o'tish</NavLink>
                </li>
            </ul>
          </div>     
      </div>     
    </header>
  )
}

export default Header
