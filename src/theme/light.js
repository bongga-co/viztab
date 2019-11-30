import general from './general'

export default Object.assign({}, general, {
  name: 'light',
  favicon: './images/favicon.ico',
  header: {
    height: 100,
    background: '#F5F5F9'
  },
  logo: {
    src: './images/logo_light.png',
    color: '#8799a7'
  },
  content: {
    background: '#ffffff',
    fullscreen: '#2E2C87',
    fullscreenText: '#ffffff',
    fullscreenIcon: '#ffffff',
    itemShadow: 'linear-gradient(rgba(50,50,50,0.3), rgba(0,0,0,1.0))'
  },
  menu: {
    color: '#50549E',
    activeColor: '#0D0D5A'
  },
  footer: {
    background: '#F5F5F9',
    text: '#333333'
  }
})
