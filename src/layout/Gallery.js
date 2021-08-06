import React from 'react'
import Thumbnail from '../components/Thumbnail'
import data from "../data/data.json"

export default function Gallery({setSlideshowActive, previousPainting, nextPainting, setCurrentPaintingIndex}) {
    
    return (
        <section className="gallery">
            {data.map((thumbnail, index) => 
                <Thumbnail
                    key={index}
                    index={index}
                    data={thumbnail}
                    setSlideshowActive={setSlideshowActive}
                    setCurrentPainting={setCurrentPaintingIndex}
                    previousPainting={previousPainting}
                    nextPainting={nextPainting}/>
            )}
        </section>
    )
}
