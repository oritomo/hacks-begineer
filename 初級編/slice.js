function slice(array,start = 0, end = array.length) {
    const newArray = [];
    for(let i = start; i < end; i++){
        newArray.push(array[i]);
    }
    return newArray;
}

const numbers = [12,23,34,45,56,67];
const slicedNumbers = slice(numbers,1,4);
console.log(slicedNumbers);
//=>[23,34,45]
console.log(numbers);
//=> [12,23,34,45,56,67]

//sliceメソッドと同じ機能を関数で作る


