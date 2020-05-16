import React from 'react'
import * as S from './styles'
import { useSelector } from 'react-redux'

const Message = () => {
  
  const isShow = useSelector(state => state.message.showMessage)

  return (
    <>
      {
        isShow && (
          <S.BoxMessage>
            Cadastro com Sucesso!
          </S.BoxMessage>
        )
      }
    </>
  )
}

export default Message