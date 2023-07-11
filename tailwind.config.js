/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     fontFamily:{
      'playfair' :['Playfair Display SC'],
    },
    extend: {      
      backgroundImage:{
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      keyframes:{
        textAppear:{
          '0%' : {'transform': 'translateX(-100%)'},
          '0%' : {'transform': 'translateX(-100%)'},
          '100%' : {'transform': 'translateX(0%)'} 
        },
        fadeIn:{
          '0%':{'opacity': '0', 'transform':'scale(1)'},
          '50%':{'opacity': '1', 'transform':'scale(1)'},
          '100%':{'opacity': '1', 'transform':'scale(1)'}


        }
      },
      animation: {
        'textAppear':'textAppear 0.7s forwards cubic-bezier(0.71, 0.135, 0.15, 0.86)',
        'fadeIn' : 'fadeIn 1s forwards'
      }
    },
  },
  plugins: [],
}

