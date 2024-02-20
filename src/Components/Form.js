import axios from "axios"
import { useState } from "react"

const Form = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
const handleSubmit=async (e)=>{
  e.preventDefault()
  const data={name,email}

  try {
    const response = await axios.post('http://localhost:4000/',data)
    alert(response.data+" Inserted successfully");
  } catch (error) {
    console.log(error);
  }
}
  return (
    <div className="container">
      <form onSubmit={handleSubmit} id="form">
      <h1>My Form</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}
export default Form