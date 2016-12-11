// @flow
import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { Navigation } from 'react-native-navigation'

import FriendGroup from './shared/FriendGroup'

import Friend from './lib/models/Friend'
import Rule from './lib/models/Rule'
import Contact from './lib/models/Contact'
import type {State} from './lib/models/State'
import {navigationStyles} from './shared/globalStyles'

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

export class Home extends Component {

  constructor (props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
  }

  onNavigatorEvent (event) {
    if (event.type == 'NavBarButtonPress' && event.id == 'add') {
      this.goToAddFriend()
    }
  }

  goToAddFriend () {
    // this.props.navigator.push({
    //   screen: 'example.ScreenThree', // unique ID registered with Navigation.registerScreen
    //   title: undefined, // navigation bar title of the pushed screen (optional)
    //   titleImage: require('../../img/my_image.png'), //navigation bar title image instead of the title text of the pushed screen (optional)
    //   passProps: {}, // simple serializable object that will pass as props to the pushed screen (optional)
    //   animated: true, // does the push have transition animation or does it happen immediately (optional)
    //   backButtonTitle: undefined, // override the back button title (optional)
    //   backButtonHidden: false, // hide the back button altogether (optional)
    //   navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
    //   navigatorButtons: {} // override the nav buttons for the pushed screen (optional)
    // })
  }

  render () {
    const groups = state.rules.map((rule) => {
      const friendsForRule = getFriendsForRule(rule)
      return (<FriendGroup
        key={rule.id}
        rule={rule}
        friends={friendsForRule}
        style={{marginTop: 40}} />)
    })
    return <ScrollView>{groups}</ScrollView>
  }
}

Home.navigatorButtons = {
  rightButtons: [
    {
      title: 'Add',
      id: 'add'
    }
  ],
  leftButtons: []
}

Navigation.registerComponent('Home', () => Home)

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Home',
    title: 'FriendRM',
    navigatorStyle: navigationStyles
  },
  passProps: {},
  animationType: 'slide-down'
});