// @flow
import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'

import FriendCard from '../FriendCard'
import Friend from '../../lib/models/Friend'
import Rule from '../../lib/models/Rule'

type Props = {
  rule: Rule,
  friends: [Friend],
  style: any
};

class FriendGroup extends Component {

  props: Props

  render () {
    return (
      <View style={{...this.props.style}}>
        <Text>{this.props.rule.name}</Text>
        <ScrollView horizontal style={{height: 200}}>
          <View style={{marginLeft: 10, width: 0}} />
          { this.props.friends.map((friend) => {
            return (<FriendCard
              key={friend.name}
              style={{margin: 10}}
              friend={friend}
              rule={this.props.rule}
              width={100} />)
          })}
        </ScrollView>
      </View>
    )
  }
}

export default FriendGroup
