import { useCallback, useState } from "react";
import { CategoriaServices } from "../services/categorias-services";

//  Definir lista de categorias padrão
const categoriasPadrao = ["Alimentação", "Abastecimento", "Mercado", "Roupas"];

const useBuscaCategorias = () => {
  const [listaCategorias, setListaCategorias] =
    useState<string[]>(categoriasPadrao);

  const buscaCategorias = useCallback(async () => {
    const response = await CategoriaServices.buscaCategorias();
    const novas = response?.map((item) => item.descricao ?? "") ?? [];

    const semDuplicatas = novas.filter(
      (nova) => !categoriasPadrao.includes(nova),
    );
    setListaCategorias([...categoriasPadrao, ...semDuplicatas]);
  }, []);

  return {
    buscaCategorias,
    listaCategorias,
  };
};

export default useBuscaCategorias;
