import React from "react";
import HeroBox from "./HeroBox";
import "../style/hero.css";
import { NavLink } from "react-router-dom";
import logo from "../image/bir-logo.png";
function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__grid">
            <div className="hero__content" data-aos="fade-right">
              <HeroBox text="O‘zbekiston Respublikasi Vazirlar Mahkamasining  14.12.2020 yildagi 781-son qaroriga asoslangan holda yurtimizda kitobxonlikni rivojlantirish " />
              <HeroBox text="O'zbekistonda kitobxonlikni rivojlantirish va kitob o'qish orqali loyihamiz shartlarini bajargan holda daromad va qo'shimcha daromad manbaiga ega bo'lish" />
            </div>
            <div className="hero__logo">
              <img src={logo} alt="" />
            </div>
            <div className="hero__content" data-aos="fade-right">
              <HeroBox text="Yurtimiz aholisi va aholining kam ta'minlangan qatlamiga qo'shimcha daromad manbaini yaratgan holda kambag'allikni qisqartirish, yangi ish o'rinlarini yaratish orqali aholi bandligini va moliyaviy erkinligini ta'minlash " />
              <HeroBox text="Bu loyihaga aholini va ayniqsa, yoshlarimizni jalb qilgan holda ularning ma'naviyatini yuksaltirish, dunyoqarashini kengaytirish, qolaversa, mahalliy mualliflarning qalamiga mansub bo'lgan kitoblarini keng ommaga targ'ib qilish" />
            </div>
          </div>
          <div className="hero__bottom">
            <h4>Bizning shior: Mutolaa va daromad</h4>
            <h1>Xush kelibsiz</h1>
            <NavLink  to="/register">
              Safimizga qo'shiling
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
