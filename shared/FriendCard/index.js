// @flow
import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

import styles from './styles'
import Friend from '../../lib/models/Friend'
import Rule from '../../lib/models/Rule'

type Props = {
  friend: Friend,
  rule: Rule,
  width: number,
  style: any
};

class FriendCard extends Component {

  props: Props

  render () {
    const textSettings = {
      adjustsFontSizeToFit: true,
      minimumFontScale: 0.4,
      numberOfLines: 1
    }
    console.log(this.props.friend)
    return (
      <View
        style={[styles.container, {
          height: (this.props.width * 1.56),
          width: this.props.width,
          ...this.props.style
        }]}>
        <View style={[styles.ribbon]}>
          <Text {...textSettings}
            style={[styles.text, styles.ribbonText]}>
            { this.props.friend.lastContactStringVia(this.props.rule.channel) }
          </Text>
        </View>
        <View style={{
          height: this.props.width,
          padding: (0.11 * this.props.width)}}>
          { this.props.friend.avatar.type === 'emoji'
              ? <Text {...textSettings}
                minimumFontScale={0}
                style={[styles.text, styles.avatarEmoji]}>
                {this.props.friend.avatar.value}
              </Text>
              : <Image
                style={styles.avatarImage}
                source={{uri: this.props.friend.avatar.value}} />
            }
        </View>
        <View style={styles.nameContainer}>
          <Text
            {...textSettings}
            numberOfLines={2}
            style={[styles.text, styles.nameText]}>
            {this.props.friend.name}
          </Text>
        </View>
      </View>
    )
  }
}

export default FriendCard
