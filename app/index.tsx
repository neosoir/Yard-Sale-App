// Register app entry through Expo Router
import 'expo-router/entry';
import ProductsScreen from "@/components/products/ProductsScreen"

export default function Home() {
  return (
    <ProductsScreen />
  )
}