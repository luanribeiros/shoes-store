import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../store/cart';

import Layout from '../../components/Layout';
import * as S from './styles';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeItemCart = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <Layout>
      <S.BgSectionCart>
        {cart.length === 0 ? (
          <S.NoProductCart> No Product in Cart </S.NoProductCart>
        ) : (
          <>
            {cart.map((item, index) => (
              <S.CardCartInfoContainer key={index}>
                <S.CardCartImg>
                  <img src={item.url} title={item.name} alt={item.name} />
                </S.CardCartImg>
                <S.CardCartInfo>
                  <S.CardInfoTitle> {item.name} </S.CardInfoTitle>
                  <S.CardInfoDesc> {item.description} </S.CardInfoDesc>
                  <S.CardInfoPrice> R$ {item.price} </S.CardInfoPrice>
                  <S.CardInfoButton> Check-out </S.CardInfoButton>
                  <S.CardInfoButton onClick={() => removeItemCart(item._id)}>
                    {' '}
                    Remove from cart{' '}
                  </S.CardInfoButton>
                </S.CardCartInfo>
              </S.CardCartInfoContainer>
            ))}
          </>
        )}
      </S.BgSectionCart>
    </Layout>
  );
};

export default Cart;
