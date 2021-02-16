import general from './general'

export default Object.assign({}, general, {
  name: 'light',
  favicon: './images/favicon.ico',
  header: {
    height: 100,
    background: '#ffffff'
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
    itemShadow: 'linear-gradient(rgba(50,50,50,0.3), rgba(0,0,0,1.0))',
    primary: 'rgb(217, 74, 41)',
    close: '#303030'
  },
  sidebar: {
    background: '#ffffff',
    width: '270px',
    active: '#f72'
  },
  menu: {
    color: '#50549E',
    activeColor: '#0D0D5A'
  },
  sheet: {
    background: '#ffffff',
    close: '#303030'
  },
  footer: {
    background: '#ffffff',
    text: '#333333',
    border: '#e1e5eb'
  }
})
