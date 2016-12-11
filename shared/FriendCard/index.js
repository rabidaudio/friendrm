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

  props: Props;

  render () {
    const textSettings = {
      adjustsFontSizeToFit: true,
      minimumFontScale: 0.4,
      numberOfLines: 1
    }
    const width = this.props.width
    const rule = this.props.rule
    const channel = rule.channel
    const friend = this.props.friend
    const needsLove = rule.needsLove(friend)
    return (
      <View
        style={[styles.container, {
          height: (width * 1.56),
          width: width,
          ...this.props.style
        }]}>
        <View style={[
          styles.ribbon,
          needsLove ? styles.ribbonNeedsLove : {}
        ]}>
          <Text {...textSettings}
            style={[styles.text, styles.ribbonText]}>
            { friend.lastContactStringVia(channel) }
          </Text>
        </View>
        <View style={{
          height: width,
          padding: (0.11 * width)}}>
          { friend.avatar.type === 'emoji'
              ? <Text {...textSettings}
                minimumFontScale={0}
                style={[styles.text, styles.avatarEmoji]}>
                {friend.avatar.value}
              </Text>
              : <Image
                style={styles.avatarImage}
                source={{uri: friend.avatar.value}} />
            }
        </View>
        <View style={styles.nameContainer}>
          <Text
            {...textSettings}
            numberOfLines={2}
            style={[styles.text, styles.nameText]}>
            {friend.name}
          </Text>
        </View>
      </View>
    )
  }
}

export default FriendCard
