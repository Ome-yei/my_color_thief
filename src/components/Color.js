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
  text-transform: uppercase;
  flex: 20%;
  margin: 1em;
  padding: 1em;
  display:flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;    flex: 30%;
  }
  @media (min-width: 768px){
    flex: 10%;
    margin: 1em 0em;
  }
`;