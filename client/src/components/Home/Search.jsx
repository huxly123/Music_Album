import React from 'react'
import style from "./search.module.css"

function Search({ setSearch, detdatainp, setchange }) {
  return (
    <div className={style.searchdiv}>
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className={style.input}
        type="text"
        placeholder="Enter Name"
      />
      <button
        onClick={() => {
          detdatainp();
          setchange(false)
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Search
