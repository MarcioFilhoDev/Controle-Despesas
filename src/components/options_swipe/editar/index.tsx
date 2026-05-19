import { Pencil } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function EditarOptionSwipe() {
  return (
    <TouchableOpacity
      activeOpacity={0.65}
      className="bg-lime-700 p-2 rounded-lg items-center justify-center"
    >
      <Pencil size={20} color={"#fff"} strokeWidth={2.5} />
      <Text className="text-white font-semibold">Editar</Text>
    </TouchableOpacity>
  );
}
