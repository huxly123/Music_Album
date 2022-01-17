import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import Search from './Search'
import axios from "axios"
import {Link} from "react-router-dom"

function Home() {

    const [data, setData] = useState([])
    const [albumCount, setAlbumCount] = useState(0)
  const [page, setPge] = useState(1)
  const [search, setSearch] = useState("")
  const [loadind, setLoading] = useState(false)
  const [change,setchange]=useState(true)
  ////   normal getdata
  const getData = async () => {
      setLoading(true)
    const { data } = await axios.get(`http://localhost:4040/album?page=${page}&limit=2`);
    setLoading(false)
        setData(data.album)
        setAlbumCount(data.albumTotalCount/2);
    }
////   input getdata
  
  const detdatainp =async () => {
    setLoading(true)
    console.log(search);
    const { data } = await axios.get(`http://localhost:4040/user/search/${search}`);
    console.log(data);
    setLoading(false)
    setData(data)
  }
  
  
    useEffect(() => {
        getData()
    }, [page])

    const handleChangeNext = () => {
        setPge(prev=>prev+1)
    }
     const handleChangePrev = () => {
       setPge((prev) => prev - 1);
     };
    
    return loadind ? (
      <h1>Loading.........</h1>
    ) : (
      <div>
        <Link to="/login">
          <button className={style.loginbtn}>Login</button>
        </Link>
        <Search
          setSearch={setSearch}
          detdatainp={detdatainp}
          setchange={setchange}
        />

        {change
          ? data.map((e) => (
              <div className={style.carddiv} key={e["_id"]}>
                <div
                  style={{
                    display: "flex",
                    marginLeft: "15px",
                    marginTop: "20px",
                  }}
                >
                  <div style={{ width: "50px" }}>
                    <img className={style.logoimg} src={e.logo} />
                  </div>

                  <h2 className={style.author}>{e["author"]["name"]}</h2>
                </div>
                <Link to={`/album/${e._id}`}>
                  {" "}
                  <img className={style.cover_photo} src={e.cover_photo} />
                </Link>
                <h3>{e.name}</h3>
                <p>
                  <span style={{ color: "brown" }}>No.of songs: </span>
                  {e.songs.length}
                </p>
                <p>
                  <span style={{ color: "brown" }}>Songs Published:</span>{" "}
                  {e.songs.join(" | ")}
                </p>
                <p>
                  <span style={{ color: "brown" }}>Genre: </span>
                  {e.genre.join(" | ")}
                </p>
              </div>
            ))
          : data.map((e) => (
              <div className={style.carddiv} key={e["_id"]}>
                <div
                  style={{
                    display: "flex",
                    marginLeft: "15px",
                    marginTop: "20px",
                  }}
                >
                  <div style={{ width: "50px" }}>
                    <img className={style.logoimg} src={e?.album?.logo} />
                  </div>

                  <h2 className={style.author}>{e["name"]}</h2>
                </div>
                <Link to={`/album/${e?.album?._id}`}>
                  {" "}
                  <img
                    className={style.cover_photo}
                    src={e?.album?.cover_photo}
                  />
                </Link>
                <h3>{e?.album?.name}</h3>
                <p>
                  <span style={{ color: "brown" }}>No.of songs: </span>
                  {e?.album?.songs.length}
                </p>
                <p>
                  <span style={{ color: "brown" }}>Songs Published:</span>{" "}
                  {e?.album?.songs.join(" | ")}
                </p>
                <p>
                  <span style={{ color: "brown" }}>Genre: </span>
                  {e?.album?.genre.join(" | ")}
                </p>
              </div>
            ))}
        <button
          className={style.butt}
          disabled={page <= 1}
          onClick={handleChangePrev}
        >
          PREV
        </button>
        <button
          className={style.butt}
          disabled={page >= albumCount}
          onClick={handleChangeNext}
        >
          NEXT
        </button>
      </div>
    );
}

export default Home
