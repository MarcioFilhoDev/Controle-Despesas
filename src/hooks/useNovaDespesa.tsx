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

  valor: z
    .number()
    .positive("O valor deve ser positivo")
    .min(0.01, "Valor mínimo é 0.01"),

  data_despesa: z.date({
    error: "Data escolhida é inválida",
  }),
});

//  Criando e exportando a tipagem
export type DespesaFormData = z.infer<typeof novaDespesaSchema>;

const useNovaDespesa = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DespesaFormData>({
    resolver: zodResolver(novaDespesaSchema),
  });

  const onSubmit = async (data: DespesaFormData) => {
    try {
      await DataBaseServices.novaDespesa(
        data.descricao,
        data.valor,
        data.data_despesa,
      );
    } catch (error) {
      console.log(error);
    }
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
  };
};

export default useNovaDespesa;
