import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import apiFetch from './resources/apiFetch';
import config from './resources/config';


export default function App() {


  const fetchProducts = async () => {
    const newProducts = await apiFetch.get(
      `${config.siteUrl}products?${config.wcCredentials}`,
    );
    console.log(newProducts);
    //setProducts(newProducts);
  };

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
