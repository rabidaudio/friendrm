// @flow
import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'

import FriendCard from '../FriendCard'
import Friend, { sortByChannel } from '../../lib/models/Friend'
import Rule from '../../lib/models/Rule'
import styles from './styles'

type Props = {
  rule: Rule,
  friends: [Friend],
  style: any
};

type GroupedFriends = [Friend[], Friend[]];

function sortFriends (rule: Rule, friends: Friend[]): GroupedFriends {
  let acc: GroupedFriends = [[], []]
  for (const friend of friends) {
    if (rule.needsLove(friend)) {
      acc[0].push(friend)
    } else {
      acc[1].push(friend)
    }
  }
  return acc
}

class FriendGroup extends Component {

  props: Props;

  render () {
    const rule = this.props.rule
    const channel = rule.channel
    const sortedFriends = this.props.friends.sort(sortByChannel(channel))
    const [friendsInNeed, friendsInDeed] = sortFriends(rule, sortedFriends)
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
