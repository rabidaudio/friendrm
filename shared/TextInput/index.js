// @flow
import React, { Component } from 'react'
import { View, Image, TextInput } from 'react-native'

import styles from './styles'

export default class CustomTextInput extends Component {

  render () {
    const {icon, style, ...input} = this.props
    return <View style={[styles.container, style]}>
      <Image style={styles.icon} {...icon} />
      <View style={styles.separator} />
      <TextInput style={styles.input} {...input} />
    </View>
  }
}
