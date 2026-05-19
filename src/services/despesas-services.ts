import { supabase } from "../config/supabase";
import { DespesaProps } from "../types/Despesa";

export const DataBaseServices = {
  //  Metodo para registrar uma nova despesa
  novaDespesa: async (
    descricao: string,
    valor: number,
    data_despesa: Date,
    categoria: string,
  ) => {
    // Verificar se tem o 'id' do usuario na sessão
    const { data: dados_usuario } = await supabase.auth.getUser();

    if (!dados_usuario) return;

    //  Salvando o user_id em uma variavel
    const user_id = dados_usuario.user?.id;

    const { error } = await supabase.from("despesas").insert({
      created_at: new Date(),
      descricao: descricao,
      valor_despesa: valor,
      data_despesa: data_despesa,
      categoria: categoria,
      user_id: user_id,
      situacao: false,
    });

    if (error) {
      throw new Error(error.message);
    }
  },

  //  Metodo para resgatar todas as despesas
  listaDespesas: async () => {
    // Verificar se tem o 'id' do usuario na sessão
    const { data: dados_usuario } = await supabase.auth.getUser();

    if (!dados_usuario) return;

    //  Salvando o user_id em uma variavel
    const user_id = dados_usuario.user?.id;

    const { data: despesas } = await supabase
      .from("despesas")
      .select("id, descricao, data_despesa, valor_despesa, situacao, categoria")
      .eq("user_id", user_id);

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
    // Verificar se tem o 'id' do usuario na sessão
    const { data: dados_usuario } = await supabase.auth.getUser();

    if (!dados_usuario) return;

    //  Salvando o user_id em uma variavel
    const user_id = dados_usuario.user?.id;

    //  Verificar no banco de dados se existe essa
    const { data, error } = await supabase
      .from("despesas")
      .delete()
      .eq("user_id", user_id)
      .eq("id", id);

    if (!data) return;

    if (error) {
      console.log("Erro ao deletar despesa");
      console.log(error.message);
      return;
    }
  },
};
