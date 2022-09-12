import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface ButtonProps {
  title: string
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fala tu parça</Text>
      <Button title='batata' />
      <StatusBar style="auto" backgroundColor='purple'/>
    </View>
  )
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text style={styles.title}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 22
  }
});
