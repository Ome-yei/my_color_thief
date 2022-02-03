import styled from 'styled-components';

export default function Color({backgroundColor, textColor, children}){
  return(
    <SingleColor backgroundColor={backgroundColor} textColor={textColor}>
      {children}
    </SingleColor>
  )
}

const SingleColor = styled.div`
  height: 100px;
  color: ${props => props.textColor};
  background-color: ${props => props.backgroundColor};
  border-radius: 3px;
  flex: 20%;
  margin: 1em;
  padding: 1em;
  display:flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 425px){
    flex: 30%;
  }
  @media (min-width: 768px){
    flex: 10%;
    margin: 1em 0em;
  }
`;