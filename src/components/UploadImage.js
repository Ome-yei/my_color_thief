import { useContext } from 'react';
import { ImgDominantColor } from './themeContext';
import styled from 'styled-components';
import helpers from './helpers';

export default function UploadImage({ handleImageChange }) {

  const value = useContext(ImgDominantColor);

  return (
    <UploadImageContainer darkerColor={helpers.darkenColor(value)}>
      <div>
        <h2>Drag and Drop Your Image</h2>
        <p>
          <span>
            <span>or <span>
            <Link brightenColor={helpers.brightenColor(value)}>Select a File</Link>
          </span> from your computer
          </span>
          </span>
        </p>
      </div>
      <UploadImageInput type='file' onChange={handleImageChange} />
    </UploadImageContainer>
  )
}


const UploadImageContainer = styled.div`
  // border: 1px solid black;
  padding: 2em 1.875em;
  position: relative;
  border-style: dashed;
  border-color: ${props => props.darkerColor };
  margin: 1.2em auto;
  max-width: 400px;
  max-height: 500px;
`;

const UploadImageInput = styled.input`
  // border: 1px solid green;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
`;

const Link = styled.span`
color: ${props => props.brightenColor};
cursor: pointer;
`;
