import React from 'react'
import { useSelector } from 'react-redux'
import * as S from './styles'

const Card = () => {
  
  const cardShoes = useSelector(state => state.card)
  
  return (
    <S.BgCard>
      {
        cardShoes.map((card, index) => (
          <S.Card key={index}>
            <S.ImgCardProduct src={card.url} title="" alt="" />
            <S.TitleCardProduct>{card.name}</S.TitleCardProduct>
            <S.DescCardProduct>{card.description}</S.DescCardProduct>
            <S.PriceCardProduct>{card.price}</S.PriceCardProduct>
            <S.Payment>
              <S.Button as="a" href="/"> Add to cart </S.Button>
            </S.Payment>
          </S.Card>
        ))
      }
    </S.BgCard>
  )
}

export default Card