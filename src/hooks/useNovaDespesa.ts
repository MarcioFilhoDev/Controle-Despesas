import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { DataBaseServices } from "../services/despesas-services";

//  Criando schema do formulario
const novaDespesaSchema = z.object({
  descricao: z
    .string()
    .min(1, "A descrição é obrigatória")
    .max(50, "Atingiu o limite de caracteres"),

  valor: z.string().min(1, "O valor é obrigatório"),

  data_despesa: z.date({
    error: "Data escolhida é inválida",
  }),

  categoria: z.string().min(1, "Selecione uma categoria"),
});

//  Criando e exportando a tipagem
export type DespesaFormData = z.infer<typeof novaDespesaSchema>;

const useNovaDespesa = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DespesaFormData>({
    resolver: zodResolver(novaDespesaSchema),
  });

  const onSubmit = async (data: DespesaFormData) => {
    try {
      const valorConvertido = Number(data.valor.replace(",", "."));

      await DataBaseServices.novaDespesa(
        data.descricao,
        valorConvertido,
        data.data_despesa,
        data.categoria,
      );
    } catch (error) {
      console.log(error);
    }
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    reset,
    errors,
    isSubmitting,
  };
};

export default useNovaDespesa;
