function fill (array, value, start = 0, end = array.length){
    for (let i = 0; i < array.length; i++) {
        if(start <= i && i < end){
            array[i] = value;
        }
    }
    return array;
}

const array = [1,2,3];
console.log( fill(array, 'a') );
//=>["a", "a", "a"]

console.log( fill(Array(3),2) );
//=>[2, 2, 2]

console.log( fill([4,6,8,10], '*',1,3) );
//=>[4, "*", "*", 10]

//この思考回路、解き方ものにしたい


