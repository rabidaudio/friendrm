import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

import FriendCard from './shared/FriendCard'

export default class FriendRM extends Component {
  render () {
    const opts = {
      width: 100,
      avatar: '💩',
      // avatar: 'https://www.gravatar.com/avatar/e3f99640d60577f72086b54087423593.png?s=200',
      lastContacted: new Date(new Date().getTime() - 3 * 7 * 24 * 60 * 60 * 1000),
      // name: 'Nikolaos Papanikolopoulos'
      name: 'John Smith'
    }
    return (<FriendCard {...opts} style={{margin: 40}} />)
  }
}

AppRegistry.registerComponent('FriendRM', () => FriendRM)
