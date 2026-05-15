import { DespesaFormData } from "@/src/hooks/useNovaDespesa";
import { useState } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormHandleSubmit,
} from "react-hook-form";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import CustomCalendar from "../calendarioNovaDespesa";

interface MoldaNovaDespesaProps {
  closeModal: () => void;
  control: Control<DespesaFormData>;
  errors: FieldErrors<DespesaFormData>;
  handleSubmit: UseFormHandleSubmit<DespesaFormData>;
  isSubmitting: boolean;
  onSubmit: (data: DespesaFormData) => Promise<void>;
}

export default function NovaDespesa({
  closeModal,
  control,
  errors,
  handleSubmit,
  isSubmitting,
  onSubmit,
}: MoldaNovaDespesaProps) {
  const [mostrarCalendario, setMostrarCalendario] = useState<boolean>(false);

  async function handleNovaDespesa(data: DespesaFormData) {
    await onSubmit(data);
    closeModal();
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Pressable
        onPress={closeModal}
        className="bg-black/45 absolute flex-1 w-full h-full"
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="w-full items-center"
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View className="bg-cinza-75 w-[90%] p-6 rounded-[32px]">
            <ScrollView
              contentContainerStyle={{
                padding: 24,
              }}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              <Text className="text-2xl text-cinza-900 font-bold text-center mb-4">
                Registrando uma despesa
              </Text>

              <View className="flex-col gap-4">
                {/* Campo de entrada valor da despesa */}
                <View>
                  <Text className="font-semibold text-lg text-zinc-600">
                    Valor da sua despesa
                  </Text>
                  <View className="bg-white rounded-xl flex-row items-center pl-4">
                    <Text className="text-xl font-semibold text-cinza-900">
                      R$
                    </Text>

                    <Controller
                      control={control}
                      name="valor"
                      defaultValue={""}
                      render={({ field: { value, onChange } }) => (
                        <TextInput
                          placeholder="0,00"
                          className="text-3xl h-18 font-black flex-1 ml-1 mr-4 text-black/75"
                          placeholderTextColor={"#0000005e"}
                          autoCapitalize="none"
                          autoCorrect={false}
                          keyboardType="number-pad"
                          maxLength={15}
                          value={value}
                          onChangeText={(text) => {
                            //  Primeiro converte , para .
                            let texto_formatado = text.replace(/[^0-9.,]/g, "");

                            const parts = texto_formatado.split(/[.,]/);

                            if (parts.length > 2) {
                              return;
                            }

                            onChange(texto_formatado);
                          }}
                        />
                      )}
                    />
                  </View>
                </View>

                {/* Mensagem de erro do valor */}
                <View className="w-[80%] ml-2">
                  {errors.valor && (
                    <Text className="text-left text-red-500">
                      {errors.valor?.message}
                    </Text>
                  )}
                </View>

                {/* Campo de entrada descrição da despesa */}
                <View>
                  <Text className="font-semibold text-lg text-zinc-600">
                    Descrição da sua despesa
                  </Text>

                  <Controller
                    control={control}
                    name="descricao"
                    defaultValue=""
                    render={({ field: { value, onChange } }) => (
                      <TextInput
                        placeholder="exemplo: mercado"
                        className="bg-white pl-4 h-14 text-lg rounded-xl text-black"
                        placeholderTextColor={"#0000007a"}
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={value}
                        onChangeText={onChange}
                      />
                    )}
                  />
                </View>

                {/* Mensagem de erro da descrição */}
                <View className="w-[80%] ml-2">
                  {errors.descricao && (
                    <Text className="text-left text-red-500">
                      {errors.descricao?.message}
                    </Text>
                  )}
                </View>

                {/* Campo de entrada data da despesa */}
                <View>
                  <Text className="font-semibold text-lg text-zinc-600">
                    Selecione a data da despesa
                  </Text>

                  <Controller
                    control={control}
                    name="data_despesa"
                    defaultValue={undefined}
                    render={({ field: { value, onChange } }) => (
                      <View>
                        <Pressable
                          onPress={() => setMostrarCalendario(true)}
                          className="bg-white pl-4 h-14 rounded-xl justify-center"
                        >
                          <Text
                            className="text-lg"
                            style={{
                              color: value ? "#000" : "#0000007a",
                            }}
                          >
                            {value
                              ? value.toLocaleDateString("pt-BR")
                              : "dd/mm/aaaa"}
                          </Text>
                        </Pressable>

                        {mostrarCalendario && (
                          <CustomCalendar
                            closeCalendar={() => setMostrarCalendario(false)}
                            selectDate={(date) => {
                              let data_despesa = new Date(date);
                              onChange(data_despesa);
                              setMostrarCalendario(false);
                            }}
                          />
                        )}
                      </View>
                    )}
                  />

                  {/* Mensagem de erro data da despesa */}
                  {errors.data_despesa && (
                    <View className="w-[80%] ml-2">
                      <Text className="text-left text-red-500">
                        {errors.data_despesa?.message}
                      </Text>
                    </View>
                  )}
                </View>
              </View>

              {/* Botão para salvar */}
              <TouchableOpacity
                onPress={handleSubmit(handleNovaDespesa)}
                className="bg-receita-200/70 border h-12 border-receita-400/70 items-center justify-center rounded-xl mt-6"
              >
                <Text className="text-xl text-receita-800 font-extrabold tracking-[0.4]">
                  {isSubmitting ? (
                    <ActivityIndicator color={"#0F6E56"} />
                  ) : (
                    "Salvar"
                  )}
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}
