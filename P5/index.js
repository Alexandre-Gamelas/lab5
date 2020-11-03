//Ex1
const livros = [
  {
    titulo: "Programação Orientada a Objetos Vol1",
    autores: ["João Madeira", "Ana Silva"],
    lido: true
  },
  {
    titulo: "Aqui ao Luar ao Pé de Ti",
    autores: ["Tim"],
    lido: false
  },
  {
    titulo: "1984",
    autores: ["George Orwell"],
    lido: true
  },
  {
    titulo: "Das Kapital",
    autores: ["Karl Marx"],
    lido: true
  }
]

const listBooks = (books) => {
  books.map((book, index) => {
    book.lido ? console.log("Livro Lido:", book.titulo) : console.log("Livro Não Lido:", book.titulo)
  })
}
listBooks(livros)

//ex2
const filmes = [
  {
    titulo: "Batman",
    elenco: ["João Madeira", "Ana Silva"],
    ano: 1998
  },
  {
    titulo: "Cavalo Dinheiro",
    elenco: ["Ventura", "Vitalina"],
    ano: 2008
  },
  {
    titulo: "Taboo",
    elenco: ["Miguel Gomes"],
    ano: 2006
  },
]
const logFilme = ({ titulo, elenco, ano }) => {
  console.log("Filme -----")
  console.log("titulo:", titulo)
  console.log("Elenco:", elenco.join(", "))
  console.log("ano:", ano)
}
filmes.map((filme, index) => {
  logFilme(filme)
})

//ex-3
const dumbMultiply = (a, b, c, d, e, f) => a * b * c * d * e * f
const nums = [1, 2, 3, 4, 5, 6]
console.log(dumbMultiply(...nums))

//ex-4
const multiply = (...nums) => {
  return nums.reduce((acumulado, atual) => {
    return acumulado * atual
  })
}
console.log(multiply(1, 2, 3, 4, 5, 6, 7))

//ex-5
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const array3 = [...array1, ...array2]
console.log(array3)

//ex-6
const valores = [1, 2, 3, 4, 5]
const getMin = (array) => {
  return Math.min(...array)
}
console.log("ex 6:", "input:", valores, "output:", getMin(valores))

//ex-7


//ex-8
const song = { name: "Peachy Wedding", authors: ["gamelas", "zeca"], released: "2017", album: "surrounded by wolves" }
const showSong = ({ name, authors, released, album = "not known" }) => {
  console.log("Nome:", name)
  console.log("Authors:", authors.join(","))
  console.log("Album:", album)
  console.log("Released:", released)
}
showSong(song)