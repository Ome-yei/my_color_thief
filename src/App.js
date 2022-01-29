import { useState } from 'react';
import colorThief from "colorthief";
import styled from 'styled-components';
import './App.css';

import DisplayImage from './components/DisplayImage';
import UploadImage from './components/UploadImage';
import PasteUrl from './components/PasteUrl';
import ColorContainer from './components/ColorContainer';

function App() {

  const [imgSrc, setImgSrc] = useState('');
  const [inputUrl, setInputUrl] = useState('');
  const [colorPalette, setColorPalette] = useState([]); 

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = URL.createObjectURL(event.target.files[0]);
      console.log('handleImageChange', img);
      setImgSrc(img);
    }
  }

  const handleInputChange = (event) => {
    setInputUrl(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setImgSrc(inputUrl);
    setInputUrl("");
    console.log('Inside handleSubmit', inputUrl)
  }

   return (
    <div className="App">
      <h1>Color Thief</h1>
      <DisplayImage imgSrc={imgSrc} setColorPalette={setColorPalette}/>
      <UploadImage handleImageChange={handleImageChange} />
      <p>OR</p>
      <PasteUrl
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        inputUrl={inputUrl}
      />
      <ColorContainer colorPalette={colorPalette}/>
    </div>
  );
}

export default App;
