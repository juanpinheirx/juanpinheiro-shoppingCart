export const fetchProduct = async (id) => {
  if (!id) throw new Error('ID não informado');
  const datas = fetch(
    `https://api.mercadolibre.com/items/${id}`,
  )
    .then((res) => res.json())
    .then((data) => data);
  return datas;
};

export const fetchProductsList = async (query) => {
  if (!query) throw new Error('Termo de busca não informado');
  const datas = fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${query}`,
  )
    .then((res) => res.json())
    .then((data) => data.results);
  return datas;
  // } catch (error) {
  //   throw new Error('erro');
  // }
};
