import React from 'react'
import style from "./search.module.css"

function Search({ setSearch }) {
  return (
    <div className={style.searchdiv}>
          <input onChange={(e) => {
              setSearch(e.target.value)
      }} className={style.input} type="text" placeholder="Enter Name" />
    </div>
  );
}

export default Search
