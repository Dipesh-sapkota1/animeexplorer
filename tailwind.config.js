export const content = [
  './views/**/*.ejs',
];
export const theme = {
  extend: {
    colors: {
      'text': '#dadada',
      'primary': '#673ab7',
      'secondary': '#317b00',
      'accent': '#ff9800',
      background:{
        '400': '#414141',
        '800': '#0c0c0c',
      } ,
    
     },
     fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },
    fontFamily: {
      heading: 'Poppins',
      body: 'Noto Sans JP',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
     
  },
};
export const plugins = [];
  