function without(array,...values){
    const newArray = [];
    console.log(values);
    
    for(let i = 0; i < array.length; i++){
        const candidate = array[i];
        if( !values.includes(candidate) ){
            newArray.push(candidate)
        }
    }
    return newArray;
}

console.log(without([2,1,2,3,4,5],1,2))
//配列とレスト構文と含んでいるか含んでいないかの処理