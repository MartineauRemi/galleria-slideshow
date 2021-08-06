import React, {useState} from 'react'
import data from "../data/data.json"

export default function PaintingDetails({paintingIndex, previousPainting, nextPainting, paintingsNb}) {    
    const painting = data[paintingIndex]
    const [modalActive, setModalActive] = useState(false)

    const paintingBaseURL = '/assets/'
    const paintingEndURL = '/gallery.jpg'
    const paintingCompleteURL = paintingBaseURL + painting.slug + paintingEndURL
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
                        <img src={paintingCompleteURL} alt=""/>
                    </div>
                </section>
            )
            : null}
            <main>
                <h1>{painting.name}</h1>
                <h3>{painting.artist.name}</h3>
                <aside>
                    <div className="">
                        <button
                            className="view-image-btn"
                            onClick={() => setModalActive(true)}>
                            <img src={viewImgURL} alt="view painting button"/>
                            <span>view image</span>
                        </button>
                    </div>
                </aside>
                <article>
                    <h1>{painting.year}</h1>
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
