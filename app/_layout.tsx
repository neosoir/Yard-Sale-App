import { Stack } from "expo-router";
import GlobalState from "../context/GlobalState";

export default function RootLayout() {
  return (
    <GlobalState>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="products" />
        <Stack.Screen name="cart" />
        <Stack.Screen name="checkout" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </GlobalState>
  );
}
