const reversed = [];
const reverseString = function(str) {
  let splitted = str.split('')
   for(let i = splitted.length - 1; i >= 0; i--){
       reversed.push(splitted[i]);
        }
        return reversed.join("");
}
}

module.exports = reverseString
