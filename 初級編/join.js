function join (array, separator=',') {
    const copiedArray = [...array];

    // let newString = '';
    // for (let i = 0; i < array.length; i++) {
    //     if( i === 0){
    //         newString += copiedArray[i];
    //     }else{
    //         newString +=  separator + copiedArray[i];
    //     }
    // }

    let newString = copiedArray.shift();
    console.log(newString);//1
    console.log(copiedArray);//[2,3]
    
    for (let i = 0; i < copiedArray.length; i++) {
        console.log(newString);
        newString += separator + copiedArray[i];
    }



    return newString;


}

console.log(join( [1,2,3], '?!?'));

//shiftの使い方
//copyと接続のためだけの変数の設置
