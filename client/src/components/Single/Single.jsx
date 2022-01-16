import React, { useEffect, useState } from 'react'
import style from "./single.module.css"
import {useParams} from "react-router-dom"
import axios from 'axios'

function Single() {
const [user,setUser]=useState({})
    const { _id } = useParams()
    useEffect(async () => {
         const {data} = await axios.get(`http://localhost:4040/album/${_id}`);
         setUser(data);
    },[_id])
console.log(user?.author?.name);
    return (
      <div>
        {
          <div key={user._id}>
            <h1>Name: {user?.author?.name}</h1>
            <img style={{ height: "300px" }} src={user?.logo} />
            <h2>Album Name: {user?.name}</h2>
                    <img style={{ height: "300px" }} src={user?.cover_photo} />
                    <h2>Songs are: { user?.songs?.join(" | ")}</h2>
          </div>
        }
      </div>
    );
}

export default Single
