import { useState } from "react";
import {
  Keyboard,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { Link } from "expo-router";
import { Eye, EyeOff, Lock, Mail } from "lucide-react-native";

export default function SignInScreen() {
  const [mostrarSenha, setMostrarSenha] = useState<boolean>(false);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex-1 items-center justify-center bg-receita-50">
          <Text className="text-3xl w-[80%] mb-12 text-receita font-bold">
            Bem vindo de volta!
          </Text>

          {/* Campo de entrada do e-mail */}
          <View className="bg-white w-[80%] px-4 flex-row items-center rounded-lg border border-receita-200 mb-6">
            <Mail size={24} color={"#5F5E5A"} />

            <TextInput
              placeholder="e-mail"
              className="text-[16px] flex-1 mx-4 text-cinza-900"
              placeholderTextColor={"#888"}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* Campo de entrada da senha */}
          <View className="bg-white w-[80%] px-4 flex-row items-center rounded-lg border border-receita-200 mb-6">
            <Lock size={24} color={"#5F5E5A"} />

            <TextInput
              placeholder="senha"
              className="text-[16px] flex-1 mx-4 text-cinza-900"
              placeholderTextColor={"#888"}
              autoCapitalize="none"
              autoCorrect={false}
            />

            <Pressable
              onPress={() => setMostrarSenha(!mostrarSenha)}
              className="w-10 h-10 items-center justify-center"
            >
              {mostrarSenha ? (
                <EyeOff size={24} color={"#5F5E5A"} />
              ) : (
                <Eye size={24} color={"#5F5E5A"} />
              )}
            </Pressable>
          </View>

          {/* Botão para acessar */}
          <TouchableOpacity className="bg-receita-600 w-[80%] py-2 h-[42] justify-center rounded-lg mb-2">
            <Text className="text-[22px] text-center text-white font-bold">
              Acessar
            </Text>
          </TouchableOpacity>

          <Link href={"/signup/page"}>
            Ainda não tem uma conta?{" "}
            <Text className="font-medium">Cadastre-se</Text>
          </Link>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
