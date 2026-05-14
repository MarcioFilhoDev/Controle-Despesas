import { Text, View } from "react-native";
import "../../global.css";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Iniciando o projeto</Text>
      <Text className="text-2xl font-bold">Testando NativeWind</Text>
    </View>
  );
}
