import { StyleSheet } from 'react-native'

import { textStyles } from '../globalStyles'

export default StyleSheet.create({
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20
  },
  titleIcon: {
    resizeMode: 'contain',
    height: 40
  },
  title: {
    ...textStyles,
    fontSize: 20,
    marginTop: 8
  },
  input: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 5,
    marginBottom: 5
  }
})
