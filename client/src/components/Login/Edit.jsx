import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
function Edit() {
    const [Link, setLink] = useState("");
    const history=useHistory()
let albumid=localStorage.getItem("albumname")
    const handleClick = async() => {
        const { data } = await axios.patch(`http://localhost:4040/album/${albumid}`, { logo: Link })
        console.log(data);
        alert("Logo Chnaged")
        history.push("/")
}

    return (
        <div>
            <h1>Edit Profile Picture</h1>
            <input onChange={(e) => {
                setLink(e.target.value)
            }} type='text' placeholder='Enter Profile Link' />
            <button onClick={handleClick} >Change</button>
        </div>
    )
}

export default Edit
