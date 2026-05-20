import { useEffect, useState } from "react";
import { supabase } from "../config/supabase";

const useGetInfoUser = () => {
  const [mensagemInicial, setMensagemInicial] = useState<string>("");

  //    Atribuindo a mensagem inicial
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        const username = session.user.user_metadata?.name ?? "user";

        const horario = new Date().getHours();

        if (horario > 20 || horario <= 5) {
          setMensagemInicial(`Boa noite, ${username}.`);
        } else if (horario > 5 && horario <= 12) {
          setMensagemInicial(`Bom dia, ${username}.`);
        } else {
          setMensagemInicial(`Boa tarde, ${username}.`);
        }
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return {
    mensagemInicial,
  };
};

export default useGetInfoUser;
