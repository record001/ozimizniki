import React from 'react'
import '../style/achivement.css'
import rocket from '../image/rocket.png'
import human from '../image/human.png'
import track from '../image/track.png'
import top from '../image/top.png'
import bottom from '../image/bottom.png'
function Achivemnets() {
  return (
    <section className='achivemant'>
      <div className="container">
         <h2>Biz bilan nimalarga erishasiz?</h2> 
         <div className="achivement__grid">
            <div className="achivement__card">
              <div className="round">
                 <img src={rocket} alt="" />
              </div>
              <h4>1- bosqich: <br />Siz 1 000 000 so'm sarmoya hisobiga  dastlabki kitoblar to'plamiga ega bo'lasiz</h4>
            </div>
            <img className='arrow' src={top} alt="" />
            <div className="achivement__card">
              <div className="round">
              <img src={track} alt="" />

              </div>
              <h4> 3- bosqich: <br /> Siz kiritgan sarmoyangizni to'liq qaytarib olasiz </h4>
            </div>
            <img className='arrow'  src={bottom} alt="" />

            <div className="achivement__card">
              <div className="round">
              <img src={track} alt="" />

              </div>
              <h4>5- bosqich: <br />Siz  1 500 000 so'mlik kitoblar to'plamini olasiz</h4>
            </div>
            <img className='arrow'  src={top} alt="" />

            <div className="achivement__card">
              <div className="round">
              <img src={human} alt="" />
              </div>
              <h4>6- bosqich: <br />  Hohishingizga qarab: <br />
               1. "Umra ziyorati" <br />
               2.  10 mln so'm hamda 3 mln so'mlik kitoblar to'plami. <br />
               Har ikki holatda ham reinvest </h4>
            </div>
          </div>    
      </div>     
    </section>
  )
}

export default Achivemnets
