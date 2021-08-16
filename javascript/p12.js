// arithmetic operations by taking two numbers and an operator.
a = 10;
b = 5;
op = "%";

switch (op)
{
    case "+" :  c = a + b;
                console.log('sum = ',c);
                break;
    case "-" :  c = a - b;
                console.log("difference = ",c);
                break;  
    case "*" :  c = a * b;
                console.log("product = ", c);
                break;
    case "/" :  c = a / b;
                console.log("quotient = ", c);
                break;
    case "%" :  c = a % b;
                console.log("remainder = ", c);
                break;
    default  :  console.log("invalid arithmetic operation");
                break;
}
