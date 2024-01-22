import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/login.css'
function Login() {
  const[validLogin, setValidLogin]=useState(true)
  const[validPsw, setValidPsw]=useState(true)
  const[users, setUsers]=useState(true)

  let log = useRef()
  let pw = useRef()
  let navigate = useNavigate()

  useEffect(()=>{
    fetchUsers()
  },[])
  async function fetchUsers(){
    let fetchData =await fetch('https://uzimizniki.pythonanywhere.com/users')
    let json = await fetchData.json()
    setUsers(json)
  }
  function handleSubmit(e){
    e.preventDefault()
    let log_value = log.current.value
    let pw_value= pw.current.value
    
    let findedUserLogin = users.filter((item)=> item.login === log_value)
    let findedUserPassword = users.filter((item)=> item.password === pw_value)
    let matchLogin = findedUserLogin.length > 0
    let matchPassword  = findedUserPassword.length > 0
    if(matchLogin && matchPassword && findedUserLogin[0].userId === findedUserPassword[0].userId) {
      navigate(`/user/${findedUserLogin[0].cur_id}`)
      
    }else {
      navigate("/login")
      setValidLogin(matchLogin)
      setValidPsw(matchPassword)
    }

    // clearing inputs
    log.current.value = ''
    pw.current.value = ''

  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='loginForm'>
        <h1>Kirish</h1>
        <label htmlFor="login">Login</label> <br />
        <input ref={log} type="text" name="" id="login" placeholder='login'/>
        {!validLogin && <p className='errorLogin'>Incorrect Login</p>}
        <br />
        <label htmlFor="pw">Password</label> <br />
        <input ref={pw} type="password" name="" id="pw" placeholder='password' />
        {!validPsw && <p className='errorLogin'>Incorrect Password</p>}

        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default Login
