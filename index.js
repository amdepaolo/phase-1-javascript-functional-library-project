
function turnToArray(input){
    let returnArray;
    if (typeof input === 'object'){
        returnArray = Object.values(input)
        return returnArray;
    }
    else {
        returnArray = input
        return returnArray;
    }
}

function myEach(collection, callback){
    let arr = turnToArray(collection);
    for (let i = 0; i<arr.length; i++){
        callback(arr[i]);}
    return collection
}

function myMap(collection, callback){
    let arr = turnToArray(collection);
    let newArr = [];
    for (let i = 0; i<arr.length; i++){
        newArr.push(callback(arr[i]))
    }
    return newArr
}

function myReduce(collection, callback, acc){
    let arr = turnToArray(collection);
    let reduceVal;
    if(acc === undefined){
        reduceVal = arr[0]
        for (let i = 1; i<arr.length; i++){
           reduceVal = callback(reduceVal, arr[i], arr) 
        }
    }
    else {
        reduceVal = acc;
        for (let i = 0; i<arr.length; i++){
            reduceVal = callback(reduceVal, arr[i], arr) 
         }
    }
    return reduceVal
}

function myFind(collection, predicate){
    let arr = turnToArray(collection);
    for(let i = 0; i<arr.length; i++){
        if (predicate(arr[i])) return arr[i]
    }
}

function myFilter(collection, predicate){
    let arr = turnToArray(collection);
    let resultsArr = []
    for(let i = 0; i<arr.length; i++){
        if (predicate(arr[i])){
            resultsArr.push(arr[i])
        }
    }
    return resultsArr
}

function mySize(collection){
    let arr = turnToArray(collection)
    return arr.length
}

function myFirst(array, n){
    if (n === undefined)return array[0]
    else {
       return array.slice(0, n)
    }
}

function myLast(array, n){
    if (n === undefined){
        return array[array.length-1]
    }
    else{
        return array.slice(array.length-n, array.length)
    }
}

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}