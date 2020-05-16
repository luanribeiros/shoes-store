import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Layout from "../../components/Layout"
import * as S from './styles'
import { addCard } from '../../store/actions'
import Message from '../../components/Message'
import { showMessage, hideMessage } from "../../store/actions"

const RegisterProduct = () => {
  
  const [form, setForm] = useState({
    url: "",
    name: "",
    description: "",
    price: ""
  })

  const dispatch = useDispatch()

  const fChange = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value
    })
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addCard(form))
    setForm({
      url: "",
      name: "",
      description: "",
      price: ""
    })
    dispatch(showMessage())
    setTimeout(() => {
      dispatch(hideMessage())
    }, 2000)
  }

  return (
    <Layout>
      <Message />
      <S.Title> Register Product </S.Title>
      <form onSubmit={onSubmit}>
        <input onChange={fChange} value={form.url} type="url" name="url" placeholder="Insert url your product" />
        <input onChange={fChange} value={form.name} type="text" name="name" placeholder="Type name your product" />
        <input onChange={fChange} value={form.description} type="text" name="description" placeholder="Type description your product" />
        <input onChange={fChange} value={form.price} type="number" name="price" placeholder="Type price your product" />
        <S.Button type="submit"> Add to cart </S.Button>
      </form>
    </Layout>
  )
}

export default RegisterProduct