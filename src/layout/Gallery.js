import React, { useLayoutEffect } from 'react'
import Thumbnail from '../components/Thumbnail'
import {data} from "../data/data.js"
import Masonry from "react-masonry-css"

export default function Gallery({setSlideshowActive, previousPainting, nextPainting, setCurrentPaintingIndex}) {
    
    //used for the responsive design of the masonry gallery
    const breakpointColumnsObj = {
        default: 4,
        1440: 3,
        1200: 2,
        768: 1
      };

      //scroll to top when rerendering
      useLayoutEffect(() => {
        window.scrollTo(0, 0)
      });

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
