const array = [];
const repeatString = function(str, num){
    for(let i = 0; i < num; i++){
       array.push(str); 
    }
    console.log(array.join(''));
}
}

module.exports = repeatString
