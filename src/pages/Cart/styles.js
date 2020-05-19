import styled from 'styled-components';

export const NoProductCart = styled.section`
  margin: 20px auto;
  padding: 1rem;
  font-weight: bold;
  color: grey;
`;

export const BgSectionCart = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
`;

export const CardCartImg = styled.section`
  img {
    width: 500px;
    height: 500px;
  }
`;

export const CardCartInfoContainer = styled.section`
  display: flex;
  margin: 0 auto;
`;

export const CardCartInfo = styled.section`
  margin: 150px auto;
`;
export const CardInfoTitle = styled.h1`
  text-align: center;
  padding: 0.5rem 1rem;
`;
export const CardInfoDesc = styled.p`
  text-align: center;
  padding: 0.5rem 1rem;
`;
export const CardInfoPrice = styled.h3`
  text-align: center;
  padding: 0.5rem 1rem;
`;
export const CardInfoButton = styled.button`
  margin: 10px auto;
  background: black;
  color: white;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  display: block;
  text-decoration: none;
  text-align: center;
  padding: 1rem;
  transition: 0.2s linear;
  cursor: pointer;
  &:hover {
    background: #058cfa;
  }
`;
