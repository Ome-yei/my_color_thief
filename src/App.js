import { useState } from 'react';
import styled from 'styled-components';

import { ImgDominantColor } from './components/themeContext';

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
    <ImgDominantColor.Provider value={colorPalette[0][0]}>
      <AppContainer dominantColor={colorPalette[0]}>
        <Title>Color Thief</Title>
        <DisplayImage imgSrc={imgSrc} setColorPalette={setColorPalette} />
        <h3 style={{marginTop: '1em'}}>Paste Url</h3>
        <UploadImage handleImageChange={handleImageChange} />
        <p>OR</p>
        <h3 style={{marginTop: '1em'}}>Paste Url</h3>
        <PasteUrl
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          inputUrl={inputUrl}
        />
        <ColorContainer colorPalette={colorPalette} />
      </AppContainer>
    </ImgDominantColor.Provider>
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

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 2.8em;
`;