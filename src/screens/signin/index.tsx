import { useState } from "react";
import {
  ActivityIndicator,
  Keyboard,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { inputTextColor } from "@/src/constants/input-text-color";
import { SignInFormData } from "@/src/hooks/useSignIn";
import { Link } from "expo-router";
import { Eye, EyeOff, HandCoins, Lock, Mail } from "lucide-react-native";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormHandleSubmit,
} from "react-hook-form";

interface SignInScreenProps {
  control: Control<SignInFormData>;
  errors: FieldErrors<SignInFormData>;
  handleSubmit: UseFormHandleSubmit<SignInFormData>;
  isSubmitting: boolean;
  onSubmit: (data: SignInFormData) => Promise<void>;
}

export default function SignInScreen({
  control,
  errors,
  handleSubmit,
  isSubmitting,
  onSubmit,
}: SignInScreenProps) {
  const [mostrarSenha, setMostrarSenha] = useState<boolean>(false);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View
          className="flex-1 items-center bg-receita-50"
          style={{ paddingTop: Number(StatusBar.currentHeight) + 50 }}
        >
          <HandCoins size={64} color={"#085041"} />

          <Text className="text-3xl w-[80%] mt-12 mb-6 scroll-my-safe-or-12 text-receita font-bold">
            Bem vindo de volta!
          </Text>

          {/* Campo de entrada do e-mail */}
          <View className="bg-white w-[80%] px-4 flex-row items-center rounded-lg border border-receita-200">
            <Mail size={24} color={"#5F5E5A"} />

            <Controller
              control={control}
              name="email"
              defaultValue=""
              render={({ field: { value, onChange } }) => (
                <TextInput
                  placeholder="e-mail"
                  className="text-[16px] flex-1 mx-4 text-cinza-900"
                  placeholderTextColor={inputTextColor}
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          </View>

          {/* Mensagem de erro do e-mail */}
          <View className="w-[80%] ml-2 mb-5">
            {errors.email && (
              <Text className="text-left text-red-500">
                {errors.email?.message}
              </Text>
            )}
          </View>

          {/* Campo de entrada da senha */}
          <View className="bg-white w-[80%] px-4 flex-row items-center rounded-lg border border-receita-200">
            <Lock size={24} color={"#5F5E5A"} />

            <Controller
              control={control}
              name="password"
              defaultValue=""
              render={({ field: { value, onChange } }) => (
                <TextInput
                  placeholder="senha"
                  className="text-[16px] flex-1 mx-4 text-cinza-900"
                  placeholderTextColor={inputTextColor}
                  autoCapitalize="none"
                  secureTextEntry={!mostrarSenha}
                  autoCorrect={false}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />

            <Pressable
              onPress={() => setMostrarSenha(!mostrarSenha)}
              className="w-10 h-10 items-center justify-center"
            >
              {!mostrarSenha ? (
                <EyeOff size={24} color={"#5F5E5A"} />
              ) : (
                <Eye size={24} color={"#5F5E5A"} />
              )}
            </Pressable>
          </View>

          {/* Mensagem de erro da senha */}
          <View className="w-[80%] ml-2 mb-5">
            {errors.password && (
              <Text className="text-left text-red-500">
                {errors.password?.message}
              </Text>
            )}
          </View>

          {/* Botão para acessar */}
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            className="bg-receita-600 w-[80%] py-2 h-[42] justify-center rounded-lg mb-2"
          >
            <Text className="text-[22px] text-center text-white font-bold">
              {isSubmitting ? <ActivityIndicator color={"#fff"} /> : "Acessar"}
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
