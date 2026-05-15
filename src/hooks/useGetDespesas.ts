import { useCallback, useState } from "react";
import { DataBaseServices } from "../services/despesas-services";
import { DespesaProps } from "../types/Despesa";

const useGetDespesas = () => {
  const [listaDespesas, setListaDespesas] = useState<DespesaProps[]>([]);
  const [loadingListaDespesas, setLoadingListaDespesas] =
    useState<boolean>(false);
  const [totalDespesas, setTotalDespesas] = useState<number>(0);

  //  Pegando todas as despesas do usuário
  const getDespesas = useCallback(async () => {
    setLoadingListaDespesas(true);

    try {
      const response = await DataBaseServices.listaDespesas();

      //  Lógica para resgatar o valor total de despesas
      const valorTotal = response?.reduce(
        (acc, item) => (item.situacao === false ? acc + item.valor : acc + 0),
        0,
      );

      setTotalDespesas(Number(valorTotal));

      //    se 'response' vem vazio, deve passar um array vazio
      setListaDespesas(response || []);
      setLoadingListaDespesas(false);
    } catch (error) {
      console.log(error);
      setLoadingListaDespesas(false);
    }
  }, []);

  return {
    listaDespesas,
    loadingListaDespesas,
    totalDespesas,
    getDespesas,
  };
};

export default useGetDespesas;
