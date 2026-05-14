import NovaDespesa from "@/src/components/novaDespesa";
import { NovaDespesaProps } from "@/src/interfaces/NovaDespesa";
import { Plus } from "lucide-react-native";
import { useState } from "react";
import { Modal, StatusBar, Text, TouchableOpacity, View } from "react-native";

interface HomeScreenProps extends NovaDespesaProps {
  mensagemInicial: string;
}

export default function HomeScreen({
  mensagemInicial,
  control,
  errors,
  handleSubmit,
  isSubmitting,
  onSubmit,
}: HomeScreenProps) {
  const [mostrarModalNovaDespesa, setMostrarModalNovaDespesa] =
    useState<boolean>(false);

  return (
    <View
      className="flex-1 items-center bg-cinza-100/60"
      style={{ paddingTop: Number(StatusBar.currentHeight) + 20 }}
    >
      {/* Header */}
      <View className="w-[80%] flex flex-row gap-6 items-center mb-4">
        <Text className="text-2xl font-semibold flex-1 truncate line-clamp-1">
          {mensagemInicial}
        </Text>

        <TouchableOpacity
          activeOpacity={0.75}
          className="bg-white rounded-full p-2 elevation"
          onPress={() => setMostrarModalNovaDespesa(true)}
        >
          <Text>
            <Plus size={24} />
          </Text>
        </TouchableOpacity>
      </View>

      {/* Card total */}
      <View className="flex flex-row w-[80%] gap-4">
        <TouchableOpacity
          activeOpacity={0.75}
          className="bg-receita-200/60 w-full h-36 flex p-6 rounded-3xl gap-4 border border-receita-600/50"
        >
          <Text className="text-xl uppercase font-medium tracking-wide text-black/70">
            Total dos seus gastos
          </Text>

          <Text className="text-2xl font-bold text-cinza-800">
            R$
            <Text className="text-4xl font-bold text-cinza-900">
              {/* {loadingAllExpenses ? (
                <ActivityIndicator size={"large"} color={"#2C2C2A"} />
              ) : (
                `${totalValueExpense.toFixed(2)}`
              )} */}
              0.00
            </Text>
          </Text>
        </TouchableOpacity>
      </View>

      {/* Modal nova despesa */}
      <Modal
        transparent
        visible={mostrarModalNovaDespesa}
        animationType="slide"
      >
        <NovaDespesa
          closeModal={() => {
            setMostrarModalNovaDespesa(false);
            control._reset();
          }}
          control={control}
          errors={errors}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          onSubmit={onSubmit}
        />
      </Modal>

      {/* Lista das despesas */}
      {/* <View className="w-full rounded-t-[42px] flex-1 mt-10 bg-white ">
        {listaDespesas.length === 0 ? (
          <View className="items-center mt-6">
            <Text className="text-xl text-cinza-900 font-bold">
              Você ainda não registrou despesas
            </Text>
          </View>
        ) : (
          <View>
            <View className="mx-[5%] mt-6">
              <Text className="text-[22px] text-cinza-900 font-bold">
                Gastos Recentes
              </Text>
            </View>

            {loadingAllExpenses}
            <FlatList
              data={listaDespesas}
              renderItem={({ item, index }) => (
                <CardDespesa
                  situacao={false}
                  key={index}
                  data={item.data}
                  descricao={item.descricao}
                  valor={item.valor}
                  id={item.id}
                  onDelete={deleteExpense}
                  loadingAllExpenses={loadingAllExpenses}
                />
              )}
            />
          </View>
        )}
      </View> */}
    </View>
  );
}
