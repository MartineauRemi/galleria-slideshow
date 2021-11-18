import './styles/styles.scss'
import { data } from './data/data'
import {useState} from 'react'
import Header from './layout/Header'
import Gallery from "./layout/Gallery"
import PaintingDetails from './pages/PaintingDetails'

const PAINTINGS_NB = data.length

function App() {
  const [slideshowActive, setSlideshowActive] = useState(false)
  
  //The painting displayed in the slideshow
  const [currentPaintingIndex, setCurrentPaintingIndex] = useState(0)

  //enable 'previous' and 'next' buttons
  //in the 'PaintingsDetail' component to enable a loop
  const nextPainting = () => setCurrentPaintingIndex((currentPaintingIndex + 1) % PAINTINGS_NB)
  const previousPainting = () => setCurrentPaintingIndex(currentPaintingIndex === 0 ? 0 : currentPaintingIndex - 1)


  return (
    <div className="App">
      <Header slideshowActive={slideshowActive} setSlideshowActive={setSlideshowActive}/>
      {slideshowActive
      ? <PaintingDetails
          paintingIndex={currentPaintingIndex}
          previousPainting={previousPainting}
          nextPainting={nextPainting}
          paintingsNb={PAINTINGS_NB} />

      : <Gallery
          setSlideshowActive={setSlideshowActive}
          setCurrentPaintingIndex={setCurrentPaintingIndex}
          previousPainting={previousPainting}
          nextPainting={nextPainting}/>}
    </div>
  );
}

export default App;