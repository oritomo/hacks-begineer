function uniq(array){
    const newArray = [];
    for(let i = 0; i < array.length; i++){
        const validate = array[i];
        if( !newArray.includes(validate) ){
            newArray.push(validate);
        }
    }
    return newArray;
}

const numbers = [2,1,2,3,2,2,4];

console.log(uniq(numbers));
//[2,1,3,4]

console.log(numbers);
//[2,1,2,3,2,2,4]
