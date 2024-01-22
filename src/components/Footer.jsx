import React from 'react'
import '../style/footer.css'
import logo from '../image/last.png'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <footer className='foooter'>
      <div className="container">
         <div className="footer__grid">
            <NavLink to="/"><img width={200} src={logo} alt="" /></NavLink>
            <ul className='footer__list'>
              <li><NavLink to="/">Bosh sahifa</NavLink></li>
              <li><a href="#about">Biz haqimizda</a></li>
              <li><a href="#roadMap">Yo'l xarita</a></li>
            </ul>
            <p>© 2023-2024 All rights reserved </p>
          </div>   

          <NavLink className="policy" to="/policy">Huquq va majburiyatlar</NavLink>  
            
      </div>     
    </footer>
  )
}

export default Footer
