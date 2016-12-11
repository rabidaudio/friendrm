import { StyleSheet } from 'react-native'

import { textStyles } from '../globalStyles'

export default StyleSheet.create({
  title: {
    ...textStyles,
    marginLeft: 5
  },
  initialSpace: {
    marginLeft: 10,
    width: 0
  },
  separator: {
    width: 1,
    alignSelf: 'center',
    backgroundColor: 'black',
    margin: 10
  }
})
