//ex1
const last = (array) => {
  const lastItem = array.slice(-1)
  return lastItem[0]
}
console.log(last([1, 2, 3]))

//ex-2
let arr = [5, 7, 9]
console.log(arr.push(6)) //o novo numero de elementos do array

//ex-3
arr = [2, 3, 4]
arr.unshift(1)
arr.unshift(0)
arr.push(5)
arr.push(6)
arr.push(7)
console.log(arr)

//ex-4
let numeros = [4, 9, 7, 2, 1, 8];
var newNumber;
numeros.map((numero, index) => {
  if (numero % 2 != 0) {
    newNumber = numero * 2;
    numeros[index] = newNumber
  }
})
console.log(numeros)

//ex-5
const arrayGet = (index, array) => {
  return array[index]
}
console.log(arrayGet(2, [2, 3, 5]))