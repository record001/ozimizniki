import React from 'react'
import '../style/profile.css'
import logo from '../image/bir-logo.png'
function Profile({info}) {
  return (
    <div className= "profile">
      <div className="profile__card">
        <img src={logo} alt="logo" />
      </div>
      <div className="profile__card">
        <h4>{info.name}</h4>
        <h4>{info.phone}</h4>
        <h3>Meros egasi:</h3>
        <h4> {info.inheritence}</h4>
      </div>
      <div className="profile__card">
       {info.active ?  <h4>Siz faolsiz</h4> : <h4>Siz faol emassiz</h4>}
        <h3>Ustozingiz:</h3>
        <h4> {info.partner}</h4>
        <h3>Ro'yxatdan o'tgan sana:</h3>
        <h4> {info.date}</h4>
        

      </div>
    </div>
  )
}

export default Profile
