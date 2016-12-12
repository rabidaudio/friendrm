// @flow
import React, { Component } from 'react'
import { View, Image, Text, KeyboardAvoidingView } from 'react-native'
import TextInput from '../TextInput'

import styles from './styles'

// type Field = {
//   iconPath: string,
//   placeholder: string
// };

// const fields: Field[] = [
//   {
//     iconPath: '../../assets/icon-name.png',
//     placeholder: 'Full Name'
//   },
//   {
//     iconPath: '../../assets/icon-phone.png',
//     placeholder: 'Phone Number'
//   },
//   {
//     iconPath: '../../assets/icon-phone.png',
//     placeholder: 'Phone'
//   },
//   {
//     iconPath: '../../assets/icon-name.png',
//     placeholder: 'Name'
//   }
// ]

export default class AddFriend extends Component {

  render () {
    return <View>
      <View style={styles.header} >
        <Image
          style={styles.titleIcon}
          source={require('../../assets/icon-add-friend.png')} />
        <Text style={styles.title}>Friend's Information</Text>
      </View>
      <TextInput
        placeholder='Full Name'
        style={styles.input}
        icon={{source: require('../../assets/icon-name.png')}}
        returnKeyType='next' />
      <TextInput
        placeholder='Phone Number'
        style={styles.input}
        icon={{source: require('../../assets/icon-phone.png')}}
        returnKeyType='next' />
      <TextInput
        placeholder='Email'
        style={styles.input}
        icon={{source: require('../../assets/icon-email.png')}}
        returnKeyType='next' />
      <KeyboardAvoidingView behavior='padding'>
        <TextInput
          placeholder='Birthday'
          style={styles.input}
          icon={{source: require('../../assets/icon-birthday.png')}}
          returnKeyType='done' />
      </KeyboardAvoidingView>
    </View>
  }
}
