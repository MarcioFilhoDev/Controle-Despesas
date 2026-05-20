import CardDespesa from "@/src/components/cardDespesa";
import ModalLogout from "@/src/components/modalLogout";
import NovaDespesa from "@/src/components/novaDespesa";
import DeletarOptionSwipe from "@/src/components/options_swipe/deletar";
import PagarOptionSwipe from "@/src/components/options_swipe/pagar";
import { DespesaProps } from "@/src/types/Despesa";
import { NovaDespesaProps } from "@/src/types/NovaDespesa";
import { CirclePower, Plus } from "lucide-react-native";
import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";

interface HomeScreenProps extends NovaDespesaProps {
  mensagemInicial: string;
  listaDespesas: DespesaProps[];
  loadingListaDespesas: boolean;
  totalDespesas: number;
  deleteDespesas: (id_despesa: string) => Promise<void>;
  signOutUser: () => Promise<void>;
  pagarDespesa: (id_despesa: string) => Promise<void>;
}

export default function HomeScreen({
  mensagemInicial,
  control,
  errors,
  handleSubmit,
  isSubmitting,
  onSubmit,
  listaDespesas,
  loadingListaDespesas,
  totalDespesas,
  reset,
  deleteDespesas,
  signOutUser,
  pagarDespesa,
}: HomeScreenProps) {
  const [mostrarModalNovaDespesa, setMostrarModalNovaDespesa] =
    useState<boolean>(false);
  const [mostrarModalLogout, setMostarModalLogout] = useState<boolean>(false);

  return (
    <View
      className="flex-1 items-center bg-cinza-100/60"
      style={{ paddingTop: Number(StatusBar.currentHeight) + 20 }}
    >
      {/* Header */}
      <View className="px-5 flex flex-row gap-6 items-center mb-4">
        <Text className="text-2xl font-semibold flex-1 truncate line-clamp-1">
          {mensagemInicial}
        </Text>

        <View className="flex-row gap-4">
          {/* Botão para adicionar uma despesa */}
          <TouchableOpacity
            activeOpacity={0.75}
            className="bg-white rounded-full p-2 elevation"
            onPress={() => setMostrarModalNovaDespesa(true)}
          >
            <Text>
              <Plus size={24} />
            </Text>
          </TouchableOpacity>

          {/* Botão para fazer logout/sair */}
          <TouchableOpacity
            activeOpacity={0.75}
            className="bg-red-500 rounded-full p-2 elevation"
            onPress={() => setMostarModalLogout(true)}
          >
            <Text>
              <CirclePower size={24} color={"#fff"} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Card total */}
      <View className="flex flex-row px-5 gap-4">
        <TouchableOpacity
          activeOpacity={0.75}
          className="bg-receita-200/60 w-full h-36 flex p-6 rounded-3xl gap-4 border border-receita-600/50"
        >
          <Text className="text-xl uppercase font-medium tracking-wide text-black/70">
            Total dos seus gastos
          </Text>

          <Text className="text-2xl font-bold text-cinza-600">
            R${" "}
            <Text className="text-4xl font-bold text-cinza-900">
              {loadingListaDespesas ? (
                <ActivityIndicator size={"large"} color={"#2C2C2A"} />
              ) : (
                totalDespesas.toFixed(2)
              )}
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
            reset();
          }}
          control={control}
          errors={errors}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          onSubmit={onSubmit}
        />
      </Modal>

      {/* Modal para sair */}
      <Modal transparent visible={mostrarModalLogout} animationType="slide">
        <ModalLogout
          closeModal={() => setMostarModalLogout(false)}
          signOutUser={signOutUser}
        />
      </Modal>

      {/* Lista das despesas */}
      <View className="w-full rounded-t-[42px] flex-1 mt-4 bg-white pt-4 pb-10 ">
        {loadingListaDespesas ? (
          <View className="mt-10 items-center">
            <ActivityIndicator size={"large"} color={"#085041"} />
          </View>
        ) : listaDespesas.length === 0 ? (
          <View className="mt-10 items-center">
            <View className="bg-cinza-100/50 p-6 rounded-full">
              <Image source={require("../../assets/receipt.png")} />
            </View>
            <Text className="text-lg font-semibold mt-4">
              Você ainda não tem gastos
            </Text>

            <Text className="text-center w-[50%] text-base text-cinza-400 mt-2">
              Toque no botão de adição acima para começar sua jornada
              financeira.
            </Text>
          </View>
        ) : (
          <View className="mx-[5%] mt-4">
            <FlatList
              showsVerticalScrollIndicator={false}
              data={listaDespesas}
              renderItem={({ item }) => (
                <ReanimatedSwipeable
                  friction={2}
                  overshootRight={false}
                  renderRightActions={() => (
                    <View className="flex-row">
                      <DeletarOptionSwipe
                        id={item.id}
                        deleteDespesas={() => deleteDespesas(String(item.id))}
                      />

                      {!item.situacao && (
                        <PagarOptionSwipe
                          pagarDespesa={() => pagarDespesa(item.id)}
                        />
                      )}
                    </View>
                  )}
                >
                  <View className="">
                    <CardDespesa
                      id={item.id}
                      descricao={item.descricao}
                      valor={item.valor}
                      data_despesa={item.data_despesa}
                      situacao={item.situacao}
                      categoria={item.categoria}
                    />
                  </View>
                </ReanimatedSwipeable>
              )}
            />
          </View>
        )}
      </View>
    </View>
  );
}
