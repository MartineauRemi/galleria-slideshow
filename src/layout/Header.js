import React from 'react'

export default function Header({slideshowActive, setSlideshowActive}) {
    const logoURL = "/assets/shared/logo.svg"
    
    function onClickBtn(){
        setSlideshowActive(!slideshowActive)
    }

    return (
        <header className="header">
            <img src={logoURL} alt="galleria logo" width="170px" height="48px"/>
            <button
                aria-label={`${slideshowActive? 'close' : 'open'} menu`}
                onClick={onClickBtn}>
                {slideshowActive? 'stop' : 'start'} slideshow
            </button>
        </header>
    )
}
