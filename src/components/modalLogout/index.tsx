import { Text, TouchableOpacity, View } from "react-native";

interface ModalLogoutProps {
  closeModal: () => void;
  signOutUser: () => Promise<void>;
}

export default function ModalLogout({
  closeModal,
  signOutUser,
}: ModalLogoutProps) {
  return (
    <View className="flex-1 items-center justify-center">
      <TouchableOpacity
        onPress={() => closeModal()}
        className="bg-black/45 absolute flex-1 w-full h-full"
      />

      <View className="bg-cinza-50 w-[80%] p-6 rounded-lg elevation gap-6">
        <Text className="text-xl font-medium">Deseja realmente sair?</Text>

        <View className="flex-row items-center justify-end gap-2 mt-2">
          <TouchableOpacity
            className="bg-white/60 px-3 py-0.5 rounded-md border-2 border-cinza-900/70"
            onPress={() => closeModal()}
          >
            <Text className="text-cinza-900/70 font-semibold">Não</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={signOutUser}
            className="bg-white/60 px-3 py-0.5 rounded-md border-2 border-red-400"
          >
            <Text className="text-red-500 font-semibold">Sim</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
