// This page is a template restaurant page. Depending on what link was clicked to get here, this will fill in the restaurant's name and all its info.

import { useState, useEffect } from "react"
import MiniMap from "./MiniMap.js"

function Restaurant() {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phoneNum, setPhoneNum] = useState("")
    const [hours, setHours] = useState("")
    const [website, setWebsite] = useState("")
    const [notes, setNotes] = useState("")
    const [center, setCenter] = useState([44.486130615466685, -73.2160679713857]) // This lat/long shouldn't show up anyways, but it's of the neighborhood center.

    // This next line of code is to get the restaurant id (which I need for the fetch to get data from the corresponding API) from the page's URL path. The URL path is /restaurant/restaurantID (for example, /restaurant/china-express-2) so I'm splitting it by slashes, then slicing to get the last part
    let restId = (window.location.pathname).split('/').slice(2)

    // Getting data
    useEffect( () => {
        fetch(`/api/${restId}`)
        .then(res => res.json())
        .then((data) => {
            setName(data.name)
            setAddress(data.address)
            setHours(data.hours)
            setWebsite(data.website)
            setPhoneNum(data.phoneNumber)
            setNotes(data.notes)
            setCenter([data.latitude, data.longitude])
            
        })
    }, [])
 
    return (
        <div id="restaurant">
        <h1>{name}</h1>
        <p><a href={website} target="_blank" class="single-link"><span className="category">Website</span></a></p>
        <p><span className="category">Address:</span> {address}</p>
        <p><span className="category">Hours:</span> {hours}</p>
        <p><span className="category">Phone Number:</span> {phoneNum}</p>
        <p><span className="category">Notes:</span> {notes}</p>
        <MiniMap center={center} marker={center} name={name}/>
        <p>
        <a href="/" className="single-link">Back to Home</a>
        </p>

        </div>
    )
}

export default Restaurant