class Tarefa {
  titulo: string
  nome: string
  contato: number
  email: string
  id: number

  constructor(
    titulo: string,
    nome: string,
    contato: number,
    email: string,
    id: number
  ) {
    this.contato = contato
    this.nome = nome
    this.email = email
    this.id = id
    this.titulo = titulo
  }
}

export default Tarefa
