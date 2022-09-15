import { SafeAreaView } from 'react-native-safe-area-context'
import { ActivityIndicator } from 'react-native'

import { THEME } from '../../theme/index'
import { styles } from './styles'

export function Loading() {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.PRIMARY} />
    </SafeAreaView>
  )
}