// @flow
import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'

import FriendCard from '../FriendCard'
import Friend from '../../lib/models/Friend'
import type { Group } from '../../lib/models/State'
import styles from './styles'

type Props = {
  group: Group,
  style: Object
};

class FriendGroup extends Component {

  props: Props;

  render () {
    const {rule, friendsInNeed, friendsInDeed} = this.props.group
    const needSeparator = friendsInNeed.length > 0 && friendsInDeed.length > 0

    function createCard (friend: Friend): any {
      return <FriendCard
        key={friend.name}
        style={{margin: 10}}
        friend={friend}
        rule={rule}
        width={100} />
    }
    return (
      <View style={{...this.props.style}}>
        <Text style={[styles.title]}>{rule.name}</Text>
        <ScrollView horizontal style={{height: 200}}>
          <View style={[styles.initialSpace]} />
          { friendsInNeed.map(createCard) }
          { needSeparator ? <View style={[styles.separator, {height: 50}]} /> : null }
          { friendsInDeed.map(createCard) }
        </ScrollView>
      </View>
    )
  }
}

export default FriendGroup
