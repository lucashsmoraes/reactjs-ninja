'use strict'

const filter = (arr, func) => {
    let newArr = []
    for (let i =0; i < arr.length; i++){
        if(func(arr[i], i)){
            newArr.push(arr[i])
        }
    }
    return newArr
}

export default filter