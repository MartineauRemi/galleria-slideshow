import React, {useState} from 'react'
import {data} from "../data/data"
import { fadeIn, zoomIn, zoomOut } from 'react-animations'
import styled, { keyframes } from 'styled-components'
import ArrowButton from '../components/ArrowButton'
import iconViewImage from "../assets/shared/icon-view-image.svg"

export default function PaintingDetails({paintingIndex, previousPainting, nextPainting, paintingsNb}) {    
    const painting = data[paintingIndex]
    const slideshowLength = data.length

    const [modalActive, setModalActive] = useState(false)
    const [modalIsClosing, setModalisClosing] = useState(false)

    //keyframes animations
    const fadeInAnim = keyframes`${fadeIn}`
    const modalZoomAnim = keyframes`${modalIsClosing? zoomOut : zoomIn}`
    
    //applying animations to components
    const Modal = styled.section`
        img{
            animation: .3s ${modalZoomAnim};
        }
    `

    const Main = styled.main`
        animation: .3s ${fadeInAnim};
    `

    const Footer = styled.footer`
        &::after{
            content: "";
            width: ${((paintingIndex + 1) * 100) / slideshowLength}%;
            height: 2px;
            background: #000;
            position: absolute;
            top: -1.5px;
            left: 0;
            transition: all 0.3s ease-in-out;
        }
    `

    //events functions
    function onClickCloseModalbtn(){
        setModalisClosing(true)
        setTimeout(() => {
            setModalisClosing(false)
            setModalActive(false)
        }, 200)
    }

    return (
        <div className="painting-details">
            {modalActive
            ?(
                <Modal className={`painting-details__modal`}>
                    <div className="painting-details__modal-content">
                        <button
                            className="close-btn"
                            onClick={() => onClickCloseModalbtn()}
                            >
                            close
                        </button>
                        <img
                            src={painting.images.gallery}
                            alt={painting.name}/>
                    </div>
                </Modal>
            )
            : null}
            <Main>
                <aside>
                    <div className="painting-details__hero-img-container">
                        <picture>
                            <source media="(min-width: 768px)" src={painting.images.hero.large}/>
                            <img src={painting.images.hero.small} alt=""/>
                        </picture>
                        <button
                            className="view-image-btn"
                            onClick={() => setModalActive(true)}>
                            <img src={iconViewImage} alt="view painting button"/>
                            <span>view image</span>
                        </button>
                    </div>

                    <div className="container">
                        <figcaption>
                            <h2>{painting.name}</h2>
                            <h3>{painting.artist.name}</h3>
                        </figcaption>
                        <img
                                className="painting-details__artist-img"
                                src={painting.artist.image}
                                alt={painting.artist.name + ' portrait'} />
                    </div>
                </aside>

                <article>
                    <time>{painting.year}</time>
                    <p>{painting.description}</p>
                    <a
                        className="link-btn"
                        href={painting.source}
                        target="_blank"
                        rel="noreferrer">
                            go to source
                    </a>
                </article>
            </Main>
            
            
            <Footer>
                <div className="painting-details__main-infos">
                    <strong>{painting.name}</strong>
                    <span>{painting.artist.name}</span>
                </div>

                <div className="painting-details__ctrls">
                    <ArrowButton
                        className="painting-details__previous-painting-btn previous-painting-btn"
                        onClick={previousPainting}
                        disabled = {paintingIndex === 0}>
                    </ArrowButton>
                    <ArrowButton
                        className="next-painting-btn"
                        onClick={nextPainting}
                        disabled={paintingIndex === paintingsNb - 1}>
                    </ArrowButton>
                </div>
            </Footer>
        </div>
    )
}
