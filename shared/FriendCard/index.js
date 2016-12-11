import React, { Component, PropTypes } from 'react'
import { View, Text, Image } from 'react-native'
import moment from 'moment'
import styles from './styles'
import { FriendType } from '../types'

class FriendCard extends Component {

  render () {
    const textSettings = {
      adjustsFontSizeToFit: true,
      minimumFontScale: 0.4,
      numberOfLines: 1
    }
    const lastContacted = FriendType.lastContacted(this.props.friend)
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
            { lastContacted ? moment(lastContacted).fromNow() : 'Never' }
          </Text>
        </View>
        <View style={{
          height: this.props.width,
          padding: (0.11 * this.props.width)}}>
          { this.props.friend.avatar.length === 2
              ? <Text {...textSettings}
                minimumFontScale={0}
                style={[styles.text, styles.avatarEmoji]}>
                {this.props.friend.avatar}
              </Text>
              : <Image
                style={styles.avatarImage}
                source={{uri: this.props.friend.avatar}} />
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

FriendCard.propTypes = {
  width: PropTypes.number,
  friend: FriendType
}

export default FriendCard
