console.log("Shallow Copy Deep Copy")

// var arr1 = [1,2,3];
// arr2 = arr1;
// console.log(arr1 , arr2);
// arr1[0] = 100;
// console.log(arr1 , arr2);


// var arr3 = [100,200, {name:'Ajay'}];
// arr4 = arr3;
// console.log(arr3, arr4)

// arr3[0] = 1000;


// console.log(arr3, arr4)

// var arr3 = [100,200, {name:'Ajay'}];
// var arr4 = [1000];
// var arr5 = arr3.concat(arr4);
// console.log(arr3, arr4, arr5)

// arr3[0] = 1000;
// console.log(arr3, arr4, arr5)

// arr3[2][name]="New Delhi";

// console.log(arr3, arr4, arr5)



// var arr3 = [100,200, {name:'Ajay'}];

// arr4 = Array.from(arr3);
// console.log(arr3, arr4);

// arr3[0] = 1000;

// console.log(arr3, arr4);
// arr3[2][name]="New Delhi";
// console.log(arr3, arr4);


// DEEP COPY

var arr3 = [100,200, {name:'Ajay'}];
arr4 = JSON.stringify(arr3);
console.log(arr3, arr4);
arr3[0] = 1000;

console.log(arr3, arr4);
arr3[2][name]="New Delhi";
console.log(arr3, arr4);
