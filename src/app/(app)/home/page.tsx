import useGetInfoUser from "@/src/hooks/useGetInfoUser";
import useNovaDespesa from "@/src/hooks/useNovaDespesa";
import HomeScreen from "@/src/screens/home";

export default function Home() {
  const { mensagemInicial } = useGetInfoUser();
  const { control, errors, handleSubmit, isSubmitting, onSubmit } =
    useNovaDespesa();

  return (
    <HomeScreen
      mensagemInicial={mensagemInicial}
      control={control}
      errors={errors}
      handleSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      onSubmit={onSubmit}
    />
  );
}
