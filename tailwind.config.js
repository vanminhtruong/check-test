module.exports = {
  content: ['./src/**/*.html', './src/**/*.scss'],
  theme: {
    extend: {
      width: {
        '336': '336px', // thêm chiều rộng 341px
        '60': '60px', 
        '570': '570px',
        '38': '38px',
        '17': '17px',
        '700': '700px',
        '30': '30px',
        '600': '600px',
        '72': '72px',
        '300': '300px',
        '9': '9px',
        '217': '217px',
        '190': '190px',
        '17': '17px',
        'custom-width': '116.411px',
        'custom-164': '164.583px',
      },

      maxWidth: {
        '1170': '1170px', // Thêm giá trị max-width 1150px
        '1920': '1920px', 
        '300': '300px',
        '570': '570px',
      },

      height:{
        '60': '60px',
        '298': '298px',
        '38': '38px',
        '5': '5px',
        '17': '17px',
        'custom-height': '72.917px',
        'custom-0.521': '0.521px'
      },

      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },

      colors: {
        'custom-green': '#356C07',
        'custom-color': '#2D3E50',
        'custom-gray': '#343434',
      },

      backgroundColor: {
        'custom-green': '#356C07', // Thêm màu nền tùy chỉnh
        'custom-bg': '#1877F2',
        'custom-rgba': 'rgba(53, 108, 7, 0.10)',
        'custom-ea': '#EAEAEA',
        'custom-68': '#68C114'
        
      },

      borderWidth: {
        'custom': '1.042px',
      },
      borderColor: {
        'custom-rgba': 'rgba(53, 108, 7, 0.10)',
        'black-opacity': 'rgba(0, 0, 0, 0.30)',
      },

      fontSize: {
        'custom-size': '16.667px',
        '21': '21px',
        '16px': '16px', 
      },

      borderRadius: {
        'custom-radius': '3px',
        'custom-10': '10.417px'
      },

      lineHeight: {
        '141': '1.411', // Tùy chỉnh line-height (141.1% = 1.411)
      },

      screens: {
        'sm': { 'max': '376px' },   // Màn hình nhỏ hơn 640px
      },
    },
  },
  plugins: [],
}
