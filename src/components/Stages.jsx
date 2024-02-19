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

//   const partnersOfUser = [left, right, left_left, left_right,right_left, right_right, left_left_left,left_left_right, left_right_left, left_right_right, right_left_left,right_left_right, right_right_left, right_right_right, left_left_left_left, left_left_left_right,left_left_right_left, left_left_right_right,left_right_left_left, left_right_left_right,left_right_right_left,left_right_right_right,right_left_left_left,right_left_left_right,right_left_right_left,right_left_right_right, right_right_left_left,right_right_left_right, right_right_right_left, right_right_right_right,left_left_left_left_left,left_left_left_left_right,left_left_left_right_left,left_left_left_right_right,left_left_right_left_left,left_left_right_left_right,left_left_right_right_left,left_left_right_right_right,left_right_left_left_left,left_right_left_left_right,left_right_left_right_left,left_right_left_right_right,left_right_right_left_left,left_right_right_left_right,left_right_right_right_left,left_right_right_right_right,right_left_left_left_left,right_left_left_left_right,right_left_left_right_left, right_left_left_right_right,right_left_right_left_left,right_left_right_left_right,right_left_right_right_left,right_left_right_right_right, right_right_left_left_left,right_right_left_left_right,  right_right_left_right_left, right_right_left_right_right,right_right_right_left_left, right_right_right_left_right, right_right_right_right_left,  right_right_right_right_right,  ]
// console.log(partnersOfUser);
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








    {/* <div className="first_stage">
      <div className="level_1">
        <div className="top">
          <span className={data.active ? "black":""}>Siz faolsiz</span>
        </div>
        <div className="bottom">
          <span className={data.hand_left !=="." ? "black":""}></span>
          <span className={data.hand_right !=="." ? "black":"" }></span>
        </div>
      </div>
      <div className="level_2">
      <div className="top">
          <span className={data.hand_left !=="." && data.hand_right !=="." ? "black":""}></span>
        </div>
        <div className="bottom">
         
          <span className={ left.length> 0 &&left[0].hand_left !=="." && left[0].hand_right !=="." ? "black" :""}></span>
           <span className={right.length >0 &&right[0].hand_left !=="." && right[0].hand_right !=="." ? "black" :""}></span>
        </div>
      </div>
      <div className="level_3">
      <div className="top">
         <span className={left.length > 0 && right.length>0 && left[0].hand_left !=="." && left[0].hand_right !=="." && right[0].hand_left !=="." && right[0].hand_right !=="." ? "black" :""}></span>
        </div>
        <div className="bottom">
           <span className={LEFT_sub_left.length > 0 && LEFT_sub_right.length > 0 &&LEFT_sub_left[0].hand_left !=="." && LEFT_sub_left[0].hand_right !=="." && LEFT_sub_right[0].hand_left !=="." &&  LEFT_sub_right[0].hand_right !=="." ? "black":""}></span>

           <span className={RIGHT_sub_left.length>0 && RIGHT_sub_right.length>0 &&RIGHT_sub_left[0].hand_left !=="." && RIGHT_sub_left[0].hand_right !=="." && RIGHT_sub_right[0].hand_left !=="." &&  RIGHT_sub_right[0].hand_right !=="." ? "black":""}></span>
        </div>
      </div>
    </div> */}
    
    
    
   </div>
   )
}

export default Stages;
