import styled from 'styled-components'

export const Title = styled.h1`
  color: black;
  margin: 2.5rem 0 0 1rem;
`

export const Form = styled.form``

export const InputProduct = styled.input`
  width: 98%;
  padding: .7rem;
  border-radius: 10px;
  margin-top: 20px;
  outline: 0;
  color: grey;
  border: 1px solid #d1d1d1;
`

export const Button = styled.button`
  width: 100%;
  background: black;
  color: white;
  border: none;
  font-weight: bold;
  display: block;
  text-decoration: none;
  text-align: center;
  padding: 1rem 0;
  margin-top: 20px;
  transition: .2s linear;
  cursor: pointer;
  &:hover {
    background: #058cfa;
  }
`