import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefaState = {
  itens: Tarefa[]
}

const initialState: TarefaState = {
  itens: [
    {
      titulo: 'Estudar React',
      nome: 'José Santos',
      contato: 16992203030,
      email: 'JoseSantos@teste',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      descricao: 'Praticar o useEffect',
      id: 1
    },
    {
      titulo: 'Estudar typeScript',
      nome: 'Roberto Silva',
      contato: 16992204587,
      email: 'RobertoSilva@teste',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      descricao: 'Rever aula 2 do modulo',
      id: 2
    },
    {
      titulo: 'Estudar typeScript',
      nome: 'João Silva',
      contato: 1699220256,
      email: 'joaoSilva@teste',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDA,
      descricao: 'Estudar java',
      id: 3
    }
  ]
}

const tarefaSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefaSlice.actions

export default tarefaSlice.reducer
