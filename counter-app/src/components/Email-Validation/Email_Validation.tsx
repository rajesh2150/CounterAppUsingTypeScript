import React, { useState } from 'react';

export const ValidateEmail=(email:string)=>{
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if(regex.test(email)){
        return true
    }
    else{
        return false
    }
}
const Email_Validation = () => {
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [error,setError] = useState("")
    const [valid,setValid] = useState("")

    const handleReset=(e:React.FormEvent)=>{
        e.preventDefault()
        setEmail("")
        setError("")
        setPassword("")
        setValid("")

    }
    const handleSubmit=(e:React.FormEvent,email:string)=>{
        e.preventDefault()
        if(ValidateEmail(email)){
            setValid("valid details")
            console.log("valid user",password,email)
            setEmail("")
            setError("")
            setPassword("")
        }
        else{
            setValid("")
            setError("invalid details")
            alert("invalid details")
            console.log("non-valid")
        }

    }
  return (
    <div>
        <h2>Login Form</h2>
        {error && <p style={{color:"red",margin:0}}>{error}</p>}
        {valid && <p style={{color:"green",margin:0}}>{valid}</p>}
      <input type="text" placeholder='Enter Name' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button data-testid="submit" onClick={(e)=>handleSubmit(e,email)}>submit</button>
      <button data-testid="reset" onClick={(e)=>handleReset(e)}>Reset</button>
    </div>
  )
}

export default Email_Validation
