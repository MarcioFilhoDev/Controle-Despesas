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
      className="bg-[#3ff35d] w-24 p-2 rounded-lg items-center justify-center"
    >
      <DollarSign size={20} color={"#fff"} strokeWidth={2.5} />
    </TouchableOpacity>
  );
}
