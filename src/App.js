import React from 'react';
import { useState} from 'react';
import colorThief from "colorthief";
import styled from 'styled-components';
import './App.css';


function App() {

  const [imgSrc, setImgSrc] = useState('https://img5.goodfon.com/wallpaper/nbig/f/41/rio-chunkies-mango-frukt-plod-sok.jpg');
  const [inputUrl, setInputUrl] = useState('');
  const [refToImage, setRefToImage] = useState("");
  const [result, setResult] = useState([]);
  const color_thief = new colorThief();
  const handleImageChange = (event) => {
    if(event.target.files && event.target.files[0]){
      let img = URL.createObjectURL(event.target.files[0]);
      console.log('handleImageChange', img);
      setImgSrc(img);
      getImageColors();
    }
  }

  const handleInputChange = (event) => {
    setInputUrl(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setImgSrc(inputUrl);
    getImageColors();
    setInputUrl("");
    console.log('Inside handleSubmit', inputUrl)
  }

  const handleImgRefChange = (currentImage) => {
    console.log('inside handleImgRefChange: ', currentImage);
    setRefToImage(currentImage);
  }


  const getImageColors = () => {
    setResult(color_thief.getColor(refToImage));
  }

  // console.log('imgRef', refToImage);
  console.log('Colors, result: ', result);

  return (
    <div className="App">
      <h1>Color Thief</h1>
      <DisplayImage imgSrc={imgSrc} handleImgRefChange={handleImgRefChange}/>
      <InputUpload handleImageChange={handleImageChange} handleInputChange={handleInputChange} handleSubmit={handleSubmit} inputUrl={inputUrl}/>
      <ColorContainer />
    </div>
  );
}

function DisplayImage({ imgSrc, handleImgRefChange }) {
  const image = React.createRef();
  // console.log('DisplayImage', imgSrc)
  // console.log('image: ', image);
  return (
    <ImageContainer>
      <img
        src={imgSrc}
        alt=''
        style={{ maxWidth: "100%", height: "auto", }}
        crossOrigin="anonymous"
        ref={image}
        onLoad={() => {
          console.log('insisde onLoad, image.current: ', image.current)
          handleImgRefChange(image.current);
        }}
      />
    </ImageContainer>
  )
}

function InputUpload({ handleSubmit, handleImageChange, handleInputChange, inputUrl }) {
  return (
    <div>
      <h3>Upload Image</h3>
      <UploadImage handleImageChange={handleImageChange}/>
      <p>OR</p>
      <h3>Paste URL</h3>
      <PasteUrl handleSubmit={handleSubmit} handleInputChange={handleInputChange} inputUrl={inputUrl}/>
    </div>
  )
}

function UploadImage({ handleImageChange }){
  return (
    <div>
      <input type='file'  onChange={handleImageChange}/>
    </div>
  )
}

function PasteUrl({ handleInputChange, handleSubmit, inputUrl }){
  return(
    <form onSubmit={handleSubmit}>
      <input type='text' value={inputUrl} onChange={handleInputChange}/>
      <button>Get Colors</button>
    </form>
  )
}

function ColorContainer() {
  return "I will hold the colors"
}

function ImageColor() {
  return "I will display individual color of the image"
}

export default App;


const ImageContainer = styled.div`
border: 1px solid red;
max-width: 300px;
max-height: 500px;
position: relative;
`;