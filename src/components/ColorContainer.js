import Color from "./Color"

export default function ColorContainer({ colorPalette }) {
  return (
    <div>
      {colorPalette.length ? (
        colorPalette[1].map(color => {
          return (
            <Color key={color[0]} backgroundColor={color[0]} textColor={color[1]}>
              {color[0]}
            </Color>
          )
        })
      ) : 
      <p>Data not found</p>
      }
    </div>
  )
}