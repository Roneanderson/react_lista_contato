import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/Tarefa'
import Tarefa from '../../models/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  //dispatch atualiza a store
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //consumindo dados com useState
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [contato, setcontato] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    const tarefaParaAdicionar = new Tarefa(
      titulo,
      nome,
      email,
      descricao,
      contato,
      prioridade,
      enums.Status.PENDENTE,
      9
    )

    dispatch(cadastrar(tarefaParaAdicionar))
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Titulo"
        />
        <Campo
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
          type="text"
          placeholder="Descrição"
        />
        <label htmlFor="nome">Nome completo </label>
        <input
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          name="nome"
          placeholder="Digite seu nome aqui"
        />
        <label htmlFor="email">Digite seu e-mail</label>
        <input
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
        />
        <label htmlFor="contato">Digite seu contato</label>
        <input
          value={contato}
          onChange={(evento) => setcontato(evento.target.value)}
          type="number"
          name="contato"
          placeholder="Digite seu contato"
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridade)
                }
                name="prioridade"
                type="radio"
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
