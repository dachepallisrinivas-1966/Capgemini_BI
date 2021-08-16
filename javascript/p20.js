// string palindrome or not
let str = "manam";
let revStr = "";

for(i = str.length - 1; i >= 0; i--) {
    // revStr = revStr + str.charAt(i);
    revStr += str.charAt(i);
}

if (str == revStr)
    console.log(str, ' is palindrome');
else
    console.log(str, ' is not palindrome');
