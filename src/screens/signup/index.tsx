import { Link } from "expo-router";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react-native";
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

export default function SignUpScreen() {
  const [mostrarSenha, setMostrarSenha] = useState<boolean>(false);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex-1 items-center bg-receita-50">
          <Text className="text-2xl w-[80%] my-12 text-receita-900">
            Tenha controle dos seus gastos{" "}
            <Text className="text-2xl font-bold tracking-wide">
              em suas mãos
            </Text>
          </Text>

          {/* Campo de entrada do nome */}
          <View className="bg-white w-[80%] px-4 flex-row items-center rounded-lg border border-receita-200 mb-6">
            <User size={24} color={"#5F5E5A"} />

            <TextInput
              placeholder="nome"
              className="text-[16px] flex-1 mx-4 text-cinza-900"
              placeholderTextColor={"#888"}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

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
              secureTextEntry={mostrarSenha}
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

          {/* Botão para cadastrar */}
          <TouchableOpacity className="bg-receita-600 w-[80%] py-2 h-[42] justify-center rounded-lg mb-2">
            <Text className="text-[20px] text-center text-white font-semibold">
              Cadastrar
            </Text>
          </TouchableOpacity>

          <Link href={"/signin/page"} replace>
            Já tem uma conta? <Text className="font-medium">Faça login</Text>
          </Link>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
