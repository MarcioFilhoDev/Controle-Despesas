import { SignUpFormData } from "@/src/hooks/useSignUp";
import { Link } from "expo-router";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react-native";
import { useState } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormHandleSubmit,
} from "react-hook-form";
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

interface SignUpScreenProps {
  control: Control<SignUpFormData>;
  errors: FieldErrors<SignUpFormData>;
  handleSubmit: UseFormHandleSubmit<SignUpFormData>;
  isSubmitting: boolean;
  onSubmit: (data: SignUpFormData) => Promise<void>;
}

export default function SignUpScreen({
  control,
  errors,
  handleSubmit,
  isSubmitting,
  onSubmit,
}: SignUpScreenProps) {
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
          <View className="bg-white w-[80%] px-4 flex-row items-center rounded-lg border border-receita-200 ">
            <User size={24} color={"#5F5E5A"} />

            <Controller
              control={control}
              name="username"
              defaultValue=""
              render={({ field: { value, onChange } }) => (
                <TextInput
                  placeholder="nome"
                  className="text-[16px] flex-1 mx-4 text-cinza-900"
                  placeholderTextColor={"#888"}
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          </View>

          {/* Mensagem de erro do nome */}
          <View className="w-[80%] ml-2 mb-5">
            {errors.username && (
              <Text className="text-left text-red-500">
                {errors.username?.message}
              </Text>
            )}
          </View>

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
                  placeholderTextColor={"#888"}
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
          <View className="bg-white w-[80%] px-4 flex-row items-center rounded-lg border border-receita-200 ">
            <Lock size={24} color={"#5F5E5A"} />

            <Controller
              control={control}
              name="password"
              render={({ field: { value, onChange } }) => (
                <TextInput
                  placeholder="senha"
                  className="text-[16px] flex-1 mx-4 text-cinza-900"
                  placeholderTextColor={"#888"}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={!mostrarSenha}
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

          {/* Botão para cadastrar */}
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            className="bg-receita-600 w-[80%] py-2 h-[42] justify-center rounded-lg mb-2"
          >
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
