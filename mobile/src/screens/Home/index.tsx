import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { Image, FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import axios from 'axios'

import LogoImg from '../../assets/logo-nlw-esports.png'

import { GameCard, GameCardPros } from '../../components/GameCard'
import { Background } from '../../components/Background/index'
import { Heading } from '../../components/Heading/index'

import { styles } from './styles'

export function Home() {

  const [games, setGames] = useState<GameCardPros[]>([])

  const navigation = useNavigation()

  function handleOpenGame({ id, title, bannerUrl }: GameCardPros) {
    navigation.navigate('game', { id, title, bannerUrl })
  }

  useEffect(() => {
    axios('http://192.168.1.6:3333/games')
      .then(response => setGames(response.data))
  }, [])

  return (
    <Background>

      <SafeAreaView style={styles.container}>
        <Image source={LogoImg} style={styles.logo} />
        <Heading title='Encontre o seu duo' subtitle='Selecione o game que deseja jogar...' />

        <FlatList data={games} keyExtractor={item => item.id} renderItem={({ item }) => (
          <GameCard data={item} onPress={() => handleOpenGame(item)} />
        )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contenteList}
        />
      </SafeAreaView>
    </Background>

  );
}