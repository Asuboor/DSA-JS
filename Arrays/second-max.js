// Find 2nd largest no.

// input=[12,35,1,10,34,1]
// input=[10,5,10]

function SecondLargest(arr){

    l1=Number.NEGATIVE_INFINITY //12 35
    l2=Number.NEGATIVE_INFINITY //-1 12

    for(let i=0;i<arr.length;i++){
        if(arr[i]>l1){
            l2=l1
            l1=arr[i]
        }
        else if(arr[i] != l1 && arr[i]>l2){
            l2=arr[i]
        }
    }
    return l2;
}

console.log(SecondLargest([10,5,10,5,8]))