import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

type TarefaState = {
  itens: Tarefa[]
}
const initialState: TarefaState = {
  itens: [
    {
      nome: 'José Santos',
      contato: 16992203030,
      email: 'JoseSantos@teste',
      id: 1
    },
    {
      nome: 'José Santos',
      contato: 16992203030,
      email: 'JoseSantos@teste',
      id: 2
    },
    {
      nome: 'José Santos',
      contato: 16992203030,
      email: 'JoseSantos@teste',
      id: 3
    }
  ]
}
const tarefaSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((itens) => itens.id !== action.payload)
    }
  }
})

export const { remover } = tarefaSlice.actions

export default tarefaSlice.reducer
