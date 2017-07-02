var grades = [10, 20, 30, 40, 50];

grades.push(60); //add at the last of the array
console.log(grades);

grades.unshift(70); //add at the beginning of the array
console.log(grades);

grades.pop(); // removes the last element in the array
console.log(grades); 

grades.shift(); // removes the first element in the array
console.log(grades);

grades.forEach(function (grade){
	console.log(grade);
});

console.log("At first index " +grades[0]);
console.log("length " ,grades.length);

//console.log(grades.reverse);

console.log("1"+2+3+4);
console.log(2+3+4+"1");