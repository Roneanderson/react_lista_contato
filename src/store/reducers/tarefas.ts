import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

// tipagem
type tarefasState = {
  itens: Tarefa[]
}

//estado do initialState
const initialState: tarefasState = {
  itens: [
    {
      id: 1,
      descricao: 'estudar javasCRIPT',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCUILDA,
      titulo: 'estudar muito javaScript'
    },
    {
      id: 2,
      descricao: 'estudar java',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      titulo: 'estudar muito java'
    },
    {
      id: 3,
      descricao: 'estudar tepeScript',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'estudar muito typeScript'
    }
  ]
}

//initialState passando valor para reducer omitindo nome initialState sendo mesmo da função
const tarefasSlice = createSlice({
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
      // TarefaParaEditar = action.payload
    }, //consumindo os dados no formulario
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaJaExiste) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexTarefa >= 0) {
        state.itens[indexTarefa].status = action.payload.finalizado
          ? enums.Status.CONCUILDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions
export default tarefasSlice.reducer
