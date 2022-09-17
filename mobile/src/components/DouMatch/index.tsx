import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import { CheckCircle } from 'phosphor-react-native'
import { MaterialIcons } from '@expo/vector-icons'
import * as Clipboard from 'expo-clipboard'
import { useState } from 'react'

import { THEME } from '../../theme'
import { styles } from './styles'
import { Heading } from '../Heading'

interface Props extends ModalProps {
  discord: string
  onClose: () => void
}

export function DouMatch({ discord, onClose, ...rest }: Props) {
  const [isCopping, setIsCopping] = useState(false)

  async function handleCopyDiscordToClipboard() {
    setIsCopping(true)
    await Clipboard.setStringAsync(discord)
    Alert.alert('Discord copiado!', 'Usúario compiado para você colar no Discord.')
    setIsCopping(false)
  }
  return (
    <Modal {...rest} transparent statusBarTranslucent animationType='fade'>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons name='close' size={20} color={THEME.COLORS.CAPTION_500} />
          </TouchableOpacity>
          <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight='bold' />
          <Heading title="Let's play!" subtitle='Agora é só começar a jogar!' style={styles.titleModal} />
          <Text style={styles.label}>
            Adicione seu discord
          </Text>
          <TouchableOpacity style={styles.discordButton}
           onPress={handleCopyDiscordToClipboard}
           disabled={isCopping}>
            <Text style={styles.discord}>
              {isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord }
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}