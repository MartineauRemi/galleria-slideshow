import './styles/styles.scss'
import data from './data/data.json'
import {useState} from 'react'
import Header from './layout/Header'
import Gallery from "./layout/Gallery"
import {BrowserRouter, Route} from "react-router-dom"

function App() {
  const [slideshowActive, setSlideshowActive] = useState(false)
  
  //The painting displayed in the slideshow
  const [currentPainting, setCurrentPainting] = useState(data[0])
  
  return (
    <BrowserRouter>
      <div className="App">
        {/* set up the router */}
        <Route exact path="/galleria-slideshow" component={Gallery} />
        <Route path="/Audiophile/paintings/:slug" component={Gallery} />
        
        <Header slideshowActive={slideshowActive} setSlideshowActive={setSlideshowActive}/>
        <Gallery data={data}/>
      </div>
    </BrowserRouter>
  );
}

export default App;