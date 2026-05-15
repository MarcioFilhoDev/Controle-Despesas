import { Text, TouchableOpacity, View } from "react-native";

interface ModalDeleteExpenseProps {
  closeModal: () => void;
  deleteDespesas: () => Promise<void>;
}

export default function ModalDeletandoDespesa({
  closeModal,
  deleteDespesas,
}: ModalDeleteExpenseProps) {
  async function handleDelete() {
    await deleteDespesas();
    closeModal();
  }

  return (
    <View className="flex-1 items-center justify-center">
      <TouchableOpacity
        onPress={() => closeModal()}
        className="bg-black/45 absolute flex-1 w-full h-full"
      />

      <View className="bg-cinza-75 w-[80%] p-6 rounded-lg elevation gap-6">
        <Text className="text-lg font-medium">Deseja apagar essa despesa?</Text>

        <View className="flex-row items-center justify-end gap-2 mt-2">
          <TouchableOpacity
            className="bg-white/60 px-3 py-0.5 rounded-md border-2 border-cinza-900/70"
            onPress={() => closeModal()}
          >
            <Text className="text-cinza-900/70 font-semibold">Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleDelete}
            className="bg-white/60 px-3 py-0.5 rounded-md border-2 border-red-400"
          >
            <Text className="text-red-500 font-semibold">Apagar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
