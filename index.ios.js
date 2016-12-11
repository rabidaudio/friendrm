import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

import FriendCard from './shared/FriendCard'

export default class FriendRM extends Component {
  render() {
    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>
    //       Welcome to React Native!
    //     </Text>
    //     <Text style={styles.instructions}>
    //       To get started, edit index.ios.js
    //     </Text>
    //     <Text style={styles.instructions}>
    //       Press Cmd+R to reload,{'\n'}
    //       Cmd+D or shake for dev menu
    //     </Text>
    //   </View>
    // );
    const opts = {
      width: 100,
      avatar: '💩',
      // avatar: 'https://www.gravatar.com/avatar/e3f99640d60577f72086b54087423593.png?s=200',
      lastContacted: new Date(new Date().getTime() - 3*7*24*60*60*1000),
      // name: 'Nikolaos Papanikolopoulos'
      name: 'John Smith'
    }
    return (<FriendCard {...opts} style={{margin: 40}} />)
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('FriendRM', () => FriendRM)
