import { DollarSign } from "lucide-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

interface PagarOptionProps {
  pagarDespesa: () => Promise<void>;
}

export default function PagarOptionSwipe({ pagarDespesa }: PagarOptionProps) {
  return (
    <TouchableOpacity
      onPress={pagarDespesa}
      activeOpacity={0.65}
      className="bg-[#3ed457] w-20 p-2 rounded-lg items-center justify-center"
    >
      <DollarSign size={24} color={"#fff"} strokeWidth={2.5} />
    </TouchableOpacity>
  );
}
