import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CategoriaServices } from "../services/categorias-services";

const novaCategoriaSchema = z.object({
  descricao: z.string().min(1, "O preenchimento é obrigatório."),
});

export type NovaCategoriaFormData = z.infer<typeof novaCategoriaSchema>;

const useNovaCategoria = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<NovaCategoriaFormData>({
    resolver: zodResolver(novaCategoriaSchema),
  });

  const novaCategoria = async (descricao: string) => {
    try {
      //    Buscar as categorias criadas pelo usuario em formato de array
      const response = await CategoriaServices.buscaCategorias();

      // Armazenando as categorias em uma lista
      const listaCategorias: string[] =
        response?.map((item) => item.descricao || "") ?? [];

      //    Verificar se a descrição do usuario existe na lista de categorias ja registradas
      const jaExiste = listaCategorias.some((item) => item === descricao);

      if (jaExiste) {
        setError("descricao", {
          message: "Você já tem essa categoria registrada",
        });
        return false;
      }

      await CategoriaServices.novaCategoria(descricao);
      return true;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    control,
    handleSubmit,
    errors,
    isSubmitting,
    novaCategoria,
  };
};

export default useNovaCategoria;
