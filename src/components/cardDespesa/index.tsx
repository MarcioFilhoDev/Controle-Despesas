import { DespesaProps } from "@/src/types/Despesa";
import { ShoppingBag } from "lucide-react-native";
import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import ModalDeletandoDespesa from "../modalDeletandoDespesa";

interface CardDespesaProps extends DespesaProps {
  deleteDespesas: (id: string) => Promise<void>;
}

export default function CardDespesa({
  descricao,
  data_despesa,
  valor,
  id,
  deleteDespesas,
}: CardDespesaProps) {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <TouchableOpacity
      onLongPress={() => setShowModal(true)}
      activeOpacity={0.7}
      className="bg-white mt-4 mb-4 p-2 rounded-lg mx-[5%]"
    >
      <View>
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center gap-4">
            <Text className="bg-blue-100 p-2 rounded-md">
              <ShoppingBag size={30} color={"#518acf"} />
            </Text>

            <View>
              <Text className="text-[16px] font-bold">{descricao}</Text>

              <Text className="text-sm">
                {new Date(data_despesa).toLocaleDateString("pt-BR")}
              </Text>
            </View>
          </View>

          <Text className="text-[20px] font-semibold text-cinza-900 tracking-wide">
            - R$ <Text>{valor.toFixed(2)}</Text>
          </Text>
        </View>

        <Modal visible={showModal} transparent>
          <ModalDeletandoDespesa
            closeModal={() => setShowModal(false)}
            deleteDespesas={() => deleteDespesas(String(id))}
          />
        </Modal>
      </View>
    </TouchableOpacity>
  );
}
