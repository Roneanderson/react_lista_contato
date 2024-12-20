import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefas'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      nome: 'Roberto silva',
      email: 'Roberto@Silva',
      contato: '16992322562'
    },
    {
      id: 2,
      nome: 'José silva',
      email: 'José@Silva',
      contato: '16992322562'
    },
    {
      id: 3,
      nome: 'João silva',
      email: 'João@Silva',
      contato: '16992322562'
    }
  ]
}

const tarefaSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexTarefa >= 0) {
        state.itens[indexTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefaSlice.actions

export default tarefaSlice.reducer
