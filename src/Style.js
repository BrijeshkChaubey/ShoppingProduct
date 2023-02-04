import { Dimensions, PixelRatio } from 'react-native'
const { width, height } = Dimensions.get('window');

export const wp = number => {
    let givenWidth = typeof number === 'number' ? number : parseFloat(number);
    PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};
export const hp = number => {
    let givenHeight = typeof number === 'number' ? number : parseFloat(number);
    PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
};
