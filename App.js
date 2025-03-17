import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import apiFetch from "./resources/apiFetch";

export default function App() {
  const fetchProducts = async () => {
    const query = `
      {
        products(first: 10) {
          edges {
            node {
              id
              name
              image {
                sourceUrl
              }
            }
          }
        }
      }
    `;

    const response = await apiFetch.graphqlFetch(query);
    console.log("Productos obtenidos:", response);
  };

  fetchProducts();

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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
