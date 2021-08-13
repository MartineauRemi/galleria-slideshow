import React, {useState} from 'react'
import data from "../data/data.json"
import { zoomIn, zoomOut } from 'react-animations'
import styled, { keyframes } from 'styled-components'

export default function PaintingDetails({paintingIndex, previousPainting, nextPainting, paintingsNb}) {    
    const painting = data[paintingIndex]
    const [modalActive, setModalActive] = useState(false)
    const [modalIsClosing, setModalisClosing] = useState(false)

    const viewImgURL = "/assets/shared/icon-view-image.svg"
    const previousBtnImgURL = '/assets/shared/icon-back-button.svg'
    const nextBtnImgURL = '/assets/shared/icon-next-button.svg'

    const zoomAnim = keyframes`${modalIsClosing? zoomOut : zoomIn}`
    const Modal = styled.section`
        img{
            animation: .3s ${zoomAnim};
        }
    `

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
                <Modal className={`painting-details__modal ${modalIsClosing? 'painting-details__modal--is-closing' : ''}`}>
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
            <main>
                <aside>
                    <div className="painting-details__hero-img-container">
                        <picture>
                            <source media="(min-width: 768px)" src={painting.images.hero.large}/>
                            <img src={painting.images.hero.small} alt=""/>
                        </picture>
                        <button
                            className="view-image-btn"
                            onClick={() => setModalActive(true)}>
                            <img src={viewImgURL} alt="view painting button"/>
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
            </main>
            
            
            <footer>
                <div className="painting-details__main-infos">
                    <strong>{painting.name}</strong>
                    <span>{painting.artist.name}</span>
                </div>

                <div className="painting-details__ctrls">
                    <button
                        className="painting-details__previous-painting-btn previous-painting-btn"
                        onClick={previousPainting}
                        disabled = {paintingIndex === 0}>
                            <img src={previousBtnImgURL} alt="previous painting" />
                    </button>
                    <button
                        className="next-painting-btn"
                        onClick={nextPainting}
                        disabled={paintingIndex === paintingsNb - 1}>
                            <img src={nextBtnImgURL} alt="next painting"/> 
                    </button>
                </div>
            </footer>
        </div>
    )
}