import React from 'react'
import '../style/profile.css'
import logo from '../image/bir-logo.png'
function Profile({info}) {
  return (
    <div className= "profile">
      <div className="profile__card">
        <img width={200}  src={logo} alt="logo" />
      </div>
      <div className="profile__card">
        <h4>{info.name}</h4>
        <h4>{info.email}</h4>
        <h4>Phone number</h4>
      </div>
      <div className="profile__card">
        <h4>Active</h4>
        
      </div>
    </div>
  )
}

export default Profile
