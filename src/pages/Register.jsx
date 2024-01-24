import React, { useRef, useState } from "react";
import "../style/register.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
function Register() {
  const [left, setLeft] = useState(".");
  const [right, setRight] = useState(".");
  const [hasUser, setHasUser] = useState(false);
  let fName = useRef();
  let user_login = useRef();
  let user_email = useRef();
  let user_psw = useRef();
  let user_phone = useRef();
  let invitedBy = useRef();
  let user_partner = useRef();
  let user_inheritence = useRef();
  let data = useSelector((store) => store.user.name);

  function handleSubmit(e) {
    e.preventDefault();
    let filterPartner = data.filter(
      (user) => user.login === user_login.current.value
    );
    if (filterPartner.length > 0) {
      setRight(filterPartner[0].hand_righ);
      setLeft(filterPartner[0].hand_left);
      setHasUser(true);
    } else {
      let ready_to_push = {
        name: fName.current.value,
        email: user_email.current.value,
        login: user_login.current.value,
        password: user_psw.current.value,
        invitedBy: invitedBy.current.value,
        hand_left: ".",
        hand_righ: ".",
        phone: user_phone.current.value,
        inheritence: user_inheritence.current.value,
        partner: user_partner.current.value,
        active: false,
      };
      fetch("https://uzimizniki.pythonanywhere.com/users/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ready_to_push),
      })
        .then((response) => response.json())
        .then((res) => {
          console.log("test" + res);
          fetch("https://uzimizniki.pythonanywhere.com/users/")
            .then((response) => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error("Error: " + response.status);
              }
            })
            .then((allUSers) => {
              let filteredUser = allUSers.filter(
                (user) => user.login === res.invitedBy
              );
              let filteredUserId = filteredUser[0].cur_id;

              let ready = {};
              if (filteredUser[0].hand_left === ".") {
                ready = {
                  ...filteredUser[0],
                  hand_left: res.login,
                };
              } else if (filteredUser[0].hand_right === ".") {
                ready = {
                  ...filteredUser[0],
                  hand_right: res.login,
                };
              } else {
                ready = {
                  ...filteredUser[0],
                };
              }

              fetch(
                `https://uzimizniki.pythonanywhere.com/users/${filteredUserId}/`,
                {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(ready),
                }
              );
            });
        });

        fName.current.value = ""
        user_email.current.value =""
        user_login.current.value =""
        user_psw.current.value =""
        invitedBy.current.value =""
        user_phone.current.value =""
        user_inheritence.current.value =""
        user_partner.current.value =""
        alert("Siz muvofaqqiyatli ro'yhatdan o'tdingiz");
      //  window.location.reload(false);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="registerForm">
        <h1>Ro'yxatdan o'tish</h1>
        <input type="text" ref={fName} placeholder="Ism familyangiz" required />
        <br />

        <input required type="text" ref={user_login} placeholder="Login" />
        {hasUser && <p className="warning">Bu user mavjud</p>}

        <br />
        <input required type="email" ref={user_email} placeholder="Email" />
        <br />
        <input type="password" ref={user_psw} placeholder="Password" required />
        <br />
        <input
          type="number"
          ref={user_phone}
          id="phone"
          placeholder="Telefon raqam"
        />
        <br />
        <input
          required
          type="text"
          ref={invitedBy}
          placeholder="Tarmoqdagi o'rningiz"
        />
        {left !== "." && right !== "." && (
          <p className="warning">bu foydalanuvchining ikki qo`li band</p>
        )}
        <br />
        <input
          type="text"
          placeholder="Kim taklif qildi ?"
          ref={user_partner}
        />
        <br />
        <input
          type="text"
          placeholder="Kimga meros qoldirasiz ?"
          ref={user_inheritence}
        />
        <label htmlFor="shart">
          <input required type="checkbox"  id="shart" />
          Loyiha shartlariga roziman <NavLink className='shart' to='/policy'>huquq va majburiyat</NavLink>
        </label>
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
