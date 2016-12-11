// @flow

import React, { Component } from 'react'
import { ScrollView } from 'react-native'
// import { Navigation } from 'react-native-navigation'

import state from '../../lib/currentState'

import FriendGroup from '../FriendGroup'

type Props = {
  navigator: any
  // state: State
};

export default class Home extends Component {

  static navigatorButtons: Object;
  props: Props;

  constructor (props: Props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
  }

  onNavigatorEvent (event: any) {
    if (event.type === 'NavBarButtonPress' && event.id === 'add') {
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
    const groups = state.friendGroups.map((group) => {
      return (<FriendGroup
        key={group.rule.id}
        group={group}
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
