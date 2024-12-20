class Tarefa {
  nome: string
  email: string
  contato: string
  id: number

  constructor(nome: string, email: string, contato: string, id: number) {
    this.nome = nome
    this.email = email
    this.contato = contato
    this.id = id
  }
}

export default Tarefa
