import styled from 'styled-components';

export default function Color({backgroundColor, textColor, children}){
  return(
    <SingleColor backgroundColor={backgroundColor} textColor={textColor}>
      {children}
    </SingleColor>
  )
}

const SingleColor = styled.div`
  width: 100px;
  height: 100px;
  color: ${props => props.textColor};
  background-color: ${props => props.backgroundColor};
  flex: 20%;
  margin: 1em;
  padding: 1em;
  display:flex;
  justify-content: center;
  align-items: center;
`;