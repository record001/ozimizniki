import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import logo from "../image/bir-logo.png";
import "../style/userPage.css";
import Stages from "../components/Stages";
import Profile from "../components/Profile";
import MyStructure from "../components/MyStructure";
import Products from "../components/Products";
import Awards from "../components/Awards";
function UserPage() {
  let userID = useParams();
  const [users, setUsers] = useState(null);
  
  function handeClick(e){
    
    e.target.parentElement.querySelector(".active-list").classList.remove("active-list")
    e.target.classList.add("active-list")

    let id = e.target.getAttribute("data-id")
    let content = document.querySelector(`.userPage__info #${id}`)
    content.parentElement.querySelector(".open").classList.remove("open")
    content.classList.add("open")
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  async function fetchUsers() {
    let fetchData = await fetch("https://uzimizniki.pythonanywhere.com/users");
    let json = await fetchData.json();
    setUsers(json);
  }
  let user = users?.filter((item) => item.cur_id === userID.userId);
  let partnersOfUser = []
  
  function getAllPartners() {
     // 2 - stage 2 partner
  let left = users?.filter((item)=> item.login ===user[0].hand_left)
  let right = users?.filter((item)=> item.login ===user[0].hand_right)

  // 3- stage 4 partner
  let left_left =left?.length > 0 && users.filter((item)=>item.login === left[0].hand_left)
  let left_right =left?.length > 0 && users.filter((item)=>item.login === left[0].hand_right)
  let right_left=right?.length >0 && users.filter((item)=>item.login === right[0].hand_left)
  let right_right=right?.length >0 && users.filter((item)=>item.login === right[0].hand_right)
 
   // 4 - stage 8 partner
  let left_left_left = left_left?.length > 0 && users.filter((item)=> item.login ===left_left[0].hand_left)
  let left_left_right = left_left?.length > 0 && users.filter((item)=> item.login ===left_left[0].hand_right)
  let left_right_left =  left_right?.length > 0 && users.filter((item)=> item.login ===left_right[0].hand_left)
  let left_right_right =left_right?.length > 0 && users.filter((item)=> item.login ===left_right[0].hand_right)

  let right_left_left=  right_left?.length > 0 && users.filter((item)=> item.login ===right_left[0].hand_left)
  let right_left_right = right_left?.length > 0 && users.filter((item)=> item.login ===right_left[0].hand_right)
  let right_right_left = right_right?.length > 0 && users.filter((item)=> item.login ===right_right[0].hand_left)
  let right_right_right = right_right?.length > 0 && users.filter((item)=> item.login ===right_right[0].hand_right)
  // 5- stage 16 partner
  let left_left_left_left = left_left_left?.length > 0 && users.filter((item)=> item.login === left_left_left[0].hand_left)
  let left_left_left_right = left_left_left?.length > 0 && users.filter((item)=> item.login === left_left_left[0].hand_right)
  let left_left_right_left =left_left_right?.length > 0 && users.filter((item)=> item.login === left_left_right[0].hand_left)
  let left_left_right_right =left_left_right?.length > 0 && users.filter((item)=> item.login === left_left_right[0].hand_right)

  let left_right_left_left= left_right_left?.length > 0 && users.filter((item)=> item.login === left_right_left[0].hand_left)
  let left_right_left_right = left_right_left?.length > 0 && users.filter((item)=> item.login === left_right_left[0].hand_right)
  let left_right_right_left = left_right_right?.length > 0 && users.filter((item)=> item.login === left_right_right[0].hand_left)
  let left_right_right_right = left_right_right?.length > 0 && users.filter((item)=> item.login === left_right_right[0].hand_right)

  let right_left_left_left = right_left_left?.length > 0 && users.filter((item)=> item.login === right_left_left[0].hand_left)
  let right_left_left_right = right_left_left?.length > 0 && users.filter((item)=> item.login === right_left_left[0].hand_right)
  let right_left_right_left = right_left_right?.length > 0 && users.filter((item)=> item.login === right_left_right[0].hand_left)
  let right_left_right_right = right_left_right?.length > 0 && users.filter((item)=> item.login === right_left_right[0].hand_right)

  let right_right_left_left = right_right_left?.length > 0 && users.filter((item)=> item.login === right_right_left[0].hand_left)
  let right_right_left_right = right_right_left?.length > 0 && users.filter((item)=> item.login === right_right_left[0].hand_right)
  let right_right_right_left = right_right_right?.length > 0 && users.filter((item)=> item.login === right_right_right[0].hand_left)
  let right_right_right_right = right_right_right?.length > 0 && users.filter((item)=> item.login === right_right_right[0].hand_right)
  // 6 stage 32 partner
  let left_left_left_left_left = left_left_left_left?.length > 0 && users.filter((item)=> item.login === left_left_left_left[0].hand_left)
  let left_left_left_left_right = left_left_left_left?.length > 0 && users.filter((item)=> item.login === left_left_left_left[0].hand_right)
  let left_left_left_right_left = left_left_left_right?.length > 0 && users.filter((item)=> item.login === left_left_left_right[0].hand_left)
  let left_left_left_right_right = left_left_left_right?.length > 0 && users.filter((item)=> item.login === left_left_left_right[0].hand_right)
  let left_left_right_left_left =left_left_right_left?.length > 0 && users.filter((item)=> item.login === left_left_right_left[0].hand_left)
  let left_left_right_left_right =left_left_right_left?.length > 0 && users.filter((item)=> item.login === left_left_right_left[0].hand_right)
  let left_left_right_right_left =left_left_right_right?.length > 0 && users.filter((item)=> item.login === left_left_right_right[0].hand_left)
  let left_left_right_right_right =left_left_right_right?.length > 0 && users.filter((item)=> item.login === left_left_right_right[0].hand_right)

  let left_right_left_left_left= left_right_left_left?.length > 0 && users.filter((item)=> item.login === left_right_left_left[0].hand_left)
  let left_right_left_left_right= left_right_left_left?.length > 0 && users.filter((item)=> item.login === left_right_left_left[0].hand_right)
  let left_right_left_right_left = left_right_left_right?.length > 0 && users.filter((item)=> item.login === left_right_left_right[0].hand_left)
  let left_right_left_right_right = left_right_left_right?.length > 0 && users.filter((item)=> item.login === left_right_left_right[0].hand_right)
  let left_right_right_left_left = left_right_right_left?.length > 0 && users.filter((item)=> item.login === left_right_right_left[0].hand_left)
  let left_right_right_left_right = left_right_right_left?.length > 0 && users.filter((item)=> item.login === left_right_right_left[0].hand_right)
  let left_right_right_right_left = left_right_right_right?.length > 0 && users.filter((item)=> item.login === left_right_right_right[0].hand_left)
  let left_right_right_right_right = left_right_right_right?.length > 0 && users.filter((item)=> item.login === left_right_right_right[0].hand_right)

  let right_left_left_left_left = right_left_left_left?.length > 0 && users.filter((item)=> item.login === right_left_left_left[0].hand_left)
  let right_left_left_left_right = right_left_left_left?.length > 0 && users.filter((item)=> item.login === right_left_left_left[0].hand_right)
  let right_left_left_right_left = right_left_left_right?.length > 0 && users.filter((item)=> item.login === right_left_left_right[0].hand_left)
  let right_left_left_right_right = right_left_left_right?.length > 0 && users.filter((item)=> item.login === right_left_left_right[0].hand_right)
  let right_left_right_left_left = right_left_right_left?.length > 0 && users.filter((item)=> item.login === right_left_right_left[0].hand_left)
  let right_left_right_left_right = right_left_right_left?.length > 0 && users.filter((item)=> item.login === right_left_right_left[0].hand_right)
  let right_left_right_right_left = right_left_right_right?.length > 0 && users.filter((item)=> item.login === right_left_right_right[0].hand_left)
  let right_left_right_right_right = right_left_right_right?.length > 0 && users.filter((item)=> item.login === right_left_right_right[0].hand_right)

  let right_right_left_left_left = right_right_left_left?.length > 0 && users.filter((item)=> item.login === right_right_left_left[0].hand_left)
  let right_right_left_left_right = right_right_left_left?.length > 0 && users.filter((item)=> item.login === right_right_left_left[0].hand_right)
  let right_right_left_right_left = right_right_left_right?.length > 0 && users.filter((item)=> item.login === right_right_left_right[0].hand_left)
  let right_right_left_right_right = right_right_left_right?.length > 0 && users.filter((item)=> item.login === right_right_left_right[0].hand_right)
  let right_right_right_left_left = right_right_right_left?.length > 0 && users.filter((item)=> item.login === right_right_right_left[0].hand_left)
  let right_right_right_left_right = right_right_right_left?.length > 0 && users.filter((item)=> item.login === right_right_right_left[0].hand_right)
  let right_right_right_right_left = right_right_right_right?.length > 0 && users.filter((item)=> item.login === right_right_right_right[0].hand_left)
  let right_right_right_right_right = right_right_right_right?.length > 0 && users.filter((item)=> item.login === right_right_right_right[0].hand_right)

   partnersOfUser = [left, right, left_left, left_right,right_left, right_right, left_left_left,left_left_right, left_right_left, left_right_right, right_left_left,right_left_right, right_right_left, right_right_right, left_left_left_left, left_left_left_right,left_left_right_left, left_left_right_right,left_right_left_left, left_right_left_right,left_right_right_left,left_right_right_right,right_left_left_left,right_left_left_right,right_left_right_left,right_left_right_right, right_right_left_left,right_right_left_right, right_right_right_left, right_right_right_right,left_left_left_left_left,left_left_left_left_right,left_left_left_right_left,left_left_left_right_right,left_left_right_left_left,left_left_right_left_right,left_left_right_right_left,left_left_right_right_right,left_right_left_left_left,left_right_left_left_right,left_right_left_right_left,left_right_left_right_right,left_right_right_left_left,left_right_right_left_right,left_right_right_right_left,left_right_right_right_right,right_left_left_left_left,right_left_left_left_right,right_left_left_right_left, right_left_left_right_right,right_left_right_left_left,right_left_right_left_right,right_left_right_right_left,right_left_right_right_right, right_right_left_left_left,right_right_left_left_right,  right_right_left_right_left, right_right_left_right_right,right_right_right_left_left, right_right_right_left_right, right_right_right_right_left,  right_right_right_right_right,  ]
  }
  getAllPartners()
  let filteredParter = partnersOfUser.filter((item)=>item?.length > 0)
  return (
    user && (
      <div className="userPage">
       
        <div className="user_container">
          <div className="userPage__grid">
            <aside className="aside">
              <div className="aside__logo">
             <NavLink to="/"> <img className="logo" width="200" src={logo} alt="logo" /></NavLink>
              <h1 className="title">{user[0]?.name}</h1>
              <h4 className="title">{user[0]?.login}</h4>
              </div>
              <ul className="userPage__menu">
                <li onClick={(e)=>handeClick(e)} data-id = "a" className="menu active-list"><i className="fa-solid fa-user-tie"></i>  Mening sahifam</li>
                <li onClick={(e)=>handeClick(e)} data-id = "b" className="menu"><i className="fa-solid fa-cubes-stacked"></i>Tarmoq ko`rinishi</li>
                <li onClick={(e)=>handeClick(e)} data-id = "c" className="menu"> <i className="fa-solid fa-list-check"></i>Mening tarmog'im</li>
                <li onClick={(e)=>handeClick(e)} data-id = "d" className="menu"><i className="fa-solid fa-book-open"></i>Mahsulotlar</li>
                <li onClick={(e)=>handeClick(e)} data-id = "e" className="menu"><i className="fa-solid fa-trophy"></i>Rag'bat bonuslari</li>
              </ul>
            </aside>
            <main className="userPage__info">
              <div className="main__header">

                <NavLink className="leave_btn" to='/login'>  Chiqish</NavLink>
                <NavLink  className="leave_btn--icon" to='/login'>  <i className="fa-solid fa-right-from-bracket"></i></NavLink>
              </div>
              <div className="info__item open" id="a"><Profile  info={user[0]} /></div>
              <div className="info__item" id="b"> <Stages   user={user[0]} allUsers={users} /></div>
              <div className="info__item" id="c"> <MyStructure all_partners={filteredParter} user = {user[0]} allUsers={users} numOfPartners={filteredParter.length} /></div>
              <div className="info__item" id="d"><Products /></div>
              <div className="info__item" id="e"> <Awards user={user[0]} /> </div>
                
               
               
                
                
            </main>
          </div>
        </div>
      </div>
    )
  );
}

export default UserPage;
