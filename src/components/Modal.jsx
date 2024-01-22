import React from "react";
import "../style/modal.css";
import { NavLink } from 'react-router-dom'

function Modal() {
 
  function closeModal() {
    document.querySelector(".modal").classList.remove("open_modal")
    document.querySelector(".burger").classList.remove("change");

  }
  return (
    <div className="modal" >
      <ul className="modal__list">
        <div>
        <li>
          <NavLink to="/" onClick={closeModal}>Bosh sahifa</NavLink>
        </li>
        <li>
          <a href="#about" onClick={closeModal}>Biz haqimizda</a>
        </li>
        <li>
          <a href="#roadMap" onClick={closeModal}>Yo'l xarita</a>
        </li>
        </div>
        <ul className="modal__bottom">
          <li>
          <NavLink to="/login" onClick={closeModal}>Kirish</NavLink>
        </li>
        <li>
          <NavLink to="/register" onClick={closeModal}>Ro'yhatdan o'tish</NavLink>
        </li>
        </ul>
        
      </ul>
    </div>
  );
}

export default Modal;
