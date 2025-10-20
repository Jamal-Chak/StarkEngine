import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    50: '#f5f9ff',
    100: '#e6f0ff',
    200: '#cfe0ff',
    300: '#99c2ff',
    400: '#66a3ff',
    500: '#2b6cff',
    600: '#2256d6',
    700: '#1a3fb3',
    800: '#122b80',
    900: '#07173f',
  },
}

const fonts = {
  heading: `Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial`,
  body: `Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial`,
}

const styles = {
  global: {
    'html, body': {
      height: '100%'
    },
    body: {
      bg: 'gray.50',
      color: 'gray.800',
      WebkitFontSmoothing: 'antialiased',
      textRendering: 'optimizeLegibility'
    },
    "#root": {
      minHeight: '100%'
    }
  }
}

const components = {
  Button: {
    variants: {
      solidPrimary: (props) => ({
        bg: 'brand.500',
        color: 'white',
        _hover: { bg: 'brand.600' },
      }),
    },
  },
  Card: {
    baseStyle: {
      bg: 'white',
      borderRadius: 'md',
      boxShadow: 'sm',
    },
  },
}

const theme = extendTheme({ colors, fonts, styles, components })

export default theme
