//.findIndex()
export function newFindIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        let index   = i

        let isTrue = callback(element, index)

        if (isTrue === true) {
            return i
        }
    }

    return -1
}

//.some()
export function newSome(array, callback) {
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        let index   = i

        let isTrue = callback(element, index, array)

        if (isTrue === true) {
            return true
        }
    }
    
    return false
}

//.every()
export function newEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        let index   = i

        let isTrue = callback(element, index, array)

        if (isTrue === false) {
            return false
        }
    }
    
    return true
}

//.concat()
export function newConcat(...valores) {
    let result = []

    for (let i = 0; i < valores.length; i++) {
        result.push(...valores[i])
    }

    return result
}

//.join()
export function newJoin(array, separador = ',') {
    let result = ''

    for (let i = 0; i < array.length; i++) {
        if (separador === '') {
            result += array[i]
        } 
        else {
            i === array.length - 1 ? result += array[i] : result += array[i] + separador
        }
    }

    return result
}

//.slice()
export function newSlice(array, inicio = 0, fim = array.length) {
    let result = []

    if (inicio * (-1) >= array.length || fim > array.length) {
        return array
    }

    else if (inicio < 0) {
        for (let i = array.length + inicio; i < fim; i++) {
            result.push(array[i])
        }
        return result
    }

    else if (fim < 0) {
        for (let i = inicio; i < array.length + fim; i++) {
            result.push(array[i])
        }
        return result
    }

    else {
        for (let i = inicio; i < fim; i++) {
            result.push(array[i])
        }
        return result
    } 
}

//.flat()
export function newFlat(array, depth) {
    let arr = []

    for(let i = 0; i < array.length; i++) {
        const element = array[i]

        if(Array.isArray(element) && depth > 0) {
            arr.push(...newFlat(element, depth - 1))
        }
        else {
            arr.push(element)
        }
    }

    return arr
}

//.flatMap() ??

