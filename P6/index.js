//Ex-1
const numSet = new Set()
numSet.add(1)
numSet.add(2)
numSet.add(3)
const setToArray = (set) => {
  return [...set]
}
console.log("Ex 1:", setToArray(numSet))

//Ex-2
const numSet2 = new Set()
numSet2.add(3)
numSet2.add(4)
numSet2.add(5)
numSet2.add(6)
const joinSets = (set1, set2) => {
  const joinedSet = new Set()
  set1.forEach(element => {
    joinedSet.add(element)
  });

  set2.forEach(element => {
    joinedSet.add(element)
  })

  return joinedSet
}
console.log("Ex 2:", joinSets(numSet, numSet2))

//ex-3
const intersectionSets = (set1, set2) => {
  const intersection = new Set([...set1].filter(x => set2.has(x)));
  return intersection
}
console.log("Ex 3:", intersectionSets(numSet, numSet2))

//ex-4
const deleteDouble = (array) => {
  let returnSet = new Set()
  array.map(value => {
    if (!returnSet.has(value))
      returnSet.add(value)
  })
  return returnSet
}
const arrayDouble = [1, 1, 2, 2, 3, 4]
console.log("Ex 4:", deleteDouble(arrayDouble))

//ex-5
const carro1_fam1 = {
  marca: "Vovlo",
  matricula: "12-12-NA",
  cor: "azul",
  km: "127 000",
  consumo: "6.0"
}

const carro2_fam1 = {
  marca: "Renault",
  matricula: "14-12-BA",
  cor: "cinzento",
  km: "10 000",
  consumo: "5.0"
}

const carrosFam1 = new Set()
carrosFam1.add(carro1_fam1)
carrosFam1.add(carro2_fam1)

const carro1_fam2 = {
  marca: "Mercedes",
  matricula: "01-07-VF",
  cor: "preto",
  km: "327 000",
  consumo: "8.0"
}

const carro2_fam2 = {
  marca: "Opel",
  matricula: "78-09-LZ",
  cor: "roxo",
  km: "15 000",
  consumo: "5.0"
}

const carrosFam2 = new Set()
carrosFam1.add(carro1_fam2)
carrosFam1.add(carro2_fam2)
console.log("Ex 5:", joinSets(carrosFam1, carrosFam2))

//ex-6
const aluno1 = {
  nome: "Gamelas",
  numero: "89584",
  morada: "Alboi",
  media: 16.3
}

const aluno2 = {
  nome: "Filomena",
  numero: "59482",
  morada: "Feira",
  media: 14
}

const aluno3 = {
  nome: "Joana",
  numero: "16584",
  morada: "Cantanhede",
  media: 13.3
}

const aluno4 = {
  nome: "Pedro",
  numero: "42581",
  morada: "Porto",
  media: 15.5
}

const aluno5 = {
  nome: "Vera",
  numero: "14624",
  morada: "Madrid",
  media: 12.3
}
const alunos = new Map()
alunos.set(1, aluno1)
alunos.set(2, aluno2)
alunos.set(3, aluno3)
alunos.set(4, aluno4)
alunos.set(5, aluno5)

const bestAverage = (alunos) => {
  let bestStudent;
  alunos.forEach((aluno, key) => {
    if (key == 1)
      bestStudent = aluno
    else if (aluno.media > bestStudent.media)
      bestStudent = aluno
  })
  return bestStudent
}
console.log("Ex 6:", bestAverage(alunos))

//ex-7
//se a referência/chave for destruida a entrada correspondente vai ser eliminada no WeekMap. Otimização de memoria