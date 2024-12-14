// import React, { useState } from 'react'
import { FormEvent, useState } from 'react'
import { Form, Input, Label } from './styles'

const initialvalue = {
  nome: '',
  email: '',
  contato: ''
}

const Formulario = () => {
  const [values, setValues] = useState(initialvalue)

  function onchange(ev: { target: { name: string; value: string } }) {
    const { name, value } = ev.target

    setValues({ ...values, [name]: value })
  }

  function onSubmit(ev: FormEvent) {
    ev.preventDefault()
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <h1>Formulário de Cadastro</h1>
        <Label htmlFor="nome">Nome</Label>
        <Input id="nome" name="nome" type="text" onChange={onchange} />

        <Label htmlFor="email">email</Label>
        <Input id="email" name="email" type="email" onChange={onchange} />

        <Label htmlFor="contato">Contato</Label>
        <Input id="contato" name="contato" type="number" onChange={onchange} />
        <button type="submit">Cadastrar</button>
      </Form>
    </>
  )
}

export default Formulario
