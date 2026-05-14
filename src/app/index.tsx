import { ActivityIndicator, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-cinza-75">
      <Text className="text-xl font-bold">Carregando informações...</Text>
      <ActivityIndicator size={"large"} color={"#085041"} />
    </View>
  );
}
