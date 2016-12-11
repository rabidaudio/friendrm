// @flow
import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

import FriendGroup from './shared/FriendGroup'

import Friend from './lib/models/Friend'
import Rule from './lib/models/Rule'
import Contact from './lib/models/Contact'

export default class FriendRM extends Component {

  render () {
    let john = new Friend({
      name: 'John Smith',
      avatar: 'https://www.gravatar.com/avatar/e3f99640d60577f72086b54087423593.png?s=200',
      contacts: []
    })
    john.contacts.push(new Contact({
      timestamp: new Date(2016, 10, 18),
      channel: 'text',
      friend: john
    }))
    john.contacts.push(new Contact({
      timestamp: new Date(2015, 11, 25),
      channel: 'call',
      friend: john
    }))
    let niko = new Friend({
      name: 'Nikolaos Papanikolopoulos',
      avatar: '💩',
      contacts: []
    })
    return (<FriendGroup
      rule={new Rule({channel: 'text', frequency: 14})}
      friends={[john, niko]}
      style={{marginTop: 40}} />)
  }
}

AppRegistry.registerComponent('FriendRM', () => FriendRM)
