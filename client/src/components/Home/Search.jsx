import React from 'react'
import style from "./search.module.css"

function Search() {
    return (
        <div className={style.searchdiv} >
            <input className={style.input} type="text" placeholder='Enter Name'  />
        </div>
    )
}

export default Search
