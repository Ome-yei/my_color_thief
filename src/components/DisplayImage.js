import React from 'react';
import styled from 'styled-components';

import helpers from './helpers';

export default function DisplayImage({ imgSrc, setColorPalette }) {
  const image = React.createRef();

  console.log('IMAGE RENDER');
  return (
    <ImageContainer>
      <Displaytheimage
        src={imgSrc}
        alt=''
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
// border: 1px solid red;
margin: 0 auto;
max-width: 500px;
`;

const Displaytheimage = styled.img`
  margin: 0 auto;
  max-width: 100%;
  height: auto;
`;