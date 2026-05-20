import { DespesaProps } from "@/src/types/Despesa";
import {
  Fuel,
  Shirt,
  ShoppingBasket,
  UtensilsCrossed,
} from "lucide-react-native";
import { Text, View } from "react-native";

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
}: DespesaProps) {
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

  //  Icone padrão
  const config = categoriaIcone[categoria] ?? {
    icone: <ShoppingBasket size={26} color="#22c55e" />,
    cor: "bg-green-100",
  };

  return (
    <View
      className="bg-white px-4 py-4"
      style={{
        elevation: 2,
      }}
    >
      <View
        className="flex-row items-center justify-between border-l-4 pl-3"
        style={{
          borderColor: situacao ? "#1D9E75" : "#ef4444",
        }}
      >
        <View className="flex-row items-center flex-1">
          <View
            className={`${config.cor} w-14 h-14 rounded-2xl items-center justify-center`}
          >
            {config.icone}
          </View>

          <View className="ml-3 flex-1">
            <Text
              className="text-base font-semibold text-zinc-800"
              numberOfLines={1}
            >
              {descricao}
            </Text>

            <Text className="text-sm text-zinc-500 mt-1">
              {new Date(data_despesa).toLocaleDateString("pt-BR")}
            </Text>
          </View>
        </View>

        <Text className="text-lg font-bold text-zinc-900 ml-3">
          {valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Text>
      </View>
    </View>
  );
}
