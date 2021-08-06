import React from 'react'

export default function Thumbnail({data,index, setSlideshowActive, setCurrentPainting}) {
    const imgBaseURL = '/assets/'
    const imgEndURL = '/thumbnail.jpg'
    const imgCompleteURL = imgBaseURL + data.slug + imgEndURL

    function onClickThumbnail(){
        setSlideshowActive(true)
        setCurrentPainting(index)
    }

    return (
        <button
            className="thumbnail"
            onClick={onClickThumbnail}>
                <figcaption>
                    <h2>{data.name}</h2>
                    <h3>{data.artist.name}</h3>
                </figcaption>
                <img src={imgCompleteURL} alt={data.name} />
        </button>
    )
}
