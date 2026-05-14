import { router, Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    const signed = false;

    requestAnimationFrame(() => {
      if (!signed) {
        router.replace("/(auth)/signin/page");
      } else {
        router.replace("/(app)/home/page");
      }
    });
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />

      <Stack.Screen name="(auth)" />

      <Stack.Screen name="(app)" />
    </Stack>
  );
}
