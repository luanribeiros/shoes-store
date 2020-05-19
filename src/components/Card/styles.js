import styled from 'styled-components';

/** Card Product */
export const BgCard = styled.section`
  max-width: 1200px;
  margin-top: 40px;
  margin-bottom: 200px;
  display: flex;
  flex-wrap: wrap;
`;
export const Card = styled.section`
  max-width: 230px;
  margin: 1%;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  padding: 1.3rem;
  box-shadow: 1px 2px 5px #d1d1d1;
`;
export const ImgCardProduct = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const TitleCardProduct = styled.h2`
  padding: 1.5rem 1.2rem;
`;
export const DescCardProduct = styled.p`
  padding: 0 1.3rem;
  color: grey;
`;
export const PriceCardProduct = styled.h4`
  padding: 1.3rem 1.2rem;
  font-size: 2rem;
`;
/** Closing Card Product */

/** Button Payment */
export const Payment = styled.section`
  max-width: 250px;
`;
export const Button = styled.button`
  width: 100%;
  background: black;
  color: white;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  display: block;
  text-decoration: none;
  text-align: center;
  padding: 1rem 0;
  transition: 0.2s linear;
  cursor: pointer;
  &:hover {
    background: #058cfa;
  }
`;
/** Closing Payment */
