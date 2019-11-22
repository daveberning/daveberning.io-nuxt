const defaultTheme = {
  background: `#3e9e91`,
  backgroundDarker: `#348479`,
  backgroundLighter: `#47b4a5`,
  textColorDark: `#334241`
}

const redTheme = {
  background: lightenDarkenColor('#a83c44', 0),
  backgroundDarker: lightenDarkenColor('#a83c44', -15), // darken 7% of background color
  backgroundLighter: lightenDarkenColor('#a83c44', 10), // Lighten 6% of background color
  textColorDark: `#423333`
}

const orangeTheme = {
  background: lightenDarkenColor('#ca6d31', 0),
  backgroundDarker: lightenDarkenColor('#ca6d31', -20), // darken 7% of background color
  backgroundLighter: lightenDarkenColor('#ca6d31', 15), // Lighten 6% of background color
  textColorDark: `#ca6d31`
}

const blueTheme = {
  background: lightenDarkenColor('#3374a8', 0),
  backgroundDarker: lightenDarkenColor('#3374a8', -20), // darken 7% of background color
  backgroundLighter: lightenDarkenColor('#3374a8', 15), // Lighten 6% of background color
  textColorDark: `#ca6d31`
}

export const listOfThemes = [
  {name: 'default', color: defaultTheme.background},
  {name: 'red', color: redTheme.background},
  {name: 'orange', color: orangeTheme.background},
  {name: 'blue', color: blueTheme.background}
]

function lightenDarkenColor(col: string, amt: number) {
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

export function getThemeColors(theme: string) {
  if (theme === 'red') return redTheme
  else if (theme === 'orange') return orangeTheme
  else if (theme === 'blue') return blueTheme
  else return defaultTheme
}
