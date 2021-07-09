import React, { useState, useEffect } from "react"
import SearchBar from "./SearchBar";
import MediaCard from "./MediaCard";
import constes from "../../Constes";
import axios from 'axios'



function Search() {
  // your code here
  const [inputSearch, setinputSearch] = useState('')
  const [images, setImages] = useState([])

  useEffect(() => {
    if (inputSearch === "") {
      return
    }
    let URL = constes.SEARCH_API_PHONOTS + inputSearch
   
    const res = axios.get(URL)
    res.then(res => { 
      console.log(Object.values(res.data.collection.items));
      setImages(Object.values(res.data.collection.items))
    })

  }, [inputSearch])

  return (
    <div >
      <SearchBar inputSearch={inputSearch} setinputSearch={setinputSearch}></SearchBar>
     {images.map((i , index)=><MediaCard title ={i.data[0].title} image={i.links[0].href}></MediaCard>)}

    </div>
  )
}
export default Search