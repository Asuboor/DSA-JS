const array1=["Hi","Hello","Bye"]
const array2=["Fomo", "Lolo"]
const nums=[1,2,3,4,5]
// Concating arrays
const array=array1.concat(array2)
let ai;
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
array1.map((item,index,arr)=> {return item+5}) // map function
array1.filter((item,index,arr)=>{return item === "Hello"}) //filter out item based on conditions
nums.reduce((prevValue,currValue)=>{return prevValue+currValue},0) //reduces to single value, 0 is initial value
nums.some((item,index,arr)=>{return item >3}) //returns boolean when some condition met
nums.every((item,index,arr)=>{return item>0}) //returns boolean when every condition met
nums.find((item,index,arr)=>{return item>2}) //returns just checked value but not all
nums.concat(array1) //appends 2 array w/o modifying
array1.slice(0,2) //returns 2 elements from start
array1.splice(1,2,"hi") //removes start,end index elements and adds hi in last index
array1.fill(0) //replace every element with 0
nums.findIndex((item )=> item === 2) // find index for element 2
array.flat() //flats all arrays to 1 level initially, levels can be provided in params
array.reverse() //reverses an array
array.sort((a,b)=> a-b || b-a) //sort in ascending a-b or descending b-a
console.log(ai)