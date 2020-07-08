function flatten(array) {
    const flattenArray = [];
    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        console.log(value);
        console.log(flattenArray);
        
        
        if(Array.isArray(value)){
            flattenArray.push(...value);
        }else{
            flattenArray.push(value)
        }
    }
    return flattenArray;
}

const numbers = [1, [2, [3, [4]], 5]];
const result = flatten(numbers);

console.log(JSON.stringify(numbers));
// => [1, [2, [3, [4]], 5]]


console.log(JSON.stringify(result));
// => [1, 2, [3, [4]], 5]


//理解不能
//配列が外れるのがなんとなくしかわからん
//JSON.stringifyとArray.isArray()との初めての遭遇

