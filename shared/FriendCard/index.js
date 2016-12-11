import React, { Component, PropTypes } from 'react'
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native'
import moment from 'moment'
import styles from './styles'

class FriendCard extends Component {

  static propTypes = {
    width: PropTypes.number,
    lastContacted: PropTypes.instanceOf(Date),
    avatar: (props, propName, componentName) => {
      const val = props[propName]
      if(!val || (!val.match(/^https?:\/\/.*/)
          && !val.match(/^[\uD83C-\uDBFF\uDC00-\uDFFF]{2}$/))
      ){
        return Error(`Invalid avatar (must be url or emoji): ${val}`)
      }
    }
  }

  render () {
    const textSettings = {
      adjustsFontSizeToFit: true,
      minimumFontScale: 0.4,
      numberOfLines: 1
    }
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
            {moment(this.props.lastContacted).fromNow()}
          </Text>
        </View>
        <View style={{
            height: this.props.width,
            padding: (0.11*this.props.width)}}>
            { this.props.avatar.length == 2
              ? <Text {...textSettings}
                  minimumFontScale={0}
                  style={[styles.text, styles.avatarEmoji]}>
                  {this.props.avatar}
                </Text>
              : <Image
                  style={styles.avatarImage}
                  source={{uri: this.props.avatar}} />
            }
        </View>
        <View style={styles.nameContainer}>
          <Text 
            {...textSettings}
            numberOfLines={2}
            style={[styles.text, styles.nameText]}>
            {this.props.name}
          </Text>
        </View>
      </View>
    )
  }
}

export default FriendCard