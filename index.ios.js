// @flow
import { Navigation } from 'react-native-navigation'

import Home from './shared/Home'
import AddFriend from './shared/AddFriend'
import {navigationStyles} from './shared/globalStyles'

Navigation.registerComponent('Home', () => Home)
Navigation.registerComponent('AddFriend', () => AddFriend)

Navigation.startSingleScreenApp({
  screen: {
    // screen: 'Home',
    screen: 'AddFriend',
    title: 'FriendRM',
    navigatorStyle: navigationStyles
  },
  passProps: {},
  animationType: 'slide-down'
})
