import React from 'react';
import styled from 'styled-components';


import helpers from './helpers';


export default function DisplayImage({ imgSrc, setColorPalette }) {
  const image = React.createRef();

  console.log('IMAGE RENDER');
  return (
    <ImageContainer>
      <img
        src={imgSrc}
        alt=''
        style={{ maxWidth: "100%", height: "auto", }}
        crossOrigin="anonymous"
        ref={image}
        onLoad={() => {
          const result = helpers.getColors(image.current, 8);
          setColorPalette(result);
        }}
      />
    </ImageContainer>
  )
}

const ImageContainer = styled.div`
border: 1px solid red;
max-width: 300px;
max-height: 500px;
position: relative;
`;