import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

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
      id: 1
    },
    {
      titulo: 'Estudar typeScript',
      nome: 'Roberto Silva',
      contato: 16992204587,
      email: 'RobertoSilva@teste',
      id: 2
    },
    {
      titulo: 'Estudar java',
      nome: 'João Silva',
      contato: 1699220256,
      email: 'joaoSilva@teste',
      id: 3
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaJaExiste) {
        alert('já existe um email com esse nome')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    }
  }
})

export const { remover, editar, cadastrar } = tarefasSlice.actions
export default tarefasSlice.reducer
