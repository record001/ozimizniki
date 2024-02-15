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
            
            // src="https://www.youtube.com/embed/MzyWsusbmpI?si=TMdBZYly7R6Clsy3"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="media__pdf">
            <img src={pdf} alt="" />
            <NavLink to="/presentation">Loyiha taqdimoti</NavLink>
          </div>
        </div>

        {/* <h1>Loyihamizga 2024 yil 11 yanvar kuni start berildi</h1>
        <h1>Biz bilan nimalarga erishasiz?</h1>
        <h2>Faoliyat tizimga kiritilgan 200 000 so'm mablag' bilan boshlanadi</h2>
        <h2>Birinchi pog'ona nihoyasiga yetgach siz narxi 200 000 so'mlik kitoblar to'plamiga ega bo'lasiz</h2>
        <h2>Ikkinchi pog'ona nihoyasiga yetgach tizimda shakllangan mablag'dan 1 000 000 so'm mablag'ni rag'bat bonusi va 500 000 so'mlik kitoblar to'plamini olasiz</h2> 
        <h2>Uchinchi pog'ona nihoyasiga yetgach tizimda shakllangan mablag'dan 10 000 000 so'm mablag'ni rag'bat bonusi sifatida olasiz undan tashqari sizga "Umra ziyorati" yo'llanmasi uchun to`liq to'lov qilib beriladi va jami 1 500 000 so'mlik kitoblar to'plami sovg'a qilinadi</h2>

        <p>Ajratmalar hisobidan shakllangan hamkorlar uchun xorij davlatlariga sayohat yo'llanmalari berish nazarda tutilgan</p> */}
      </div>
    </section>
  );
}

export default Media;
