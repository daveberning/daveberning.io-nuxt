export interface Theme {
  background: string,
  backgroundDarker: string, // darken 7% of background color
  backgroundLighter: string, // Lighten 6% of background color
  textColorDark: string
}

export interface ThemeSwatch {
  name: string,
  color: string
}
