function lastIndexOf(array, value, fromIndex = array.index - 1){
    for(let i = fromIndex; 0 <= i; i--){
        if(array[i] === value){
            return i;
        }
    }
    return -1;
}

console.log( lastIndexOf([1, 2, 1, 2], 2) );
// => 3

const array = [1,2,3,4]
console.log(array.index);


// Search from the `fromIndex`.
console.log( lastIndexOf([1, 2, 1, 2], 2, 2) );
// => 1

//array.indexがあるという事を知る