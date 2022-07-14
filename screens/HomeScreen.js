import { Text, View, StyleSheet} from 'react-native'

// import { ListItem } from '../components/ListItem'

export function HomeScreen( navigation ) {
  return (
    <View>
      <Text>Welcome to Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create( {
  homeView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
} )