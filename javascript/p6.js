// interchanging (swapping) two variables without using third variable
a = 7;
b = 8;

a = a + b;
b = a - b;
a = a - b;

console.log('after swapping a = ', a);
console.log('after swapping b = ', b);