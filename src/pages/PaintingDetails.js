import React, {useState} from 'react'
import data from "../data/data.json"

export default function PaintingDetails({paintingIndex, previousPainting, nextPainting, paintingsNb}) {    
    const painting = data[paintingIndex]
    const [modalActive, setModalActive] = useState(false)

    const paintingBaseURL = '/assets/'
    const galleryEndURL = '/gallery.jpg'
    const heroLarge = '/hero-large.jpg'
    const heroSmall = '/hero-small.jpg'


    const galleryCompleteURL = paintingBaseURL + painting.slug + galleryEndURL
    const viewImgURL = "/assets/shared/icon-view-image.svg"
    const previousBtnImgURL = '/assets/shared/icon-back-button.svg'
    const nextBtnImgURL = '/assets/shared/icon-next-button.svg'

    return (
        <div className="painting-details">
            {modalActive
            ?(
                <section className="painting-details__modal">
                    <div className="painting-details__modal-content">
                        <button
                            className="close-btn"
                            onClick={() => setModalActive(false)}
                            >
                            close
                        </button>
                        <img src={galleryCompleteURL} alt=""/>
                    </div>
                </section>
            )
            : null}
            <main>
                <aside>
                    <div className="painting-details__hero-img-container">
                        <picture>
                            <source media="(min-width: 768px)" src={paintingBaseURL + painting.slug + heroLarge}/>
                            <img src={paintingBaseURL + painting.slug + heroSmall} alt=""/>
                        </picture>
                        <button
                            className="view-image-btn"
                            onClick={() => setModalActive(true)}>
                            <img src={viewImgURL} alt="view painting button"/>
                            <span>view image</span>
                        </button>
                        <figcaption>
                            <h2>{painting.name}</h2>
                            <h3>{painting.artist.name}</h3>
                        </figcaption>
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
