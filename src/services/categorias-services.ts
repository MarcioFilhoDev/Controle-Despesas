import { supabase } from "../config/supabase";

export const CategoriaServices = {
  //  Função para registrar uma nova categoria
  novaCategoria: async (descricao: string) => {
    const user_id = (await supabase.auth.getUser()).data.user?.id;

    const { error } = await supabase.from("categorias").insert({
      user_id: user_id,
      descricao: descricao,
    });

    if (error) throw new Error(error.message);
  },

  //    Função para buscar as categorias do usuario
  buscaCategorias: async () => {
    const user_id = (await supabase.auth.getUser()).data.user?.id;

    const { data } = await supabase
      .from("categorias")
      .select("descricao")
      .eq("user_id", user_id);

    if (!data) return;

    return data;
  },
};
