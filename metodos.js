//.forEach()
export function newForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        let index   = i

        callback(element, index, array)
    }
}

//.map()
export function newMap(array, callback) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        let index   = i

        result.push(callback(element, index, array)) 
    }
    return result
}

//.filter()
export function newFilter(array, callback) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        let index   = i

        let isTrue = callback(element, index, array)

        if (isTrue === true) {
            result.push(element)
        }
    }
    return result
}

//.find()
export function newFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        let index   = i

        let isTrue = callback(element, index, array)

        if (isTrue === true) {
            return element
        }
    }
}

//.indexOf() 
export function newIndexOf(array, element, pontoInicial = 0) {
    if (pontoInicial < 0) {
        for (let i = array.length + meuInicio; i < array.length; i++) {
            if (array[i] === element) {
                return i
            }
        }
    }

    else if (pontoInicial >= 0) {
        for (let i = pontoInicial; i < array.length; i++) {
            if (array[i] === element) {
                return i
            }
        }    
    }
    
    return -1
}

//.includes()
export function newIncludes(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true
        }
    }
    
    return false
}

//.reduce() 
export function newReduce(array, callback, acc = 0) {
    let retorno = acc
    for (let i = 0; i < array.length; i++) {
        let currentValue =  array[i]
        let previousValue = retorno 
        retorno = callback(previousValue, currentValue)
    }
    return retorno
}