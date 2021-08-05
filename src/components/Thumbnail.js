import React from 'react'
import {Link} from "react-router-dom"

export default function Thumbnail({data}) {

    //get rid of the spaces and uppercase letters
    //so it can be used for the url
    const formatedName = data.name.replaceAll(' ', '-').toLowerCase()

    return (
        <Link
            className="thumbnail"
            to={`/galleria-slideshow/paintings/${formatedName}`}>
                <figcaption>
                    <h2>{data.name}</h2>
                    <h3>{data.artist.name}</h3>
                </figcaption>
        </Link>
    )
}
