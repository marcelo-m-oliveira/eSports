import { View, TouchableOpacity, Image, FlatList, Text } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect, useState } from 'react'
import { Entypo } from '@expo/vector-icons'
import axios from 'axios'

import { GameParams } from '../../@types/navigation'

import logoImg from '../../assets/logo-nlw-esports.png'

import { DuoCard, DuoCardProps } from '../../components/DuoCard'
import { Background } from '../../components/Background/index'
import { DouMatch } from '../../components/DouMatch'
import { Heading } from '../../components/Heading'


import { THEME } from '../../theme/index'
import { styles } from './styles'

export function Game() {

  const [duos, setDuos] = useState<DuoCardProps[]>([])
  const [discordDuoSelected, setDiscordDuoSelected] = useState('')

  const navigation = useNavigation()
  const route = useRoute()
  const game = route.params as GameParams

  async function getDiscordUser(adsId: string) {
    axios(`http://192.168.1.6:3333/ads/${adsId}/discord`)
      .then(response => setDiscordDuoSelected(response.data.discord))
  }

  useEffect(() => {
    axios(`http://192.168.1.6:3333/games/${game.id}/ads`)
      .then(response => setDuos(response.data))
  }, [])

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo name='chevron-thin-left' color={THEME.COLORS.CAPTION_300} size={20} />
          </TouchableOpacity>

          <Image source={logoImg} style={styles.logo} />
          <View style={styles.right} />
        </View>
        <Image source={{ uri: game.bannerUrl }} style={styles.gameBanner} resizeMode='cover' />

        <Heading title={game.title} subtitle='Conecte-se e comece a jogar!' />
        <FlatList data={duos} keyExtractor={item => item.id} renderItem={({ item }) => (
          <DuoCard data={item} onConect={() => getDiscordUser(item.id)} />
        )} horizontal style={styles.containerList}
          contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.empatyListContent]}
          showsHorizontalScrollIndicator={false} ListEmptyComponent={() => (
            <Text style={styles.empatyListText}>Não há anúncios publicados para
              <Text style={styles.empatyListNameGame}> {game.title}
              </Text> ainda.
            </Text>
          )} />
        <DouMatch onClose={() => setDiscordDuoSelected('')} visible={discordDuoSelected.length > 0} discord={discordDuoSelected} />
      </SafeAreaView>
    </Background>

  )
}