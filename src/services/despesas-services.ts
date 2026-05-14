import { supabase } from "../config/supabase";

export const DataBaseServices = {
  //  Metodo para registrar uma nova despesa
  novaDespesa: async (descricao: string, valor: number, data_despesa: Date) => {
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
      user_id: user_id,
      situacao: false,
    });

    if (error) {
      throw new Error(error.message);
    }
  },
};
