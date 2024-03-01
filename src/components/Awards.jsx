import React from 'react'
import '../style/awards.css'
function Awards({user}) {
  return (
    <div className='awards'>
      <div className="awards__card">
        <p >Ilk kitoblar to'plami</p>
        <div className="awards__checkbox">
        {user.award1 && <i className="fa-solid fa-check"></i>}  
        </div>
      </div>
      <div className="awards__card">
        <p>450 000 so'mlik rag'bat bonusi</p>
        <div className="awards__checkbox">
        {user.award2 && <i className="fa-solid fa-check"></i>}  
        </div>
      </div>
      <div className="awards__card">
        <p>500 000 so'mlik kitoblar to'plami</p>
        <div className="awards__checkbox">
        {user.award3 && <i className="fa-solid fa-check"></i>}  
        </div>
      </div>
      <div className="awards__card">
        <p>"Umra safari" yo'llanmasi</p>
        <div className="awards__checkbox">
        {user.award4 && <i className="fa-solid fa-check"></i>}  
        </div>
      </div>
      <div className="awards__card">
        <p>Reinvest</p>
        <div className="awards__checkbox">
        {user.award5 && <i className="fa-solid fa-check"></i>}  
        </div>
      </div>
    </div>
  )
}

export default Awards
