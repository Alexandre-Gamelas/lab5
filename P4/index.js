//ex-1
const test = "test";
//console.log(test = "error");

//ex-2
let scope = "scope";
const testScope = () => {
  let scopeLocal = "local"; //undifined
  console.log(scope);
}
//testScope();
//console.log(scopeLocal); //undifined

//ex-3
const nome = "Alex";
console.log(`o meu nome é ${nome}`)

//ex-4
const greet = (nome = "novo utilizador!") => {
  return `Bem vindo ${nome}`
}
console.log(greet())
console.log(greet("Alex"))

//ex-6
class Receita {
  constructor(nome, numeroPessoas, ingredientes) {
    this.nome = nome;
    this.numeroPessoas = numeroPessoas;
    this.ingredientes = ingredientes;
  }

  getNome() {
    return this.nome;
  }

  getNumeroPessoas() {
    return this.numeroPessoas;
  }

  getIngredientes() {
    return this.ingredientes;
  }

  printIngredientes() {
    this.ingredientes.map((ingrediente, index) => {
      console.log(ingrediente)
    })
  }
}

const bolonhesa = new Receita("bolonhesa", 5, ["massa", "carne picada", "cogumelos", "tomate"])
console.log(bolonhesa.getNome())
bolonhesa.printIngredientes()

//ex-7
const aprovados = [{ candidato: "MairaSoares", nota: 16, idade: 17 }, { candidato: "ManuelMarques", nota: 14, idade: 20 }, { candidato: "NunoGomes", nota: 15, idade: 19 }, { candidato: "PatríciaOliveira", nota: 14, idade: 21 }, { candidato: "Adriana Pedrosa", nota: 17, idade: 22 }];
const sortAprovados = (aprovados) => aprovados.sort((a, b) => a.nota === b.nota ? a.idade - b.idade : a.nota - b.nota)
console.log(sortAprovados(aprovados))