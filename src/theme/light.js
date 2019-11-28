import general from './general'

export default Object.assign({}, general, {
  name: 'light',
  favicon: './images/favicon.ico',
  header: {
    height: 100,
    background: '#F5F5F9'
  },
  logo: {
    src: './images/logo.png',
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
  contextMenu: {
    background: '#ffffff',
    userInfoBackground: '#ffffff',
    userInfoText: '#2E2C87',
    sessionText: '#c7c7c7',
    itemColor: '#50549E',
    itemColorActive: '#ffffff',
    itemBackgroundActive: '#2E2C87',
    separator: '#eaeaea',
    iconColor: '#2E2C87',
    iconColorActive: '#ffffff',
    sessionButton: '#2E2C87',
    sessionButtonIcon: '#ffffff',
    arrow: 'invert(0)'
  },
  footer: {
    background: '#F5F5F9',
    text: '#333333'
  }
})
