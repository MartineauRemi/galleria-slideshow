import React from 'react'
import { slideInLeft, slideInRight } from 'react-animations'
import styled, { keyframes } from 'styled-components'

export default function Header({slideshowActive, setSlideshowActive}) {
    const logoURL = "/assets/shared/logo.svg"
    
    function onClickBtn(){
        setSlideshowActive(!slideshowActive)
    }

    const rightSlideAnim = keyframes`${slideInRight}`
    const leftSlideAnim = keyframes`${slideInLeft}`

    const Logo = styled.img`
        animation: 1s ${leftSlideAnim};
    `

    const SlideshowBtn = styled.button`
        animation: 1s ${rightSlideAnim};
    `

    return (
        <header className="header">
            <Logo src={logoURL} alt="galleria logo" width="170px" height="48px"/>
            <SlideshowBtn
                className="toggle-slideshow"
                aria-label={`${slideshowActive? 'close' : 'open'} menu`}
                onClick={onClickBtn}>
                {slideshowActive? 'stop' : 'start'} slideshow
            </SlideshowBtn>
        </header>
    )
}
