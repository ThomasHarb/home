import { light as lightOrange, dark as darkOrange } from './palette--orange';

const palette = (themeMode = 'dark', paletteType = 'orange') => {
  if (paletteType === 'orange') {
    return themeMode === 'dark' ? darkOrange : lightOrange;
  }

  return themeMode === 'dark' ? darkOrange : lightOrange;
};

export default palette;
