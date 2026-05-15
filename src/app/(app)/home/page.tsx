import useGetDespesas from "@/src/hooks/useGetDespesas";
import useGetInfoUser from "@/src/hooks/useGetInfoUser";
import useNovaDespesa, { DespesaFormData } from "@/src/hooks/useNovaDespesa";
import useSignOut from "@/src/hooks/useSignOut";
import HomeScreen from "@/src/screens/home";
import { useEffect } from "react";

export default function Home() {
  const { mensagemInicial } = useGetInfoUser();
  const { control, errors, handleSubmit, isSubmitting, onSubmit, reset } =
    useNovaDespesa();
  const { signOutUser } = useSignOut();
  const {
    getDespesas,
    deleteDespesas,
    listaDespesas,
    loadingListaDespesas,
    totalDespesas,
  } = useGetDespesas();

  useEffect(() => {
    getDespesas();
  }, [getDespesas]);

  const handleNovaDespesa = async (data: DespesaFormData) => {
    await onSubmit(data);
    await getDespesas();
  };

  return (
    <HomeScreen
      mensagemInicial={mensagemInicial}
      control={control}
      errors={errors}
      handleSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      onSubmit={handleNovaDespesa}
      listaDespesas={listaDespesas}
      loadingListaDespesas={loadingListaDespesas}
      totalDespesas={totalDespesas}
      reset={reset}
      deleteDespesas={deleteDespesas}
      signOutUser={signOutUser}
    />
  );
}
