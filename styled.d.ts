import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      tertiary: string
      quaternary: string
      quinary: string
      background: string
      navBarBackground: string
      navBarColor: string
    }
  }
}
