import React, { useState, useEffect } from "react"
import MediaCard from "./MediaCard"
import axios from 'axios'
import constes from "../../Constes";

function Home() {
    // const [apod, setApod] = useState(1)
    const [apod, setApod] = useState([])


    useEffect(() => {

        // async function fetchMyAPI() {
        //     let response = await axios.get(constes.NASA_API_APOD)
        //     response = await response.json()
        //     setApod(response.data)
        //   }
        //   fetchMyAPI()
        const res = axios.get(constes.NASA_API_APOD)
        res.then(res => {
            console.log(res.data.title);
            setApod(res.data)
        })

    },[apod])

    return (
        <div >
            Home
            <MediaCard title={apod.title} explanation={apod.explanation} image={apod.hdurl} displayDescrption={true}></MediaCard>
        </div>
    )
}
export default Home