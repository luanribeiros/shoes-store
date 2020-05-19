import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as S from './styles';

const Layout = ({ children }) => {
  const length = useSelector((state) => state.cart.length);

  return (
    <S.BgContainer>
      <S.BgHeader>
        <S.SectionLeft>
          <S.Title>
            <NavLink to="/" className="links">
              Product Store
            </NavLink>
          </S.Title>
          <S.Nav>
            <S.Ul>
              <S.A>
                <S.Li>
                  <NavLink to="/about" className="links">
                    About
                  </NavLink>
                </S.Li>
              </S.A>
              <S.A>
                <S.Li>
                  <NavLink to="/register-product" className="links">
                    Register Product
                  </NavLink>
                </S.Li>
              </S.A>
            </S.Ul>
          </S.Nav>
        </S.SectionLeft>
        <S.SectionRight>
          <S.Logout>Logout</S.Logout>
          <NavLink to="/cart-product" className="links">
            <S.Cart> {length} </S.Cart>
          </NavLink>
        </S.SectionRight>
      </S.BgHeader>
      {children}
    </S.BgContainer>
  );
};

export default Layout;
