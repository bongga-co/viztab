import general from './general'

export default Object.assign({}, general, {
  name: 'dark',
  favicon: './images/favicon.ico',
  header: {
    height: 100,
    background: '#303030'
  },
  logo: {
    src: './images/logo_dark.png',
    color: '#8799a7'
  },
  content: {
    background: '#141414',
    fullscreen: '#BCD002',
    fullscreenText: '#2E2C87',
    fullscreenIcon: '#2E2C87',
    itemShadow: 'linear-gradient(rgba(200,200,200,0.3), rgba(255,255,255,1.0))'
  },
  sidebar: {
    background: '#ffffff',
    width: '270px',
    active: '#f72'
  },
  menu: {
    color: '#ffffff',
    activeColor: '#BCD002'
  },
  sheet: {
    background: '#303030',
    close: '#ffffff'
  },
  footer: {
    background: '#303030',
    text: '#ffffff',
    border: '#e1e5eb'
  }
})
