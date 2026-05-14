import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="signin/page" options={{ headerShown: false }} />
      <Stack.Screen
        name="signup/page"
        options={{
          title: "Novo usuário",
          headerTitleStyle: { fontWeight: "bold", fontSize: 22 },
          headerStyle: {
            backgroundColor: "#9FE1CB",
          },
        }}
      />
    </Stack>
  );
}
