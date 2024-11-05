import * as enums from '../utils/enums/Tarefa'

//class tem a primeira letra em maiscula por ser uma class
class Tarefa {
  titulo: string
  nome: string
  contato: number
  email: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
  id: number

  constructor(
    titulo: string,
    nome: string,
    contato: number,
    email: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    descricao: string,
    id: number
  ) {
    this.titulo = titulo
    this.nome = nome
    this.contato = contato
    this.email = email
    this.prioridade = prioridade
    this.status = status
    this.descricao = descricao
    this.id = id
  }
}

export default Tarefa
