import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

import FriendGroup from './shared/FriendGroup'

export default class FriendRM extends Component {
  render () {
    const opts = {
      rule: {
        channel: 'text',
        frequency: 14
      },
      friends: [
        {
          name: 'John Smith',
          avatar: 'https://www.gravatar.com/avatar/e3f99640d60577f72086b54087423593.png?s=200',
          contacts: [
            {
              timestamp: new Date(2016, 10, 18),
              channel: 'text'
            },
            {
              timestamp: new Date(2015, 11, 25),
              channel: 'call'
            }
          ]
        },
        {
          name: 'Nikolaos Papanikolopoulos',
          avatar: '💩',
          contacts: []
        }
      ]
    }
    return (<FriendGroup {...opts} style={{marginTop: 40}} />)
  }
}

AppRegistry.registerComponent('FriendRM', () => FriendRM)
