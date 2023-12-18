/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], //pushing code to production level then unneccessary code and CSS is removed that will drastically save our memory and loading time of our website
  theme: {
    extend: {
      //Themes on colors so give name as color because react will not understand which  theme it for . There are lot of theme we can have like font so specially mention it. 
      colors:{
        // color have lots of calor palet;
        balor:
          
{
  50: '#eafce4',
  100: '#cef1bf',
  200: '#b0e698',
  300: '#92db70',
  400: '#74d148',
  500: '#5ab830',
  600: '#458f24',
  700: '#306618',
  800: '#1c3d0c',
  900: '#041600',
},

navColor :



{
  50: '#f5effb',
  100: '#dad5df',
  200: '#bfbac5',
  300: '#a69fad',
  400: '#8c8394',
  500: '#736a7b',
  600: '#595260',
  700: '#403b46',
  800: '#27222b',
  900: '#100a15',
}      
      }

    },
  },
  plugins: [],
}