//ex-1
const Rest = (array) => {
  return array.slice(1)
}
console.log("Exercicio 1:", Rest([1, 2, 3]))

//ex-2
const Primeiro = (array) => {
  return array[0]
}
console.log("Exercicio 2:", Primeiro([1, 2, 3]))

//ex-3
const ExceptoUltimo = (array) => {
  array.pop()
  return array
}
console.log("Execercicio 3:", ExceptoUltimo([1, 2, 3]))

//ex-4
const Ins = (element, array) => {
  array.unshift(element)
  return array
}
console.log("Exercicio 4:", Ins("alex", ["pedro", "joão"]))

//ex-5
const Ends = (element, array) => {
  array.push(element)
  return array
}
console.log("Exercicio 5:", Ends("alex", ["pedro", "joão"]))

//ex-6 
//a)
const AddUp = (array) => {
  let total = 0;
  array.map((value, index) => {
    if (!isNaN(value))
      total += value;
  })
  return total
}
console.log("Exercicio 6/A:", AddUp([1, 2, 3.5, "gamelas"]))

//b)
const PowerOf = (array, potencia) => {
  let result = [];
  array.map((value, index) => {
    if (!isNaN(value))
      result[index] = Math.pow(value, potencia);
  })
  return result
}
console.log("Exercicio 6/B:", PowerOf([1, 2, 3.5, "vitor"], 2))

//c)
const SelectEven = (array) => {
  let result = []
  array.map((value, index) => {
    if (value % 2 == 0 && !isNaN(value))
      result.push(value);
  })
  return result
}
console.log("Exercicio 6/C:", SelectEven([1, 2, 3.5, 4, "pedro"]))

//ex-7
const toZero = (element) => {
  if (element >= 0) {
    console.log(element)
    element--;
    toZero(element)
  }
}
console.log("Exercicio 7:")
toZero(3)

//ex-8
const Somatorio = (element) => {
  let total = 0;
  for (let n = 1; n <= element; n++) {
    total += n;
  }
  return total;
}
console.log("Exercicio 8:", Somatorio(100))




