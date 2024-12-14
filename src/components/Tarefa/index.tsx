import { useState } from 'react' //dependencia externa
import { useDispatch } from 'react-redux' // dependencia externa

import { remover, editar } from '../../store/reducers/tarefas'

import TarefaClass from '../../models/Tarefa'
import { Botao, BotaoSalvar } from '../../styles'
import { Form } from 'react-router-dom'
import { Input, Label } from '../../containers/Formulario/styles'

type Props = TarefaClass

const Tarefa = ({ contato, email, titulo, nome, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <div>
      <label htmlFor={titulo}>
        <input type="checkbox" id={titulo} />
        <h1>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </h1>
      </label>

      <div>
        <Form>
          <h1>Formulário de Cadastro</h1>
          <Label htmlFor="titulo">{titulo}</Label>
          <Input id="titulo" name="titulo" type="text" />

          <Label htmlFor="nome">{nome}</Label>
          <Input id="nome" name="nome" type="text" />

          <Label htmlFor="email">{email}</Label>
          <Input id="email" name="email" type="email" />

          <Label htmlFor="contato">{contato}</Label>
          <Input id="contato" name="contato" type="number" />
        </Form>
      </div>

      <div>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    contato,
                    email,
                    titulo,
                    nome,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <button>Cancelar</button>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <Botao onClick={() => dispatch(remover(id))}>Remover</Botao>
          </>
        )}
      </div>
    </div>
  )
}

export default Tarefa
