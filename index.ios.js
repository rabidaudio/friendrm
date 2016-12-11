// @flow
import React, { Component } from 'react'
import { AppRegistry, ScrollView, Navigator, Text } from 'react-native'

import FriendGroup from './shared/FriendGroup'

import Friend from './lib/models/Friend'
import Rule from './lib/models/Rule'
import Contact from './lib/models/Contact'
import type {State} from './lib/models/State'

const textEveryTwoWeeks = new Rule({id: 1, channel: 'text', frequency: 14})

const contactEverySixMonths = new Rule({id: 2, channel: null, frequency: 6 * 30})

const john = new Friend({
  id: 1,
  name: 'John Smith',
  avatar: 'https://www.gravatar.com/avatar/e3f99640d60577f72086b54087423593.png?s=200',
  contacts: [
    new Contact({
      timestamp: new Date(2016, 11, 8),
      // timestamp: new Date(2016, 10, 8),
      channel: 'text',
      friend: john
    }),
    new Contact({
      timestamp: new Date(2015, 11, 25),
      channel: 'call',
      friend: john
    })
  ]
})
const niko = new Friend({
  id: 2,
  name: 'Nikolaos Papanikolopoulos',
  avatar: '💩',
  contacts: []
})

const state: State = {
  rules: [textEveryTwoWeeks, contactEverySixMonths],
  friends: {[john.id]: john, [niko.id]: niko},
  rules_friends: [
    [textEveryTwoWeeks.id, john.id],
    [textEveryTwoWeeks.id, niko.id],
    [contactEverySixMonths.id, john.id]
  ]
}

function getFriendsForRule (rule: Rule): Friend[] {
  return state.rules_friends.filter((a) => {
    const [ruleId] = a
    return rule.id === ruleId
  }).map((a) => {
    const [ , friendId ] = a
    return state.friends[friendId]
  })
}

export default class FriendRM extends Component {

  render () {
    return <Navigator
      initialRoute={{name: 'home'}}
      renderScene={(route, navigator) => {
        if (route.name === 'home') {
          const groups = state.rules.map((rule) => {
            const friendsForRule = getFriendsForRule(rule)
            return (<FriendGroup
              key={rule.id}
              rule={rule}
              friends={friendsForRule}
              style={{marginTop: 40}} />)
          })
          return (<ScrollView>{groups}</ScrollView>)
        }
      }}
      navigationBar={
        <Navigator.NavigationBar
          routeMapper={{
            LeftButton: (route, navigator, index, navState) => {
              return (<Text onPress={() => navigator.pop()}>Cancel</Text>)
            },
            RightButton: (route, navigator, index, navState) => {
              return (<Text onPress={() => navigator.push({name: 'add-friend'})}>Add</Text>)
            },
            Title: (route, navigator, index, navState) => {
              return (<Text>FriendRM</Text>)
            }
          }}
          style={{backgroundColor: 'gray'}} />
      } />
  }
}

AppRegistry.registerComponent('FriendRM', () => FriendRM)
