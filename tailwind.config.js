module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: { 'gray-850': '#242C3A', 'gray-950': '#0D1016' },
      spacing: {
        '05': '0.125rem',
        '14': '3.5rem',
        '60': '15rem',
        '66': '16.5rem',
        '68': '17rem',
        '72': '18rem',
        '78': '19.5rem',
        '84': '21rem',
        '96': '24rem',
        '120': '30rem',
        '144': '36rem',
        '192': '48rem',
        'half-view': '50vh',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        title: ['Josefin Sans', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        r: '1px 0 3px 0 rgba(0, 0, 0, 0.1), 1px 0 2px 0 rgba(0, 0, 0, 0.06)',
        'r-md':
          '4px 0 6px -1px rgba(0, 0, 0, 0.1), 2px 0 4px -1px rgba(0, 0, 0, 0.06)',
        'r-lg':
          '10px 0 15px -3px rgba(0, 0, 0, 0.1), 4px 0 6px -2px rgba(0, 0, 0, 0.05)',
        'inner-md':
          'inset 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);',
        'inner-md-dark':
          'inset 0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.2);',
        'inner-lg':
          'inset 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);',
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.25rem',
        max: '100%',
      },
      opacity: {
        '10': '.1',
        '20': '.2',
        '30': '.3',
        '40': '.4',
        '60': '.6',
        '70': '.7',
        '80': '.8',
        '90': '.9',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
