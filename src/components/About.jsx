import React from 'react'
import '../style/about.css'
import lavh from '../image/lavh.jpg'
function About() {
  return (
    <section className='about'>
      <div className="container">
         <div className="about__grid">
            <div className="about__content" data-aos="fade-right">
       
              <h2>Loyihamiz haqida</h2>
              <p>Bizning loyihamiz "O'zimizniki" deya ataladi. Sababi, g'oya o'zimizniki, loyiha o'zimizniki, ta'sischilar o'zimizniki,  kitob mualliflari o'zimizniki va kitobxonlar o'zimizniki</p>
              <p>Loyihamiz o'z faoliyatini tarmoqli marketing yo'nalishida olib borgan holda yuqorida ta'kidlaganimizdek ma'rifatni, ziyo tarqatishni, ma'naviy poklanishni va kitobxonlikni targ'ib qilishni o'zining asosiy maqsadi va vazifasi deb biladi</p>
              <p>Loyihamiz kitobxonlari va yo`nalishimizga aloqador tashkilot vakillari ishtorokida har chorakda e'tirof va ehtirom tadbirlari o`tkaziladi. Bu tadbirlarda yetakchi kitobxon-hamkorlar va ma'lum bir oraliq natijani qo'lga kiritgan kitobxonlar moddiy va ma'naviy rag'batlantiriladi.</p>
            </div>
            <div className="about__img" data-aos="fade-right">
                <img src={lavh} alt="books" />
            </div>
          </div>     

          
      </div>     
    </section>
  )
}

export default About
