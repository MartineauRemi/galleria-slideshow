import './styles/styles.scss'
import {useState} from 'react'
import Header from './layout/Header'

function App() {
  const [slideshowActive, setSlideshowActive] = useState(false)
  return (

    <div className="App">
      <Header slideshowActive={slideshowActive} setSlideshowActive={setSlideshowActive}/>
    </div>
  );
}

export default App;