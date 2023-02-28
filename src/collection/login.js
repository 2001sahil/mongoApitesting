import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
// try to see if update on github or not okk
const Login = () => {
  const history=useNavigate();
  async function Loginuser( data) {
    const url = `http://localhost:8000/temp/login`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    body: JSON.stringify(data)
    });
    const json =await response.json()
    console.log(json);
    // let sucess=json.sucess;
    if(json.sucess){
      localStorage.setItem("token",json.result)
      history("/")
      
  }
  }
  const change=(e)=>{
    setemail(e.target.value)

  }
  const Change=(e)=>{
    setpassword(e.target.value)

  }
  const Cchange=(e)=>{
    setname(e.target.value)

  }
  const loginuser=()=>{
    Loginuser({"Name":name,"password":password,"email":email,"PhoneNo":9368})
  }
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [name,setname]=useState("")
  return (
    <div className="container">
      <div className="mb-3 row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" value={name} onChange={Cchange} id="inputpassword"/>
    </div>
  </div>
      <div className="mb-3 row">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="text"  className="form-control" id="staticEmail"onChange={change} value={email}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" value={password} onChange={Change} id="inputPassword"/>
    </div>
  </div>
  <button className="btn btn-primary" onClick={loginuser}  >add note</button>


    </div>
  )
}

export default Login
