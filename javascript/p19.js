// reversing a string.
let str = "javascript";
let revStr = "";

for(i = str.length - 1; i >= 0; i--) {
    // revStr = revStr + str.charAt(i);
    revStr += str.charAt(i);
}

console.log('Reverse String = ', revStr);
