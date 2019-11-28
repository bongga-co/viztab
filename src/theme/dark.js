import general from './general'

export default Object.assign({}, general, {
  name: 'dark',
  favicon: './images/favicon.ico',
  header: {
    height: 100,
    background: '#303030'
  },
  logo: {
    src: './images/logo.png',
    color: '#8799a7'
  },
  content: {
    background: '#141414',
    fullscreen: '#BCD002',
    fullscreenText: '#2E2C87',
    fullscreenIcon: '#2E2C87',
    itemShadow: 'linear-gradient(rgba(200,200,200,0.3), rgba(255,255,255,1.0))'
  },
  menu: {
    color: '#ffffff',
    activeColor: '#BCD002'
  },
  contextMenu: {
    background: '#3F3F3F',
    userInfoBackground: '#4F4F4F',
    userInfoText: '#ffffff',
    sessionText: '#A7A7A7',
    itemColor: '#bababa',
    itemColorActive: '#333333',
    itemBackgroundActive: '#BCD002',
    separator: '#4F4F4F',
    iconColor: '#BCD002',
    iconColorActive: '#333333',
    sessionButton: '#606060',
    sessionButtonIcon: '#BCD002',
    arrow: 'invert(1)'
  },
  footer: {
    background: '#303030',
    text: '#ffffff'
  }
})
