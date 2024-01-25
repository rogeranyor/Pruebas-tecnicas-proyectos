import type { Config } from 'tailwindcss'
const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
  ...defaultColors,
  ...{
    'martinique': {
      '50': '#f4f5fa',
      '100': '#e5e7f4',
      '200': '#d1d6ec',
      '300': '#b2bcde',
      '400': '#8c99ce',
      '500': '#717bc0',
      '600': '#5e62b2',
      '700': '#5354a2',
      '800': '#4a4885',
      '900': '#34345b',
      '950': '#292942',
    },
    'elephant': {
      '50': '#eefbfd',
      '100': '#d4f2f9',
      '200': '#afe5f2',
      '300': '#78d1e8',
      '400': '#3ab4d6',
      '500': '#1e97bc',
      '600': '#1c799e',
      '700': '#1d6281',
      '800': '#20516a',
      '900': '#1f455a',
      '950': '#0e2939',
    },
    'copper-rust': {
      '50': '#fbf6ea',
      '100': '#f8edeb',
      '200': '#f1ddda',
      '300': '#e5c1bc',
      '400': '#d69d96',
      '500': '#c4756f',
      '600': '#ad5351',
      '700': '#984343',
      '800': '#7a373a',
      '900': '#693236',
      '950': '#391819',
    },
    'sunset-orange': {
      '50': '#fbf6ea',
      '100': '#f8edeb',
      '200': '#f1ddda',
      '300': '#e5c1bc',
      '400': '#d69d96',
      '500': '#c4756f',
      '600': '#ad5351',
      '700': '#984343',
      '800': '#7a373a',
      '900': '#693236',
      '950': '#391819',
    },
    'persian-blue': {
      '50': '#eff6ff',
      '100': '#daeaff',
      '200': '#bddbff',
      '300': '#90c5ff',
      '400': '#5ca5fe',
      '500': '#3781fa',
      '600': '#2061f0',
      '700': '#194cdc',
      '800': '#1d44c3',
      '900': '#1b398d',
      '950': '#162455',
    },
    'yellow-orange': {
      '50': "#EFBA34"
    }


  }

}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      "colors": colors,
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Poppins: ["Poppins"],
        Roboto: ["Roboto"],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}


export default config
