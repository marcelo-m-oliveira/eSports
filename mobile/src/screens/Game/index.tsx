import { useEffect, useState } from 'react'

import { View, TouchableOpacity, Image, FlatList, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useNavigation, useRoute } from '@react-navigation/native'

import { GameParams } from '../../@types/navigation'

import { Entypo } from '@expo/vector-icons'

import { DuoCard, DuoCardProps } from '../../components/DuoCard'
import { Background } from '../../components/Background/index'
import { Heading } from '../../components/Heading'

import logoImg from '../../assets/logo-nlw-esports.png'

import { THEME } from '../../theme/index'
import { styles } from './styles'

export function Game() {

  const [duos, setDuos] = useState<DuoCardProps[]>([])
  const navigation = useNavigation()
  const route = useRoute()
  const game = route.params as GameParams

  useEffect(() => {
    fetch(`http://192.168.1.6:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data))
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
          <DuoCard data={item} onConect={() => { }} />
        )} horizontal style={styles.containerList}
          contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.empatyListContent]}
          showsHorizontalScrollIndicator={false} ListEmptyComponent={() => (
            <Text style={styles.empatyListText}>Não há anúncios publicados para
              <Text style={styles.empatyListNameGame}> {game.title}
              </Text> ainda.
            </Text>
          )} />
      </SafeAreaView>
    </Background>

  )
}