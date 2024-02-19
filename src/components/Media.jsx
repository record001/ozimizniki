import React from "react";
import '../style/media.css'
import pdf from "../image/PDFSymbol.png";
import { NavLink } from "react-router-dom";
function Media() {
  return (
    <section className="media">
      <div className="container">
        <h2>Ro'yhatdan o'tish</h2>

        <div className="media__grid">
          <iframe
            
            src="https://www.youtube.com/embed/KIgx2q_9YgY?si=DnMp3Tk1cshEkmGy" 
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="media__pdf">
            <img src={pdf} alt="" />
            <NavLink to="/presentation">Loyiha taqdimoti</NavLink>
          </div>
        </div>

    
      </div>
    </section>
  );
}

export default Media;
