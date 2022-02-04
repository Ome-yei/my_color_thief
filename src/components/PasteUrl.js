import { useContext } from 'react';
import { ImgDominantColor } from './themeContext';
import styled from 'styled-components';
import helpers from './helpers';


export default function PasteUrl({ handleInputChange, handleSubmit, inputUrl }) {

  const value = useContext(ImgDominantColor);

  return (
    <PasteUrlForm onSubmit={handleSubmit}>
      <PasteUrlInput
        type='text'
        value={inputUrl}
        onChange={handleInputChange}
        darkerColor={helpers.darkenColor(value)}
      />
      <PasteUrlButton
        brightenColor={helpers.brightenColor(value)}
        darkerColor={helpers.darkenColor(value)}
      >
        Get Colors
      </PasteUrlButton>
    </PasteUrlForm>
  )
}

const PasteUrlInput = styled.input`
  border: 3px solid ${props => props.darkerColor};
  padding: .2em 1em;
  border-radius: .375em 0 0 .375em;
  width: 100%
`;

const PasteUrlButton = styled.button`
  border: 3px solid ${props => props.darkerColor};
  background-color:  ${props => props.brightenColor};
  color: ${props => props.darkerColor};
  margin-left: -1px;
  border-radius: 0 6px 6px 0;
  padding: .2em .75em;
  cursor: pointer;
  white-space: nowrap;
`;

const PasteUrlForm = styled.form`
  display: flex;
  align-items: flex-start;
  max-width: 400px;
  margin: 1.2em auto;
`;