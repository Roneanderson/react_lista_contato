import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/Tarefa'
import Tarefa from '../../models/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  //dispatch para atualizar a store
  const dispatch = useDispatch()

  // state para consumir os dados
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)
  const [nome, setNome] = useState('')
  const [contato, setContato] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    const tarefaParaAdicionar = new Tarefa(
      titulo,
      nome,
      email,
      contato,
      prioridade,
      enums.Status.PENDENTE,
      descricao,
      9
    )

    dispatch(cadastrar(tarefaParaAdicionar))
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

        <label htmlFor="nome">Digite seu nome</label>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Digite seu nome"
        />

        <label htmlFor="contato">Digite seu contato</label>
        <Campo
          value={contato}
          onChange={(evento) => setContato(evento.target.value)}
          type="number"
          name="contato"
          placeholder="Digite seu contato"
        />

        <label htmlFor="email">Digite seu email</label>
        <Campo
          value={email}
          type="email"
          onChange={(evento) => setEmail(evento.target.value)}
          name="email"
          placeholder="Digite seu email"
        />

        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)} //desestruturação
          as="textarea"
          type="text"
          placeholder="descrição da tarefa"
        />

        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridade)
                }
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
