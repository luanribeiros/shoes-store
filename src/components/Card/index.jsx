import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './styles';

import { getAllCards } from '../../store/fetchActions';
import { addItem } from '../../store/cart';

const Card = () => {
  const cardShoes = useSelector((state) => state.card);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCards());
  }, [dispatch]);

  const addItemCart = (card) => {
    dispatch(addItem(card));
  };

  return (
    <S.BgCard>
      {cardShoes.map((card, index) => (
        <S.Card key={index}>
          <S.ImgCardProduct src={card.url} title="" alt="" />
          <S.TitleCardProduct>{card.name}</S.TitleCardProduct>
          <S.DescCardProduct>{card.description}</S.DescCardProduct>
          <S.PriceCardProduct>R$ {card.price}</S.PriceCardProduct>
          <S.Payment>
            <S.Button onClick={() => addItemCart(card)}> Add to cart </S.Button>
          </S.Payment>
        </S.Card>
      ))}
    </S.BgCard>
  );
};

export default Card;
