import { Theme, ThemeSwatch } from '~/types/theme'

const defaultTheme: Theme = {
  background: `#3e9e91`,
  backgroundDarker: `#348479`,
  backgroundLighter: `#47b4a5`,
  textColorDark: `#334241`
}

const redTheme: Theme = {
  background: lightenDarkenColor('#a83c44', 0),
  backgroundDarker: lightenDarkenColor('#a83c44', -15), // darken 7% of background color
  backgroundLighter: lightenDarkenColor('#a83c44', 10), // Lighten 6% of background color
  textColorDark: `#423333`
}

const blueTheme: Theme = {
  background: lightenDarkenColor('#2e5186', 0),
  backgroundDarker: lightenDarkenColor('#2e5186', -20), // darken 7% of background color
  backgroundLighter: lightenDarkenColor('#2e5186', 15), // Lighten 6% of background color
  textColorDark: `#181b29`
}

const greenTheme: Theme = {
  background: lightenDarkenColor('#40894e', 0),
  backgroundDarker: lightenDarkenColor('#40894e', -20), // darken 7% of background color
  backgroundLighter: lightenDarkenColor('#40894e', 15), // Lighten 6% of background color
  textColorDark: `#30413c`
}

const purpleTheme: Theme = {
  background: lightenDarkenColor('#8d6299', 0),
  backgroundDarker: lightenDarkenColor('#8d6299', -20), // darken 7% of background color
  backgroundLighter: lightenDarkenColor('#8d6299', 15), // Lighten 6% of background color
  textColorDark: `#2a1e2b`
}

const bengalsTheme: Theme = {
  background: lightenDarkenColor('#cb653a', 0),
  backgroundDarker: lightenDarkenColor('#cb653a', -20), // darken 7% of background color
  backgroundLighter: lightenDarkenColor('#cb653a', 15), // Lighten 6% of background color
  textColorDark: `#000000`
}

export const listOfThemes: ThemeSwatch[] = [ // Order of swatches
  {
    name: 'default',
    color: defaultTheme.background
  },
  {
    name: 'green',
    color: greenTheme.background
  },
  {
    name: 'blue',
    color: blueTheme.background
  },
  {
    name: 'purple',
    color: purpleTheme.background
  },
  {
    name: 'red',
    color: redTheme.background
  }
]

export function getThemeColors(theme: string): Theme {
  if (theme === 'red') return redTheme
  else if (theme === 'bengals') return bengalsTheme
  else if (theme === 'green') return greenTheme
  else if (theme === 'blue') return blueTheme
  else if (theme === 'purple') return purpleTheme
  else return defaultTheme
}

function lightenDarkenColor(col: string, amt: number): string {
  var usePound = false
  if (col[0] == '#') {
    col = col.slice(1)
    usePound = true
  }
  var num = parseInt(col, 16)
  var r = (num >> 16) + amt
  if (r > 255) r = 255
  else if (r < 0) r = 0
  var b = ((num >> 8) & 0x00FF) + amt
  if (b > 255) b = 255
  else if (b < 0) b = 0
  var g = (num & 0x0000FF) + amt
  if (g > 255) g = 255
  else if (g < 0) g = 0
  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)

}
