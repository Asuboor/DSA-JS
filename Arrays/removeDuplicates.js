//  [0,0,1,2,2,3,4] => [0,1,2,3,4] => return length

function removeDuplicates(arr){
    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i]===arr[i+1]){
            arr.splice(i+1,1)
            i--
        }
    }
    return arr.length,arr
}

console.log(removeDuplicates([0,0,1,2,2,3,4]))