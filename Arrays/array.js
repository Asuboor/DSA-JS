const array1=["Hi","Hello","Bye"]
const array2=["Fomo", "Lolo"]
// Concating arrays
const array=array1.concat(array2)
// console.log(array1 + " " + "Length :" +array.length)
array.push("Yoo")  // Add element
array.pop() - //Removes last element 
array.shift()  //Removes first element
array.unshift("Hello")  // Add element in beginning
array.splice(0,1,"Hi","Yolo")  // Add element in the mid
array.splice(1,3)  //Removes element with start position and count
array[1]="Bonjour"  //Replaces element at a position
const index=array.indexOf("Hi")//  finds index of element
array.sort() // sorts an array
array.reverse() // reverse an array
console.log(array + " " + "Length :"+ array.length)