function takeRight(array, n = 1) {
    if(n === 0){
        return [];
    }
    if(n > array.length){
        return[...array];
    }
    const takenRightArray = [];
    for(let i = 0; i < n; i++){
        const indexFromRight = array.length - (1 + i)
        takenRightArray.unshift(array[indexFromRight]);
    }
    return takenRightArray;
}

console.log( takeRight([1, 2, 3]) );
//[3]
console.log( takeRight([1, 2, 3], 2) );
//[2、3]
console.log(takeRight([1, 2, 3], 5));
//[1,2,3]
console.log(takeRight([1, 2, 3],0));
//[]

//unshiftの使い方と末尾から順に配列に打ち込む方程式の考え方
