function initial (array){
    const copiedArray = [...array];
    copiedArray.pop();
    return copiedArray;
}

const numbers = [1,2,3];
console.log(initial(numbers));

//pop()で配列のケツを削除
