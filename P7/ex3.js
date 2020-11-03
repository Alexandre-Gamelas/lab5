class Teste {
  constructor(nome, verbo) {
    this.nome = nome;
    this.verbo = verbo || "says"
  }

  falar(texto) {
    console.log(`${this.nome} ${this.verbo} ${texto}`)
  }

  setNome(nome) {
    this.nome = nome;
  }

  setVerbo(verbo) {
    this.verbo = verbo
  }

  getNome() {
    return this.nome
  }

  getVerbo() {
    return this.verbo
  }
}

class Shouter extends Teste {
  constructor(nome) {
    super(nome, "shouts")
  }

  falar(texto) {
    super.falar(texto.toUpperCase())
  }
}

const doc = new Shouter("doutor")
console.log("Original Name:", doc.getNome())
console.log("Original Verb:", doc.getVerbo())
doc.falar("han")
doc.setNome("azevedo")
doc.setVerbo("disse")
console.log("After Setter, Name:", doc.getNome())
console.log("After Setter, Verb:", doc.getVerbo())
doc.falar("não!")
