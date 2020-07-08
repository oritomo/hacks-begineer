function drop(array, size = 1){
    if(array.length <= size){
        return [];
    }
    if(size === 0){
        return [...array];
    }
    const droppedArray = [];
    for (let i = size; i < array.length; i++) {
        droppedArray.push(array[i]);
    }
    return droppedArray;
}

const numbers = [1, 2, 3];

console.log( drop(numbers), numbers );
// => [2, 3]

console.log( drop(numbers, 2), numbers );
// // => [3]

console.log( drop(numbers, 5), numbers );
// // => []

console.log( drop(numbers, 0), numbers );
// // => [1, 2, 3]
