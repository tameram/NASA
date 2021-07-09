
import React, { useState } from "react"
function SearchBar(props) {
 // your code here

 const changeSearch = (e) => props.setinputSearch(e.target.value)
 return (
   <div >
    <input type="text" onChange={changeSearch} value={props.inputSearch}></input>
    <button>sda</button>
   </div>
 )
}
export default SearchBar