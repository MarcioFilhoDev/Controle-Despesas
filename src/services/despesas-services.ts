import { supabase } from "../config/supabase";
import { DespesaProps } from "../types/Despesa";

// Helper para evitar repetição em todo método
const getUserId = async (): Promise<string> => {
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) throw new Error("Usuário não autenticado");

  return data.user.id;
};

export const DataBaseServices = {
  //  Metodo para registrar uma nova despesa
  novaDespesa: async (
    descricao: string,
    valor: number,
    data_despesa: Date,
    categoria: string,
  ) => {
    const user_id = await getUserId();

    const { error } = await supabase.from("despesas").insert({
      created_at: new Date(),
      descricao: descricao,
      valor_despesa: valor,
      data_despesa: data_despesa,
      categoria: categoria,
      user_id: user_id,
      situacao: false,
    });

    if (error) throw new Error(error.message);
  },

  //  Metodo para resgatar todas as despesas
  listaDespesas: async () => {
    const user_id = await getUserId();

    const { data: despesas, error } = await supabase
      .from("despesas")
      .select("id, descricao, data_despesa, valor_despesa, situacao, categoria")
      .eq("user_id", user_id);

    if (error) throw new Error(error.message);

    if (!despesas) return [];

    let lista_despesas = despesas.map(
      (item): DespesaProps => ({
        descricao: item.descricao,
        valor: item.valor_despesa,
        data_despesa: item.data_despesa,
        id: item.id,
        situacao: item.situacao,
        categoria: item.categoria,
      }),
    );

    return lista_despesas;
  },

  deletarDespesa: async (id: string) => {
    const user_id = await getUserId();

    //  Verificar no banco de dados se existe essa
    const { error } = await supabase
      .from("despesas")
      .delete()
      .eq("user_id", user_id)
      .eq("id", id);

    if (error) throw new Error(error.message);
  },

  //  Pagar despesa
  pagarDespesa: async (id_despesa: string) => {
    const user_id = await getUserId();

    const { error } = await supabase
      .from("despesas")
      .update({ situacao: true })
      .eq("user_id", user_id)
      .eq("id", id_despesa);

    if (error) throw new Error(error.message);
  },
};
