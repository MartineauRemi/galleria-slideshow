import React from 'react'
import logo from "../assets/shared/logo.svg"

export default function Header({slideshowActive, setSlideshowActive}) {
    function onClickBtn(){
        setSlideshowActive(!slideshowActive)
    }

    return (
        <header className="header">
            <div className="header__content">
                <img src={logo} alt="Welcome to Galleria" width="170px" height="48px"/>
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
