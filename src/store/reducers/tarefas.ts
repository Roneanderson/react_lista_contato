import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefaSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar java',
      'João Silva',
      1699220256,
      'joaoSilva@teste',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Estudar java',
      1
    ),
    new Tarefa(
      'Estudar typeScript',
      'Roberto Silva',
      16992204587,
      'RobertoSilva@teste',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      'Rever aula 2 do modulo',
      2
    ),
    new Tarefa(
      'Estudar React',
      'José Santos',
      16992203030,
      'JoseSantos@teste',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'Praticar o useEffect',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefaSlice.actions

export default tarefaSlice.reducer
