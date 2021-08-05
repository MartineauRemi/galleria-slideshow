import React, {useEffect} from 'react'
import logo from "../assets/shared/logo.svg"

export default function Header({slideshowActive, setSlideshowActive}) {
    function onClickBtn(){
        setSlideshowActive(!slideshowActive)
    }

    useEffect(() => {

    }, [slideshowActive])
    
    return (
        <header className="header">
            <img src={logo} alt="galleria logo" width="170px" height="48px"/>
            <button
                aria-label={`${slideshowActive? 'close' : 'open'} menu`}
                onClick={onClickBtn}>
                {slideshowActive? 'stop' : 'start'} slideshow
            </button>
        </header>
    )
}
