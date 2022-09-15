import { StyleSheet } from 'react-native'

import { THEME } from '../../theme/index'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 28,
    justifyContent: 'space-between',
  },

  logo: {
    width: 89,
    height: 50,
  },

  right: {
    width: 20,
    height: 20,
  },

  gameBanner: {
    width: 311,
    height: 160,
    borderRadius: 8,
    marginTop: 32,
  },

  containerList: {
    width: '100%',
  },

  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
    alignItems: 'flex-start',
  },

  empatyListText: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR

  },

  empatyListNameGame: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },

  empatyListContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }

})