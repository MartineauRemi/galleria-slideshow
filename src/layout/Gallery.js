import React from 'react'
import Thumbnail from '../components/Thumbnail'

export default function Gallery({data}) {
    return (
        <section className="gallery">
            {data.map(thumbnail => 
                <Thumbnail data={thumbnail}/>
            )}
        </section>
    )
}
