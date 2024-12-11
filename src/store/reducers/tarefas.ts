import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa('Roberto', 16992523225, 'Roberto@Silva', 1),
    new Tarefa('Roberto', 16992523225, 'Roberto@Silva', 2),
    new Tarefa('Roberto', 16992523225, 'Roberto@Silva', 3)
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice
