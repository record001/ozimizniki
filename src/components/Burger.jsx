import React from 'react'
import '../style/burger.css'

function Burger() {
  function toggleModal(e) {
    e.target.classList.toggle("change");
    document.querySelector(".modal").classList.toggle("open_modal")
    
  }
  return (
    <div className="burger" onClick={(e)=>toggleModal(e)}>
    <div className="bar1"></div>
    <div className="bar2"></div>
    <div className="bar3"></div>
  </div>
  )
}

export default Burger
