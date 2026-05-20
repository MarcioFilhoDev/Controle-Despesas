import { Trash } from "lucide-react-native";
import React from "react";
import { Alert, Text, TouchableOpacity } from "react-native";

interface CardDespesaProps {
  deleteDespesas: (id: string) => Promise<void>;
  id: string;
}

export default function DeletarOptionSwipe({
  deleteDespesas,
  id,
}: CardDespesaProps) {
  return (
    <TouchableOpacity
      onPress={() =>
        Alert.alert("Apagar essa despesa?", "Quer mesmo apagar esse despesa?", [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Sim",
            onPress: () => deleteDespesas(id),
          },
        ])
      }
      activeOpacity={0.65}
      className="bg-[#E83D55] w-20 p-2 rounded-lg items-center justify-center"
    >
      <Trash size={20} color={"#fff"} strokeWidth={2.5} />
      <Text className="text-white font-semibold">Deletar</Text>
    </TouchableOpacity>
  );
}
