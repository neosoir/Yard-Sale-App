import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import api from './resources/config';


export default function App() {

  if (typeof api.get !== 'function') {
    console.error('El método api.get no está definido o la instancia no es válida');
} else {
    api.get('products')
        .then((response) => console.log(response.data))
        .catch((error) => console.error(error));
}


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app xD!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
