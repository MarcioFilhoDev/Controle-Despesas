import { DespesaProps } from "@/src/types/Despesa";
import {
  Fuel,
  Shirt,
  ShoppingBasket,
  UtensilsCrossed,
} from "lucide-react-native";
import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import ModalDeletandoDespesa from "../modalDeletandoDespesa";

interface CardDespesaProps extends DespesaProps {
  deleteDespesas: (id: string) => Promise<void>;
}

type CategoriaConfig = {
  icone: React.ReactNode;
  cor: string;
};

export default function CardDespesa({
  descricao,
  data_despesa,
  valor,
  id,
  situacao,
  categoria,
  deleteDespesas,
}: CardDespesaProps) {
  const [showModal, setShowModal] = useState<boolean>(false);

  const categoriaIcone: Record<string, CategoriaConfig> = {
    Abastecimento: {
      icone: <Fuel size={26} color="#f97316" />,
      cor: "bg-orange-100",
    },
    Alimentação: {
      icone: <UtensilsCrossed size={26} color="#ef4444" />,
      cor: "bg-red-100",
    },
    Roupas: {
      icone: <Shirt size={26} color="#8b5cf6" />,
      cor: "bg-purple-100",
    },
    Mercado: {
      icone: <ShoppingBasket size={26} color="#22c55e" />,
      cor: "bg-green-100",
    },
  };

  const config = categoriaIcone[categoria] ?? {
    icone: <ShoppingBasket size={26} color="#22c55e" />,
    cor: "bg-green-100",
  };

  return (
    <TouchableOpacity
      onLongPress={() => setShowModal(true)}
      activeOpacity={0.7}
      className="bg-white mt-6 mx-[5%]"
    >
      <View>
        <View
          className="flex-row border-l-[8px] py-2 rounded-l-lg "
          style={{ borderColor: situacao ? "#1D9E75" : "#dd5555" }}
        >
          <View className="flex-row items-center gap-2 ml-2">
            <Text className={`${config.cor} p-2 rounded-md`}>
              {config.icone}
            </Text>

            {/* Área descrição da despesa */}
            <View className="w-[60%] ">
              <Text
                className="text-[15px] font-bold mb-2"
                ellipsizeMode="tail"
                numberOfLines={1}
              >
                {descricao}
              </Text>

              <Text className="text-sm">
                {new Date(data_despesa).toLocaleDateString("pt-BR")}
              </Text>
            </View>
          </View>

          <Text className="text-[18px] w-[20%] flex-1 font-semibold text-cinza-900 tracking-wide">
            -R$ <Text>{valor.toFixed(2)}</Text>
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
