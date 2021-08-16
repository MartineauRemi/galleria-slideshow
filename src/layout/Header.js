import React from 'react'

export default function Header({slideshowActive, setSlideshowActive}) {
    const logoURL = "/assets/shared/logo.svg"
    
    function onClickBtn(){
        setSlideshowActive(!slideshowActive)
    }

    return (
        <header className="header">
            <div className="header__content">
                <img src={logoURL} alt="Welcome to Galleria" width="170px" height="48px"/>
                <button
                    className="toggle-slideshow"
                    aria-label={`${slideshowActive? 'close' : 'open'} menu`}
                    onClick={onClickBtn}>
                    {slideshowActive? 'stop' : 'start'} slideshow
                </button>
            </div>
        </header>
    )
}
