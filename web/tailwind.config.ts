import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '23': 'repeat(23, minmax(0,1fr))'
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15'
      }
    },
    colors: {
      'icon-bg-color': '#CCECEE',
      'icon-border-color': '#AEE4E8',
      'default-font-color': '#164346',
      lime: '#D5EECC',
      'lime-gray': '#CCECEE',
      'button-border-color': '#A3BCBD',
      'image-border-color': '#C3DABA',
      'image-background-color': '#EEFAEA',
      'image-2-background-color': '#E9FDFE',
      'image-2-border-color': '#C1DADC',
      'image-3-background-color': '#ECF1FF',
      'image-3-border-color': '#AFBEE3',
      'purple-font-color': '#435175',
      'custom-border-color': '#E0E0E0',
      white: '#FFFFFF'
    }
  },
  plugins: []
}
export default config
