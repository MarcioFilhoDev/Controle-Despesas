import { router, Stack } from "expo-router";
import { useEffect } from "react";
import "../../global.css";
import { supabase } from "../config/supabase";

export default function RootLayout() {
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      requestAnimationFrame(() => {
        if (session) {
          router.replace("/(app)/home/page");
        } else {
          router.replace("/(auth)/signin/page");
        }
      });
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />

      <Stack.Screen name="(auth)" />

      <Stack.Screen name="(app)" />
    </Stack>
  );
}
