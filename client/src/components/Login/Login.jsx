import axios from 'axios'
import React, { useState } from 'react'
import style from "./login.module.css"

function Login() {
    const [formData, setFormData] = useState({
        name: "",
        password:""
})

    const [user,setUser]=useState("")
    
    const handleChange = (e) => {
        let {name,value}=e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit =async (e) => {
        e.preventDefault();
        let { data } = await axios.post("http://localhost:4040/user/single", formData);
        setUser(data)

        if (data == null) {
            alert("wrong Username")
        }
       else if (data.password !== formData.password) {
            alert("Wrong Password")
        } else {
            localStorage.setItem("albumname",formData.name)
        }

    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Enter Name"
          />
          <inpu
            onChange={handleChange}
            t
            type="text"
            name="password"
            placeholder="Enter Password"
          />
          <button type='submit' >Login</button>
        </form>
      </div>
    );
}

export default Login
