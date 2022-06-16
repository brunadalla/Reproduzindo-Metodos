import { newForEach, newMap, newFilter, newFind, newIndexOf, newIncludes, newReduce} from "./metodos.js";
import { newFindIndex, newSome, newEvery, newConcat, newJoin, newSlice, newFlat } from './extras.js'


let myFruits = ["maçã", "uva", "pera"]

let myNumbers = [2, 5, 3]

//

newForEach(myFruits, (element, index, array) => {
    console.log(`Fruta: ${element}, no index: ${index}, do array: ${array}`)
}) 

//

let testeMap = newMap(myNumbers, (element, index, array) => element * 2) 
console.log(testeMap)

//

let testeFilter = newFilter(myNumbers, (element, index, array) => element > 3) 
console.log(testeFilter)

// 

let testeFind = newFind(myNumbers, (element, index, array) => element < 5)
console.log(testeFind) 

// 

let testeIndexOf = newIndexOf(myNumbers, 7)
console.log(testeIndexOf)

// 

let testeIncludes = newIncludes(myNumbers, 1)
console.log(testeIncludes)

//

let testeReduce = newReduce(myNumbers, (a, b) => a + b, 50)
console.log(testeReduce)


//EXTRAS

let testeFindIndex = newFindIndex(myNumbers, (element, index) =>  element < 5)
console.log(testeFindIndex)

//

let testeSome = newSome(myNumbers, (element, index, array) => element < 1)
console.log(testeSome)

//

let testeEvery = newEvery(myNumbers, (element, index, array) => element > 1)
console.log(testeEvery)

//

let testeConcat = newConcat(myNumbers, myFruits)
console.log(testeConcat)

//

let testeJoin = newJoin(myFruits)
console.log(testeJoin)

//

let testeSlice = newSlice(myFruits, 0, -1)
console.log(testeSlice)

//

let testeFlat = newFlat([1, 2, [3, 8, [5, 4]]], 2)
console.log(testeFlat)


