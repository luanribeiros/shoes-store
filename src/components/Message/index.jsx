import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './styles';

const Message = () => {
  const isShow = useSelector((state) => state.message.showMessage);

  return <>{isShow && <S.BoxMessage>Cadastro com Sucesso!</S.BoxMessage>}</>;
};

export default Message;
