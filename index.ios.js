// @flow
import { Navigation } from 'react-native-navigation'

import Home from './shared/Home'
import {navigationStyles} from './shared/globalStyles'

Navigation.registerComponent('Home', () => Home)

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Home',
    title: 'FriendRM',
    navigatorStyle: navigationStyles
  },
  passProps: {},
  animationType: 'slide-down'
})
