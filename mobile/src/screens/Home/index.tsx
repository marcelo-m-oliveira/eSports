import { Image, FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoImg from '../../assets/logo-nlw-esports.png'

import { GameCard, GameCardPros } from '../../components/GameCard'
import { Heading } from '../../components/Heading/index'

import { styles } from './styles'

export function Home() {

  const [games, setGames] = useState<GameCardPros[]>([])

  useEffect(() => {
    fetch('http://192.168.1.6:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Image source={LogoImg} style={styles.logo} />
      <Heading title='Encontre o seu duo' subtitle='Selecione o game que deseja jogar...' />

      <FlatList data={games} keyExtractor={item => item.id} renderItem={({ item }) => (
        <GameCard data={item} />
      )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contenteList}
      />
    </SafeAreaView>
  );
}