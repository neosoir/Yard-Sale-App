import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams(); // 🔹 Capturamos el ID desde la URL

  return (
    <View>
      <Text>Detalles del Producto</Text>
      <Text>ID del producto: {id}</Text>
    </View>
  );
};

export default ProductDetailsScreen;
