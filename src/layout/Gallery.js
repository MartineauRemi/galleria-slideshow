import React from 'react'
import Thumbnail from '../components/Thumbnail'
import data from "../data/data.json"
import Masonry from "react-masonry-css"

export default function Gallery({setSlideshowActive, previousPainting, nextPainting, setCurrentPaintingIndex}) {
    
    const breakpointColumnsObj = {
        default: 4,
        1440: 3,
        1200: 2,
        768: 1
      };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid__column"

            >
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
        </Masonry>
    )
}
