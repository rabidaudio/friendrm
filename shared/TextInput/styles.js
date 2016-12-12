import { StyleSheet } from 'react-native'

import { textStyles, colors } from '../globalStyles'

const borderSize = 1
const borderRadius = 7

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: borderSize,
    borderRadius: borderRadius,
    borderColor: colors.blue
  },
  icon: {
    width: 25,
    height: 25,
    margin: borderRadius
  },
  separator: {
    width: borderSize,
    backgroundColor: colors.blue
  },
  input: {
    ...textStyles,
    flex: 1,
    left: 10
  }
})
