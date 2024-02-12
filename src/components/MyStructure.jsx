import React from "react";
import "../style/myStructure.css";
function MyStructure({ user, allUsers, numOfPartners, all_partners }) {
  let partner1 = allUsers.find((item) => item.login === user?.invitedBy);
  let partner2 = allUsers.find((item) => item.login === partner1?.invitedBy);
  let personal_partner = allUsers.filter((item)=> item.partner === user.login)
  return (
    <div className="myStructure">
      <div className="myStructure__top">
        <div>
          <span>Shaxsiy hamkorlar soni:</span>
          <h4>{personal_partner.length}</h4>
        </div>
        <div>
          <span>Tarmoqdagi jami hamkorlar soni:</span>
          <h4>{numOfPartners}</h4>
        </div>
      </div>

      <div className="myStructure__main">
        <span >{partner2?.name} <br />{partner2?.login}</span>
        <i className="fa-solid fa-arrow-right"></i>
        <span>{partner1?.name} <br />{partner1?.login}</span>
        <i className="fa-solid fa-arrow-right"></i>
        <span>siz</span>
      </div>
      <div className="myStructure__bottom">
        <ul className="bottom__nav">
          <li>Login</li>
          <li>FIO</li>
          <li>Telefon</li>
        </ul>
        <div className="bottom__main">
          {all_partners?.map((item)=>{
            return(
            <ul className="bottom__main__card" key={item[0].cur_id}>
              <li>{item[0].login}</li>
              <li>{item[0].name}</li>
              <li>{item[0].phone}</li>
            </ul>
            )
          })}
          
        </div>
      </div>
    </div>
  );
}

export default MyStructure;
