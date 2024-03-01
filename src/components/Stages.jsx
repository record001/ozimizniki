import React from "react";
import '../style/stages.css'

function Stages({user, allUsers}) {
  // 2 - stage 2 partner
  let left = allUsers.filter((item)=> item.login ===user.hand_left)
  let right = allUsers.filter((item)=> item.login ===user.hand_right)
  // 3- stage 4 partner
  let left_left =left.length > 0 && allUsers.filter((item)=>item.login === left[0].hand_left)
  let left_right =left.length > 0 && allUsers.filter((item)=>item.login === left[0].hand_right)
  let right_left=right.length >0 && allUsers.filter((item)=>item.login === right[0].hand_left)
  let right_right=right.length >0 && allUsers.filter((item)=>item.login === right[0].hand_right)
   // 4 - stage 8 partner
  let left_left_left = left_left.length > 0 && allUsers.filter((item)=> item.login ===left_left[0].hand_left)
  let left_left_right = left_left.length > 0 && allUsers.filter((item)=> item.login ===left_left[0].hand_right)
  let left_right_left =  left_right.length > 0 && allUsers.filter((item)=> item.login ===left_right[0].hand_left)
  let left_right_right =left_right.length > 0 && allUsers.filter((item)=> item.login ===left_right[0].hand_right)

  let right_left_left=  right_left.length > 0 && allUsers.filter((item)=> item.login ===right_left[0].hand_left)
  let right_left_right = right_left.length > 0 && allUsers.filter((item)=> item.login ===right_left[0].hand_right)
  let right_right_left = right_right.length > 0 && allUsers.filter((item)=> item.login ===right_right[0].hand_left)
  let right_right_right = right_right.length > 0 && allUsers.filter((item)=> item.login ===right_right[0].hand_right)
  // 5- stage 16 partner
  let left_left_left_left = left_left_left.length > 0 && allUsers.filter((item)=> item.login === left_left_left[0].hand_left)
  let left_left_left_right = left_left_left.length > 0 && allUsers.filter((item)=> item.login === left_left_left[0].hand_right)
  let left_left_right_left =left_left_right.length > 0 && allUsers.filter((item)=> item.login === left_left_right[0].hand_left)
  let left_left_right_right =left_left_right.length > 0 && allUsers.filter((item)=> item.login === left_left_right[0].hand_right)

  let left_right_left_left= left_right_left.length > 0 && allUsers.filter((item)=> item.login === left_right_left[0].hand_left)
  let left_right_left_right = left_right_left.length > 0 && allUsers.filter((item)=> item.login === left_right_left[0].hand_right)
  let left_right_right_left = left_right_right.length > 0 && allUsers.filter((item)=> item.login === left_right_right[0].hand_left)
  let left_right_right_right = left_right_right.length > 0 && allUsers.filter((item)=> item.login === left_right_right[0].hand_right)

  let right_left_left_left = right_left_left.length > 0 && allUsers.filter((item)=> item.login === right_left_left[0].hand_left)
  let right_left_left_right = right_left_left.length > 0 && allUsers.filter((item)=> item.login === right_left_left[0].hand_right)
  let right_left_right_left = right_left_right.length > 0 && allUsers.filter((item)=> item.login === right_left_right[0].hand_left)
  let right_left_right_right = right_left_right.length > 0 && allUsers.filter((item)=> item.login === right_left_right[0].hand_right)

  let right_right_left_left = right_right_left.length > 0 && allUsers.filter((item)=> item.login === right_right_left[0].hand_left)
  let right_right_left_right = right_right_left.length > 0 && allUsers.filter((item)=> item.login === right_right_left[0].hand_right)
  let right_right_right_left = right_right_right.length > 0 && allUsers.filter((item)=> item.login === right_right_right[0].hand_left)
  let right_right_right_right = right_right_right.length > 0 && allUsers.filter((item)=> item.login === right_right_right[0].hand_right)
  // 6 stage 32 partner
  let left_left_left_left_left = left_left_left_left.length > 0 && allUsers.filter((item)=> item.login === left_left_left_left[0].hand_left)
  let left_left_left_left_right = left_left_left_left.length > 0 && allUsers.filter((item)=> item.login === left_left_left_left[0].hand_right)
  let left_left_left_right_left = left_left_left_right.length > 0 && allUsers.filter((item)=> item.login === left_left_left_right[0].hand_left)
  let left_left_left_right_right = left_left_left_right.length > 0 && allUsers.filter((item)=> item.login === left_left_left_right[0].hand_right)
  let left_left_right_left_left =left_left_right_left.length > 0 && allUsers.filter((item)=> item.login === left_left_right_left[0].hand_left)
  let left_left_right_left_right =left_left_right_left.length > 0 && allUsers.filter((item)=> item.login === left_left_right_left[0].hand_right)
  let left_left_right_right_left =left_left_right_right.length > 0 && allUsers.filter((item)=> item.login === left_left_right_right[0].hand_left)
  let left_left_right_right_right =left_left_right_right.length > 0 && allUsers.filter((item)=> item.login === left_left_right_right[0].hand_right)

  let left_right_left_left_left= left_right_left_left.length > 0 && allUsers.filter((item)=> item.login === left_right_left_left[0].hand_left)
  let left_right_left_left_right= left_right_left_left.length > 0 && allUsers.filter((item)=> item.login === left_right_left_left[0].hand_right)
  let left_right_left_right_left = left_right_left_right.length > 0 && allUsers.filter((item)=> item.login === left_right_left_right[0].hand_left)
  let left_right_left_right_right = left_right_left_right.length > 0 && allUsers.filter((item)=> item.login === left_right_left_right[0].hand_right)
  let left_right_right_left_left = left_right_right_left.length > 0 && allUsers.filter((item)=> item.login === left_right_right_left[0].hand_left)
  let left_right_right_left_right = left_right_right_left.length > 0 && allUsers.filter((item)=> item.login === left_right_right_left[0].hand_right)
  let left_right_right_right_left = left_right_right_right.length > 0 && allUsers.filter((item)=> item.login === left_right_right_right[0].hand_left)
  let left_right_right_right_right = left_right_right_right.length > 0 && allUsers.filter((item)=> item.login === left_right_right_right[0].hand_right)
// ///////////////////////
  let right_left_left_left_left = right_left_left_left.length > 0 && allUsers.filter((item)=> item.login === right_left_left_left[0].hand_left)
  let right_left_left_left_right = right_left_left_left.length > 0 && allUsers.filter((item)=> item.login === right_left_left_left[0].hand_right)
  let right_left_left_right_left = right_left_left_right.length > 0 && allUsers.filter((item)=> item.login === right_left_left_right[0].hand_left)
  let right_left_left_right_right = right_left_left_right.length > 0 && allUsers.filter((item)=> item.login === right_left_left_right[0].hand_right)
  let right_left_right_left_left = right_left_right_left.length > 0 && allUsers.filter((item)=> item.login === right_left_right_left[0].hand_left)
  let right_left_right_left_right = right_left_right_left.length > 0 && allUsers.filter((item)=> item.login === right_left_right_left[0].hand_right)
  let right_left_right_right_left = right_left_right_right.length > 0 && allUsers.filter((item)=> item.login === right_left_right_right[0].hand_left)
  let right_left_right_right_right = right_left_right_right.length > 0 && allUsers.filter((item)=> item.login === right_left_right_right[0].hand_right)

  let right_right_left_left_left = right_right_left_left.length > 0 && allUsers.filter((item)=> item.login === right_right_left_left[0].hand_left)
  let right_right_left_left_right = right_right_left_left.length > 0 && allUsers.filter((item)=> item.login === right_right_left_left[0].hand_right)
  let right_right_left_right_left = right_right_left_right.length > 0 && allUsers.filter((item)=> item.login === right_right_left_right[0].hand_left)
  let right_right_left_right_right = right_right_left_right.length > 0 && allUsers.filter((item)=> item.login === right_right_left_right[0].hand_right)
  let right_right_right_left_left = right_right_right_left.length > 0 && allUsers.filter((item)=> item.login === right_right_right_left[0].hand_left)
  let right_right_right_left_right = right_right_right_left.length > 0 && allUsers.filter((item)=> item.login === right_right_right_left[0].hand_right)
  let right_right_right_right_left = right_right_right_right.length > 0 && allUsers.filter((item)=> item.login === right_right_right_right[0].hand_left)
  let right_right_right_right_right = right_right_right_right.length > 0 && allUsers.filter((item)=> item.login === right_right_right_right[0].hand_right)

 // 7 stage 64 partner
// 1
 let left_left_left_left_left_left = left_left_left_left_left.length > 0 && allUsers.filter((item)=> item.login === left_left_left_left_left[0].hand_left)
 let left_left_left_left_left_right = left_left_left_left_left.length > 0 && allUsers.filter((item)=> item.login === left_left_left_left_left[0].hand_right)
// 2
let left_left_left_left_right_left = left_left_left_left_right.length > 0 && allUsers.filter((item)=> item.login === left_left_left_left_right[0].hand_left)
let left_left_left_left_right_right = left_left_left_left_right.length > 0 && allUsers.filter((item)=> item.login === left_left_left_left_right[0].hand_right)
// 3
let left_left_left_right_left_left = left_left_left_right_left.length > 0 && allUsers.filter((item)=> item.login === left_left_left_right_left[0].hand_left)
let left_left_left_right_left_right = left_left_left_right_left.length > 0 && allUsers.filter((item)=> item.login === left_left_left_right_left[0].hand_right)
// 4
let left_left_left_right_right_left = left_left_left_right_right.length > 0 && allUsers.filter((item)=> item.login === left_left_left_right_right[0].hand_left)
let left_left_left_right_right_right = left_left_left_right_right.length > 0 && allUsers.filter((item)=> item.login === left_left_left_right_right[0].hand_right)
//5 
let left_left_right_left_left_left =left_left_right_left_left.length > 0 && allUsers.filter((item)=> item.login === left_left_right_left_left[0].hand_left)
let left_left_right_left_left_right =left_left_right_left_left.length > 0 && allUsers.filter((item)=> item.login === left_left_right_left_left[0].hand_right)
//6 
let left_left_right_left_right_left =left_left_right_left_right.length > 0 && allUsers.filter((item)=> item.login === left_left_right_left_right[0].hand_left)
let left_left_right_left_right_right =left_left_right_left_right.length > 0 && allUsers.filter((item)=> item.login === left_left_right_left_right[0].hand_right)
//7
let left_left_right_right_left_left =left_left_right_right_left.length > 0 && allUsers.filter((item)=> item.login === left_left_right_right_left[0].hand_left)
let left_left_right_right_left_right =left_left_right_right_left.length > 0 && allUsers.filter((item)=> item.login === left_left_right_right_left[0].hand_right)
//8
let left_left_right_right_right_left =left_left_right_right_right.length > 0 && allUsers.filter((item)=> item.login === left_left_right_right_right[0].hand_left)
let left_left_right_right_right_right =left_left_right_right_right.length > 0 && allUsers.filter((item)=> item.login === left_left_right_right_right[0].hand_right)
//9
let left_right_left_left_left_left= left_right_left_left_left.length > 0 && allUsers.filter((item)=> item.login === left_right_left_left_left[0].hand_left)
let left_right_left_left_left_right= left_right_left_left_left.length > 0 && allUsers.filter((item)=> item.login === left_right_left_left_left[0].hand_right)
//10
let left_right_left_left_right_left= left_right_left_left_right.length > 0 && allUsers.filter((item)=> item.login === left_right_left_left_right[0].hand_left)
let left_right_left_left_right_right= left_right_left_left_right.length > 0 && allUsers.filter((item)=> item.login === left_right_left_left_right[0].hand_right)
//11
let left_right_left_right_left_left = left_right_left_right_left.length > 0 && allUsers.filter((item)=> item.login === left_right_left_right_left[0].hand_left)
let left_right_left_right_left_right = left_right_left_right_left.length > 0 && allUsers.filter((item)=> item.login === left_right_left_right_left[0].hand_right)
//12
let left_right_left_right_right_left = left_right_left_right_right.length > 0 && allUsers.filter((item)=> item.login === left_right_left_right_right[0].hand_left)
let left_right_left_right_right_right = left_right_left_right_right.length > 0 && allUsers.filter((item)=> item.login === left_right_left_right_right[0].hand_right)
//13
let left_right_right_left_left_left = left_right_right_left_left.length > 0 && allUsers.filter((item)=> item.login === left_right_right_left_left[0].hand_left)
let left_right_right_left_left_right = left_right_right_left_left.length > 0 && allUsers.filter((item)=> item.login === left_right_right_left_left[0].hand_right)
//14
let left_right_right_left_right_left = left_right_right_left_right.length > 0 && allUsers.filter((item)=> item.login === left_right_right_left_right[0].hand_left)
let left_right_right_left_right_right = left_right_right_left_right.length > 0 && allUsers.filter((item)=> item.login === left_right_right_left_right[0].hand_right)
//15
let left_right_right_right_left_left = left_right_right_right_left.length > 0 && allUsers.filter((item)=> item.login === left_right_right_right_left[0].hand_left)
let left_right_right_right_left_right = left_right_right_right_left.length > 0 && allUsers.filter((item)=> item.login === left_right_right_right_left[0].hand_right)
//16
let left_right_right_right_right_left = left_right_right_right_right.length > 0 && allUsers.filter((item)=> item.login === left_right_right_right_right[0].hand_left)
let left_right_right_right_right_right = left_right_right_right_right.length > 0 && allUsers.filter((item)=> item.login === left_right_right_right_right[0].hand_right)
// 17
let right_left_left_left_left_left = right_left_left_left_left.length > 0 && allUsers.filter((item)=> item.login === right_left_left_left_left[0].hand_left)
let right_left_left_left_left_right = right_left_left_left_left.length > 0 && allUsers.filter((item)=> item.login === right_left_left_left_left[0].hand_right)
//18
let right_left_left_left_right_left = right_left_left_left_right.length > 0 && allUsers.filter((item)=> item.login === right_left_left_left_right[0].hand_left)
let right_left_left_left_right_right = right_left_left_left_right.length > 0 && allUsers.filter((item)=> item.login === right_left_left_left_right[0].hand_right)
//19
  let right_left_left_right_left_left = right_left_left_right_left.length > 0 && allUsers.filter((item)=> item.login === right_left_left_right_left[0].hand_left)
  let right_left_left_right_left_right = right_left_left_right_left.length > 0 && allUsers.filter((item)=> item.login === right_left_left_right_left[0].hand_right)
//20
  let right_left_left_right_right_left = right_left_left_right_right.length > 0 && allUsers.filter((item)=> item.login === right_left_left_right_right[0].hand_left)
  let right_left_left_right_right_right = right_left_left_right_right.length > 0 && allUsers.filter((item)=> item.login === right_left_left_right_right[0].hand_right)
//21
  let right_left_right_left_left_left = right_left_right_left_left.length > 0 && allUsers.filter((item)=> item.login === right_left_right_left_left[0].hand_left)
  let right_left_right_left_left_right = right_left_right_left_left.length > 0 && allUsers.filter((item)=> item.login === right_left_right_left_left[0].hand_right)
//22
  let right_left_right_left_right_left = right_left_right_left_right.length > 0 && allUsers.filter((item)=> item.login === right_left_right_left_right[0].hand_right)
  let right_left_right_left_right_right = right_left_right_left_right.length > 0 && allUsers.filter((item)=> item.login === right_left_right_left_right[0].hand_right)
//23
  let right_left_right_right_left_left = right_left_right_right_left.length > 0 && allUsers.filter((item)=> item.login === right_left_right_right_left[0].hand_left)
  let right_left_right_right_left_right = right_left_right_right_left.length > 0 && allUsers.filter((item)=> item.login === right_left_right_right_left[0].hand_right)
//24
let right_left_right_right_right_left = right_left_right_right_right.length > 0 && allUsers.filter((item)=> item.login === right_left_right_right_right[0].hand_left)
let right_left_right_right_right_right = right_left_right_right_right.length > 0 && allUsers.filter((item)=> item.login === right_left_right_right_right[0].hand_right)
//25
  let right_right_left_left_left_left = right_right_left_left_left.length > 0 && allUsers.filter((item)=> item.login === right_right_left_left_left[0].hand_left)
  let right_right_left_left_left_right = right_right_left_left_left.length > 0 && allUsers.filter((item)=> item.login === right_right_left_left_left[0].hand_right)
//26
  let right_right_left_left_right_left = right_right_left_left_right.length > 0 && allUsers.filter((item)=> item.login === right_right_left_left_right[0].hand_left)
  let right_right_left_left_right_right = right_right_left_left_right.length > 0 && allUsers.filter((item)=> item.login === right_right_left_left_right[0].hand_right)
//27
  let right_right_left_right_left_left = right_right_left_right_left.length > 0 && allUsers.filter((item)=> item.login === right_right_left_right_left[0].hand_left)
  let right_right_left_right_left_right = right_right_left_right_left.length > 0 && allUsers.filter((item)=> item.login === right_right_left_right_left[0].hand_right)
//28
  let right_right_left_right_right_left = right_right_left_right_right.length > 0 && allUsers.filter((item)=> item.login === right_right_left_right_right[0].hand_left)
  let right_right_left_right_right_right = right_right_left_right_right.length > 0 && allUsers.filter((item)=> item.login === right_right_left_right_right[0].hand_right)
//29
  let right_right_right_left_left_left = right_right_right_left_left.length > 0 && allUsers.filter((item)=> item.login === right_right_right_left_left[0].hand_left)
  let right_right_right_left_left_right = right_right_right_left_left.length > 0 && allUsers.filter((item)=> item.login === right_right_right_left_left[0].hand_right)
//30
  let right_right_right_left_right_left = right_right_right_left_right.length > 0 && allUsers.filter((item)=> item.login === right_right_right_left_right[0].hand_left)
  let right_right_right_left_right_right = right_right_right_left_right.length > 0 && allUsers.filter((item)=> item.login === right_right_right_left_right[0].hand_right)
//31
let right_right_right_right_left_left = right_right_right_right_left.length > 0 && allUsers.filter((item)=> item.login === right_right_right_right_left[0].hand_left)
let right_right_right_right_left_right = right_right_right_right_left.length > 0 && allUsers.filter((item)=> item.login === right_right_right_right_left[0].hand_right)
//32
let right_right_right_right_right_left = right_right_right_right_right.length > 0 && allUsers.filter((item)=> item.login === right_right_right_right_right[0].hand_left)
let right_right_right_right_right_right = right_right_right_right_right.length > 0 && allUsers.filter((item)=> item.login === right_right_right_right_right[0].hand_right)




  return(   
  <div className="stages">

    <div className="first center">
      <span className={user.active ? "active_user" :""}>{user.active ? "siz faolsiz" :""}</span>
    </div>
    <div className="second center">
      <span id={left.length >0 ? left[0].login : ""} className={left.length > 0 ? "active_user" :""}></span>
      <span id={right.length >0 ? right[0].login : ""} className={right.length > 0 ? "active_user" :""}></span>
    </div>
    <div className="third center">
      <span id={left_left.length > 0 ? left_left[0].login :""} className={left_left.length > 0 ? "active_user" :""}></span>
      <span id={left_right.length > 0 ? left_right[0].login :""} className={left_right.length > 0 ? "active_user" :""}></span>
      <span id={right_left.length > 0 ?right_left[0].login  :""} className={right_left.length > 0 ? "active_user" :""}></span>
      <span id={right_right.length > 0 ? right_right[0].login :""} className={right_right.length > 0 ? "active_user" :""}></span>
      
    </div>
    <div className="fourth center">
      <span  className={left_left_left.length >0 ? "active_user":""}></span>
      <span  className={left_left_right.length >0 ? "active_user":""}></span>
      <span  className={left_right_left.length >0 ? "active_user":""}></span>
      <span  className={left_right_right.length >0 ? "active_user":""}></span>
      <span  className={right_left_left.length >0 ? "active_user":""}></span>
      <span  className={right_left_right.length >0 ? "active_user":""}></span>
      <span  className={right_right_left.length >0 ? "active_user":""}></span>
      <span  className={right_right_right.length >0 ? "active_user":""}></span>
    </div>
    <div className="fifth center">
      <span className={left_left_left_left.length > 0 ? "active_user":""}></span>
      <span className={left_left_left_right.length > 0 ? "active_user":""}></span>
      <span className={left_left_right_left.length > 0 ? "active_user":""}></span>
      <span className={left_left_right_right.length > 0 ? "active_user":""}></span>
      <span className={left_right_left_left.length > 0 ? "active_user":""}></span>
      <span className={left_right_left_right.length > 0 ? "active_user":""}></span>
      <span className={left_right_right_left.length > 0 ? "active_user":""}></span>
      <span className={left_right_right_right.length > 0 ? "active_user":""}></span>
      <span className={right_left_left_left.length > 0 ? "active_user":""}></span>
      <span className={right_left_left_right.length > 0 ? "active_user":""}></span>
      <span className={right_left_right_left.length > 0 ? "active_user":""}></span>
      <span className={right_left_right_right.length > 0 ? "active_user":""}></span>
      <span className={right_right_left_left.length > 0 ? "active_user":""}></span>
      <span className={right_right_left_right.length > 0 ? "active_user":""}></span>
      <span className={right_right_right_left.length > 0 ? "active_user":""}></span>
      <span className={right_right_right_right.length > 0 ? "active_user":""}></span>
    </div>
    <div className="sixth center">
      <span className={left_left_left_left_left.length > 0 ? "active_user":""}></span>
      <span className={left_left_left_left_right.length > 0 ? "active_user":""}></span>
      <span className={left_left_left_right_left.length > 0 ? "active_user":""}></span>
      <span className={left_left_left_right_right.length > 0 ? "active_user":""}></span>
      <span className={left_left_right_left_left.length > 0 ? "active_user":""}></span>
      <span className={left_left_right_left_right.length > 0 ? "active_user":""}></span>
      <span className={left_left_right_right_left.length > 0 ? "active_user":""}></span>
      <span className={left_left_right_right_right.length > 0 ? "active_user":""}></span>
      <span className={left_right_left_left_left.length > 0 ? "active_user":""}></span>
      <span className={left_right_left_left_right.length > 0 ? "active_user":""}></span>
      <span className={left_right_left_right_left.length > 0 ? "active_user":""}></span>
      <span className={left_right_left_right_right.length > 0 ? "active_user":""}></span>
      <span className={left_right_right_left_left.length > 0 ? "active_user":""}></span>
      <span className={left_right_right_left_right.length > 0 ? "active_user":""}></span>
      <span className={left_right_right_right_left.length > 0 ? "active_user":""}></span>
      <span className={left_right_right_right_right.length > 0 ? "active_user":""}></span>
      <span className={right_left_left_left_left.length > 0 ? "active_user":""}></span>
      <span className={right_left_left_left_right.length > 0 ? "active_user":""}></span>
      <span className={right_left_left_right_left.length > 0 ? "active_user":""}></span>
      <span className={right_left_left_right_right.length > 0 ? "active_user":""}></span>
      <span className={right_left_right_left_left.length > 0 ? "active_user":""}></span>
      <span className={right_left_right_left_right.length > 0 ? "active_user":""}></span>
      <span className={right_left_right_right_left.length > 0 ? "active_user":""}></span>
      <span className={right_left_right_right_right.length > 0 ? "active_user":""}></span>
      <span className={right_right_left_left_left.length > 0 ? "active_user":""}></span>
      <span className={right_right_left_left_right.length > 0 ? "active_user":""}></span>
      <span className={right_right_left_right_left.length > 0 ? "active_user":""}></span>
      <span className={right_right_left_right_right.length > 0 ? "active_user":""}></span>
      <span className={right_right_right_left_left.length > 0 ? "active_user":""}></span>
      <span className={right_right_right_left_right.length > 0 ? "active_user":""}></span>
      <span className={right_right_right_right_left.length > 0 ? "active_user":""}></span>
      <span className={right_right_right_right_right.length > 0 ? "active_user":""}></span>
    </div>

    <div className="seventh center">
      <span  className={left_left_left_left_left_left.length > 0 ? "active_user" :""}></span>
      <span  className={left_left_left_left_left_right.length > 0 ? "active_user" :""}></span>
      <span  className={left_left_left_left_right_left.length > 0 ? "active_user" :""}></span>
      <span  className={left_left_left_left_right_right.length > 0 ? "active_user" :""}></span>
      <span  className={left_left_left_right_left_left.length > 0 ? "active_user" :""}></span>
      <span  className={left_left_left_right_left_right.length > 0 ? "active_user" :""}></span>
      <span  className={left_left_left_right_right_left.length > 0 ? "active_user" :""}></span>
      <span  className={left_left_left_right_right_right.length > 0 ? "active_user" :""}></span>
      <span  className={left_left_right_left_left_left.length > 0 ? "active_user" :""}></span>
      <span  className={left_left_right_left_left_right.length > 0 ? "active_user" :""}></span>
      <span  className={left_left_right_left_right_left.length > 0 ? "active_user" :""}></span>
      <span  className={left_left_right_left_right_right.length > 0 ? "active_user" :""}></span>
      <span  className={left_left_right_right_left_left.length > 0 ? "active_user" :""}></span>
      <span  className={left_left_right_right_left_right.length > 0 ? "active_user" :""}></span>
      <span  className={left_left_right_right_right_left.length > 0 ? "active_user" :""}></span>
      <span  className={left_left_right_right_right_right.length > 0 ? "active_user" :""}></span>
      <span  className={left_right_left_left_left_left.length > 0 ? "active_user" :""}></span>
      <span  className={left_right_left_left_left_right.length > 0 ? "active_user" :""}></span>
      <span  className={left_right_left_left_right_left.length > 0 ? "active_user" :""}></span>
      <span  className={left_right_left_left_right_right.length > 0 ? "active_user" :""}></span>
      <span  className={left_right_left_right_left_left.length > 0 ? "active_user" :""}></span>
      <span  className={left_right_left_right_left_right.length > 0 ? "active_user" :""}></span>
      <span  className={left_right_left_right_right_left.length > 0 ? "active_user" :""}></span>
      <span  className={left_right_left_right_right_right.length > 0 ? "active_user" :""}></span>
      <span  className={left_right_right_left_left_left.length > 0 ? "active_user" :""}></span>
      <span  className={left_right_right_left_left_right.length > 0 ? "active_user" :""}></span>
      <span  className={left_right_right_left_right_left.length > 0 ? "active_user" :""}></span>
      <span  className={left_right_right_left_right_right.length > 0 ? "active_user" :""}></span>
      <span  className={left_right_right_right_left_left.length > 0 ? "active_user" :""}></span>
      <span  className={left_right_right_right_left_right.length > 0 ? "active_user" :""}></span>
      <span  className={left_right_right_right_right_left.length > 0 ? "active_user" :""}></span>
      <span  className={left_right_right_right_right_right.length > 0 ? "active_user" :""}></span>
      <span  className={right_left_left_left_left_left.length > 0 ? "active_user" :""}></span>
      <span  className={right_left_left_left_left_right.length > 0 ? "active_user" :""}></span>
      <span  className={right_left_left_left_right_left.length > 0 ? "active_user" :""}></span>
      <span  className={right_left_left_left_right_right.length > 0 ? "active_user" :""}></span>
      <span  className={right_left_left_right_left_left.length > 0 ? "active_user" :""}></span>
      <span  className={right_left_left_right_left_right.length > 0 ? "active_user" :""}></span>
      <span  className={right_left_left_right_right_left.length > 0 ? "active_user" :""}></span>
      <span  className={right_left_left_right_right_right.length > 0 ? "active_user" :""}></span>
      <span  className={right_left_right_left_left_left.length > 0 ? "active_user" :""}></span>
      <span  className={right_left_right_left_left_right.length > 0 ? "active_user" :""}></span>
      <span  className={right_left_right_left_right_left.length > 0 ? "active_user" :""}></span>
      <span  className={right_left_right_left_right_right.length > 0 ? "active_user" :""}></span>
      <span  className={right_left_right_right_left_left.length > 0 ? "active_user" :""}></span>
      <span  className={right_left_right_right_left_right.length > 0 ? "active_user" :""}></span>
      <span  className={right_left_right_right_right_left.length > 0 ? "active_user" :""}></span>
      <span  className={right_left_right_right_right_right.length > 0 ? "active_user" :""}></span>
      <span  className={right_right_left_left_left_left.length > 0 ? "active_user" :""}></span>
      <span  className={right_right_left_left_left_right.length > 0 ? "active_user" :""}></span>
      <span  className={right_right_left_left_right_left.length > 0 ? "active_user" :""}></span>
      <span  className={right_right_left_left_right_right.length > 0 ? "active_user" :""}></span>
      <span  className={right_right_left_right_left_left.length > 0 ? "active_user" :""}></span>
      <span  className={right_right_left_right_left_right.length > 0 ? "active_user" :""}></span>
      <span  className={right_right_left_right_right_left.length > 0 ? "active_user" :""}></span>
      <span  className={right_right_left_right_right_right.length > 0 ? "active_user" :""}></span>
      <span  className={right_right_right_left_left_left.length > 0 ? "active_user" :""}></span>
      <span  className={right_right_right_left_left_right.length > 0 ? "active_user" :""}></span>
      <span  className={right_right_right_left_right_left.length > 0 ? "active_user" :""}></span>
      <span  className={right_right_right_left_right_right.length > 0 ? "active_user" :""}></span>
      <span  className={right_right_right_right_left_left.length > 0 ? "active_user" :""}></span>
      <span  className={right_right_right_right_left_right.length > 0 ? "active_user" :""}></span>
      <span  className={right_right_right_right_right_left.length > 0 ? "active_user" :""}></span>
      <span  className={right_right_right_right_right_right.length > 0 ? "active_user" :""}></span>
    </div>







    
    
    
   </div>
   )
}

export default Stages;
