import { useState } from 'react';
import styled from 'styled-components';

import DisplayImage from './components/DisplayImage';
import UploadImage from './components/UploadImage';
import PasteUrl from './components/PasteUrl';
import ColorContainer from './components/ColorContainer';


function App() {

  const [imgSrc, setImgSrc] = useState('');
  const [inputUrl, setInputUrl] = useState('');
  const [colorPalette, setColorPalette] = useState([[], []]); 

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
    <AppContainer dominantColor={colorPalette[0]}>
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
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  // border : 5px solid black;
  min-height: 100vh;
  background-color: ${props => props.dominantColor[0]};
  color: ${props => props.dominantColor[1]};
  padding: 1.2em 1em 0 1em;
  text-align: center;
`;