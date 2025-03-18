import { Stack } from "expo-router";
import GlobalState from "@/context/GlobalState";

export default function RootLayout() {
  return (
    <GlobalState>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
        <Stack.Screen name="products" />
        <Stack.Screen name="cart" />
        <Stack.Screen name="checkout" />
        <Stack.Screen name="product-details/[id]" options={{ headerTitle: "Detalles del Producto" }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </GlobalState>
  );
}
