import React, { useState } from 'react'
import { login } from './store'
import { useDispatch } from 'react-redux';
function Login() {
    const [name,setName] = useState('')
    const [pass,setPass] = useState('')

    const dispatch = useDispatch();
    const handleLogin =()=>{
        dispatch(login())
        console.log(name,pass)
    }
  return (
    <div>Login
        <input type='text' placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} />

        <input type='text' placeholder='passowrd'  value={pass} onChange={(e)=>setPass(e.target.value)}/>

        <button onClick={handleLogin}>update</button>
    </div>
  )
}

export default Login