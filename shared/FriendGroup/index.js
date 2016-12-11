import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView } from 'react-native'

import FriendCard from '../FriendCard'
import { RuleType, getNameForRule, FriendType } from '../types'

class FriendGroup extends Component {

  render () {
    return (
      <View style={{...this.props.style}}>
        <Text>{getNameForRule(this.props.rule)}</Text>
        <ScrollView horizontal style={{height: 200}}>
          <View style={{marginLeft: 10, width: 0}} />
          { this.props.friends.map((friend) => {
            console.log(friend)
            return (<FriendCard
              key={friend.name}
              friend={friend}
              style={{margin: 10}}
              width={100} />)
          })}
        </ScrollView>
      </View>
    )
  }
}

FriendGroup.propTypes = {
  rule: RuleType.isRequired,
  friends: PropTypes.arrayOf(FriendType).isRequired
}

export default FriendGroup
