import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'

const Layout = ({ children }) => {
  return (
    <S.BgContainer>
      <S.BgHeader>
        <S.SectionLeft>
          <S.Title>
            <Link to="/" className="links">
              Shoe Store
            </Link>
          </S.Title>
          <S.Nav>
            <S.Ul>
              <S.A> 
                <S.Li>
                  <Link to="/about" className="links">             
                    About
                  </Link>
                </S.Li>
              </S.A>
              <S.A> 
                <S.Li>
                  <Link to="/register-product" className="links">
                    Register Product
                  </Link>
                </S.Li>
              </S.A>
            </S.Ul>
          </S.Nav>
        </S.SectionLeft>
        <S.SectionRight>
          <S.Logout>Logout</S.Logout>
          <S.Cart> Cart </S.Cart>
        </S.SectionRight>
      </S.BgHeader>
      { children }
    </S.BgContainer>
  )
}

export default Layout