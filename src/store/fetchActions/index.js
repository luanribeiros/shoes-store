import api from '../../services/api';
import { addCards, addCard } from '../card';

export const getAllCards = () => {
  return (dispatch) => {
    api
      .get('products')
      .then((res) => {
        dispatch(addCards(res.data));
      })
      .catch(console.log);
  };
};

export const addCardFetch = (card) => {
  return (dispatch) => {
    api
      .post('products', card)
      .then((res) => {
        dispatch(addCard(res.data));
      })
      .catch(console.log);
  };
};
