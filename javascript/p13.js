function calc() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let op = document.getElementById("op").value;
    let result = 0;
    switch (op) {​​​​​​​​
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }​​​​​​​​
    document.getElementById("result").innerHTML = result;
}​​​​​​​
 