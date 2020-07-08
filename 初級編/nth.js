function nth(array, n=0){
    // if(n >= 0){
    //     return array[n];
    // }else{
    //     return array[array.length + n];
    // }
    
    return n >= 0 ? array[n] : array[array.length + n];
}

const array = [1,2,3,4,5,6];
console.log(nth(array, 4))
//=>5
//引数二つの関数に慣れてきた感ある
