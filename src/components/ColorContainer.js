import styled from 'styled-components';
import Color from "./Color"

export default function ColorContainer({ colorPalette }) {
  return (
    <Container>
      {
        colorPalette.length ?
          colorPalette[1].map(color => {
            return <Color key={color[0]} backgroundColor={color[0]} textColor={color[1]}>
              {color[0]}
            </Color>
          }) :
          <p></p>
      }
    </Container>
  )
}


const Container = styled.div`
  // border: 1px solid blue;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin 1.2em auto;
  max-width: 800px;
`;