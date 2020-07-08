function tail (array) {
    const newArray = [];
    for(let i = 1; i < array.length; i++){
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(tail([1,2,3,4,45,5]));
//[2,3,4,45,5]

//先頭以外をプッシュする関数
