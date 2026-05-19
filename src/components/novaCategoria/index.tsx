import { inputTextColor } from "@/src/constants/input-text-color";
import useNovaCategoria from "@/src/hooks/useNovaCategoria";
import React from "react";
import { Controller } from "react-hook-form";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface NovaCategoriaProps {
  closeModal: () => void;
  categoriaCriada: () => Promise<void>;
}

export default function ModalNovaCategoria({
  closeModal,
  categoriaCriada,
}: NovaCategoriaProps) {
  const { control, errors, handleSubmit, isSubmitting, novaCategoria } =
    useNovaCategoria();

  return (
    <View className="bg-black/20 flex-1 items-center justify-center">
      <View className="bg-cinza-75 w-[80%] p-2 rounded">
        <Text className="text-lg font-bold">Criando nova categoria</Text>

        <Controller
          control={control}
          name="descricao"
          defaultValue=""
          render={({ field: { value, onChange } }) => (
            <View>
              <TextInput
                placeholder="exemplo: shopping"
                className="bg-white w-full pl-4 rounded border border-cinza-100"
                placeholderTextColor={inputTextColor}
                value={value}
                onChangeText={onChange}
              />

              {errors.descricao && (
                <Text className="text-red-500 text-sm mt-1">
                  {errors.descricao.message}
                </Text>
              )}

              <View className="flex-row gap-4 mt-2">
                <TouchableOpacity
                  onPress={closeModal}
                  className="bg-slate-900 px-3 py-1 rounded"
                >
                  <Text className="text-white">Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={async () => {
                    await handleSubmit(async (data) => {
                      const sucesso = await novaCategoria(data.descricao);
                      if (sucesso) {
                        await categoriaCriada();
                        closeModal();
                      }
                    })();
                  }}
                  className="bg-white px-3 py-1 rounded border-2 border-slate-800"
                >
                  <Text className="text-slate-800">Criar</Text>
                </TouchableOpacity>

                {isSubmitting && <ActivityIndicator size={"small"} />}
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}
