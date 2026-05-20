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

      if (!response) {
        setListaDespesas([]);
        return;
      }

      //  Somatório para obter o valor total de despesas
      const valorTotal = response?.reduce(
        (acc, item) => (item.situacao === false ? acc + item.valor : acc + 0),
        0,
      );
      //  Atribuindo a uma variavel o valor total das despesas
      setTotalDespesas(Number(valorTotal));

      //  Atribuindo lista de despesas encontradas
      setListaDespesas(response);

      //  Removendo loading da lista de despesas
      setLoadingListaDespesas(false);
    } catch (error) {
      console.log(error);
      //  Removendo loading
      setLoadingListaDespesas(false);
    }
  }, []);

  //  Deltando uma despesa especifica
  const deleteDespesas = async (id_despesa: string) => {
    try {
      await DataBaseServices.deletarDespesa(id_despesa).then(() => {
        getDespesas();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const pagarDespesa = async (id_despesa: string) => {
    try {
      await DataBaseServices.pagarDespesa(id_despesa);
      await getDespesas(); // mesma instância, funciona
    } catch (error) {
      console.log(error);
    }
  };

  return {
    listaDespesas,
    loadingListaDespesas,
    totalDespesas,
    getDespesas,
    deleteDespesas,
    pagarDespesa,
  };
};

export default useGetDespesas;
