import colorThief from "colorthief";
import chroma from 'chroma-js';

const rgbToHex = (color) => {
  return chroma(color).hex();
}

const getColorCombo = (color) => {
  const black = "#000000";
  const white = "#FFFFFF";
  try {
    const whiteContrast = chroma.contrast(color, "white");
    const blackContrast = chroma.contrast(color, "black");

    if (whiteContrast > blackContrast) return [color, white];
    else return [color, black];
  } catch (error) {
    console.log("Input a valid color...");
  }
}

const getColors = (img, colorCounts) => {
  const color_thief = new colorThief();

  // Get Dominant color from image
  const dominantImgColorHEX = rgbToHex(color_thief.getColor(img));
  // Get the text color that will have the best contrast with the color passed
  const dominatColorCombo = getColorCombo(dominantImgColorHEX);


  // Get a color palette from image
  const imgColorPalette = color_thief.getPalette(img, colorCounts);
  let hexArray = []
  // convert each color in the palette to hex and pair with best contrast text color
  for(let i = 0; i < imgColorPalette.length; i++){
    let hexColor = rgbToHex(imgColorPalette[i]);
    let paletteColorCombo = getColorCombo(hexColor);
    hexArray.push(paletteColorCombo);
  }
  return [dominatColorCombo, hexArray];
}

const darkenColor = (color) => {
  if(color){
    const shade = chroma(color).darken().hex();
    return shade
  }
}

const brightenColor = (color) => {
  if(color){
    const brighter = chroma(color).brighten().hex();
    return brighter;
  }
}

export default {
  getColors,
  darkenColor,
  brightenColor
}