import { useState } from "react"

const Form = () => {
    const {email,setEmail}=useState('')
    const {name,setName}=useState()

  return (
    <div className="container">
        <h1>My Form</h1>
        <form >
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
  )
}
export default Form