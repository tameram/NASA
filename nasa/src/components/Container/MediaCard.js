
import React, { useState, useEffect  } from "react"
function MediaCard(props) {
    // your code here


    // console.log(props.apod)
    return (
        <div >
            <h3>{props.title}</h3>
            <img width="500" height="600" src={props.image}></img>
            <div>{props.displayDescrption?<h5>{props.explanation}</h5>:<button>Like</button>}</div>
        </div>

    )
}
export default MediaCard