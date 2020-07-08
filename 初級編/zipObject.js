function zipObject(props=[],values=[]){
    console.log(props);
    console.log(values);
    const box = {}
    for(let i = 0; i < props.length; i++){
        const prop = props[i];
        const value = values[i];
        box[prop] = value;
    }
    return box;
}


console.log(zipObject(['a', 'b'], [1, 2]));
//オブジェクト扱うの難しくて笑う！！！