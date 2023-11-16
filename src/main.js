import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';

const listaji = document.querySelector('.products');
const sectionToBuy = document.querySelector('.cart__products');

const productsArray = async () => {
  const waiting = document.createElement('span');
  waiting.classList.add('loading');
  waiting.innerText = 'carregando...';
  listaji.appendChild(waiting);
  try {
    const array = await fetchProductsList('computador');
    listaji.removeChild(waiting);
    return array;
  } catch (error) {
    const errorElement = document.createElement('span');
    errorElement.classList.add('error');
    errorElement.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
    listaji.appendChild(errorElement);
    listaji.removeChild(waiting);
  }
};

const bbbb = await productsArray();
if (bbbb) {
  bbbb.forEach(({ id, title, thumbnail, price }) => {
    listaji.appendChild(createProductElement({
      id, title, thumbnail, price,
    }));
    return true;
  });
}
const saveItems = () => {
  getSavedCartIDs().forEach((element) => {
    fetchProduct(element).then((data) => {
      sectionToBuy.appendChild(createCartProductElement(data));
    });
  });
};
saveItems();

document.querySelector('.cep-button').addEventListener('click', searchCep);
