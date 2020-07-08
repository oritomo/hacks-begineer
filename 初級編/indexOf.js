function indexOf(array, value,fromIndex = 0){
    for (let i = fromIndex; i < array.length; i++) {
        if(array[i] === value){
            return i;
        }
    }
    return -1;
}

console.log(indexOf([1,2,1,2],2));
console.log(indexOf([1,2,1,2],2,2));
console.log(indexOf([1,2,1,2],5));

//検索のループの回し方
//引数３つにも慣れてきたしデフォルト引数にも慣れてきた
