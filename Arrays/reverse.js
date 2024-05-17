// reverse an array with k times
// [1,2,3,4] k=3 => [2,3,4,1]

const nums=[1,2,3,4,5]

function reverse(arr,left,right){
    while(left<right){
        const temp=arr[left]
        arr[left]=arr[right]
        arr[right]=temp
        left++
        right--
    }
}


function rotatedArray(arr,k) {
    let size=arr.length
    if(k>size){
        k=k%size
    }

    // [5,4,3,2,1] => [5,4,3,2,1] => [5,1,2,3,4] with k=1
    // [5,4,3,2,1] => [4,5,3,2,1] => [4,5,1,2,3] with k=2

    reverse(arr,0,size-1)
    reverse(arr,0,k-1)
    reverse(arr,k,size-1)
    return arr
}

console.log(rotatedArray(nums,1))