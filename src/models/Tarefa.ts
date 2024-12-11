class Tarefa {
  nome: string
  email: string
  contato: number
  id: number

  constructor(nome: string, contato: number, email: string, id: number) {
    this.nome = nome
    this.email = email
    this.contato = contato
    this.id = id
  }
}

export default Tarefa

// exportamos para o reducer de tarefas
