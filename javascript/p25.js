courses = ['c', 'c++', 'core java', 'spring', 'hibernate', 'junit'];
console.log(courses);
console.log('number of courses = ', courses.length);

courses.push('ruby');
console.log(courses);

courses.pop();      // ruby is removed
courses.pop();      // junit is removed
console.log(courses);

courses.unshift('aws');
console.log(courses);

courses.shift();
console.log(courses);   // [ 'c', 'c++', 'core java', 'spring', 'hibernate' ]


courses.splice(2, 0, 'aws', 'azure', 'scala');      // adding
console.log(courses);
// [ 'c', 'c++', 'aws', 'azure', 'scala', 'core java', 'spring', 'hibernate' ]

courses.splice(5, 2);   // removing
console.log(courses);
// [ 'c', 'c++', 'aws', 'azure', 'scala', 'hibernate' ]

arr1 = [10,20,30];
arr2 = [40,50,60];
arr3 = arr1.concat(arr2);
console.log(arr3);
arr4 = [11,22,33];
arr5 = [44,55];
arr6 = [66,77];
arr7 = arr4.concat(arr5, arr6);
console.log(arr7);

arr8 = [10,20,30,40,50,60,70,80,90,100];
arr9 = arr8.slice(3,6);       // indices 3,4,5 - 40,50,60
console.log(arr9);
console.log(arr8);

arr10 = arr8.slice(5);      // from index 5 till the last index
console.log(arr10);

products = ['tv', 'refrigerator', 'microwave oven', 'sound bar'];
all_products = products.join('-');
console.log(all_products);

arr11 = ['ramesh', 'kumar', 'uma', 'abhishek', 'sravan', 'robin'];
arr11.sort();
console.log(arr11);












