function randomString(){
    let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let RandomText = "";
    for(let i = 0 ; i <arr.length; i++){
        let rt = arr[Math.floor(Math.random() * arr.length)];
        RandomText += rt;
    }
    return RandomText;
}

console.log(randomString())