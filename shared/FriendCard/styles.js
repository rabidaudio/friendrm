import { StyleSheet } from 'react-native'

import { shadowStyles, textStyles, colors } from '../globalStyles'

export default StyleSheet.create({
  container: {
    ...shadowStyles,
    borderRadius: 5
  },
  ribbon: {
    flex: 2,
    backgroundColor: colors.red,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  text: {
    ...textStyles,
    flex: 1,
    textAlign: 'center'
  },
  ribbonText: {
    fontSize: 14,
    marginTop: 5
  },
  avatarEmoji: {
    fontSize: 100
  },
  avatarImage: {
    flex: 1,
    borderRadius: 6
  },
  nameContainer: {
    flex: 3,
    flexDirection: 'row',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  nameText: {
    marginBottom: 5,
    fontSize: 16
  }
})
