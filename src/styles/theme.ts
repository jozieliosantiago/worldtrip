import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    dark: {
      '900': '#47585B',
      '600': '#999999',
    },
    light: {
      '200': '#F5F8FA',
      '300': '#DADADA',
    },
    golden: {
      '500': '#FFBA08',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: '',
        color: '',
      },
      // h2: {
      //   fontSize: ''
      // }
    },
  },
});
