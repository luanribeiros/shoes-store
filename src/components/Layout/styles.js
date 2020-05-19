import styled from 'styled-components';

export const BgContainer = styled.section`
  max-width: 1200px;
  min-height: 100%;
  position: relative;
  margin: 0 auto;
`;
/** Header */
export const SectionLeft = styled.section`
  display: flex;
  width: 100%;
`;
export const SectionRight = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-right: 10px;
`;

export const BgHeader = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  background: black;
  border-radius: 0 0 10px 10px;
`;
export const Title = styled.h1`
  color: white;
  font-size: 1.5rem;
  padding: 1.2rem 1rem;
  text-decoration: none;
`;
export const Nav = styled.nav`
  margin-left: 5%;
`;
export const Ul = styled.ul`
  display: flex;
`;
export const A = styled.a`
  text-decoration: none;
  height: 100%;
  padding: 1.5rem;
  color: white;
  &:hover {
    background: #0474cf;
  }
`;
export const Li = styled.li``;

export const Logout = styled.section`
  color: white;
  font-weight: bold;
  margin-right: 10px;
`;

export const Cart = styled.section`
  padding: 0.5rem;
  color: black;
  margin-right: 10px;
  font-weight: bold;
  background: white;
`;
/** Closing Header */
