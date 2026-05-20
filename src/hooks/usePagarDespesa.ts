import { DataBaseServices } from "../services/despesas-services";
import useGetDespesas from "./useGetDespesas";

const usePagarDespesa = () => {
  const { getDespesas } = useGetDespesas();

  const pagarDespesa = async (id_despesa: string) => {
    try {
      await DataBaseServices.pagarDespesa(id_despesa).then(() => getDespesas());
    } catch (error) {
      console.log(error);
    }
  };

  return {
    pagarDespesa,
  };
};

export default usePagarDespesa;
