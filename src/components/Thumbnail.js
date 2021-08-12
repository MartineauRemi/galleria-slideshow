import React from 'react'
import { merge, slideInUp, fadeIn } from 'react-animations'
import styled, { keyframes } from 'styled-components'

export default function Thumbnail({data,index, setSlideshowActive, setCurrentPainting}) {
    const imgBaseURL = '/assets/'
    const imgEndURL = '/thumbnail.jpg'
    const imgCompleteURL = imgBaseURL + data.slug + imgEndURL

    function onClickThumbnail(){
        setSlideshowActive(true)
        setCurrentPainting(index)
    }

    
    const mergeAnim = merge(slideInUp, fadeIn)
    const fadeInAnimation = keyframes`${mergeAnim}`
    const Thumbnail = styled.button`
        animation: 1s ${fadeInAnimation};
    ` 

    return (
        <Thumbnail
            className="thumbnail"
            onClick={onClickThumbnail}>
                <figcaption>
                    <h2>{data.name}</h2>
                    <h3>{data.artist.name}</h3>
                </figcaption>
                <img src={imgCompleteURL} alt={data.name} />
        </Thumbnail>
    )
}
