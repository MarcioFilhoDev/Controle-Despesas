import { Trash } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

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
      onPress={() => deleteDespesas(id)}
      activeOpacity={0.65}
      className="bg-[#E83D55] p-2 rounded-lg items-center justify-center"
    >
      <Trash size={20} color={"#fff"} strokeWidth={2.5} />
      <Text className="text-white font-semibold">Deletar</Text>
    </TouchableOpacity>
  );
}
