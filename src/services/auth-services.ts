import { supabase } from "../config/supabase";

export const authService = {
  signUp: async (email: string, password: string, username: string) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      //  atribuindo username a coluna 'name' da tabela public.users
      options: {
        data: {
          name: username,
        },
      },
    });

    //  Caso ocorra um erro, apresenta um erro e não crasha a aplicação
    if (error) {
      throw error;
    }

    //  Para quem chamar a função 'signUp', recebe os dados dentro de 'data'
    return data;
  },

  signOut: async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new Error(error.message);
    }

    return true;
  },

  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      throw error;
    }

    return data;
  },
};
