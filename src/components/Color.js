import styled from 'styled-components';
import { useState } from 'react';
import { Tooltip } from '@mui/material';
import Fade from '@mui/material/Fade';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Color({ backgroundColor, textColor, children }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      setClicked(!clicked);
      setTimeout(() => {
        setClicked(false);
      }, 2000)
    }
  }
  return (
    <Tooltip TransitionComponent={Fade}
    TransitionProps={{ timeout: 600 }} title={clicked ? 'Copied' : 'Copy'} placement="top" arrow>
      <SingleColor backgroundColor={backgroundColor} textColor={textColor} onClick={handleClick}>
        <CopyToClipboard text={backgroundColor}>
          <span style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: ' flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>{children}</span>
        </CopyToClipboard>
      </SingleColor>
    </Tooltip>
  )
}

const SingleColor = styled.div`
  position: relative;
  height: 100px;
  color: ${props => props.textColor};
  background-color: ${props => props.backgroundColor};
  border-radius: 3px;
  text-transform: uppercase;
  flex: 20%;
  margin: 1em;
  padding: 1em;
  display:flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;    flex: 30%;
  &:hover {
    box-shadow: none;
  }
}
  @media (min-width: 768px){
    flex: 10%;
    margin: 1em 0em;
  }
`;