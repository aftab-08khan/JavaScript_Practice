
const numbers = [2,43,1,4,32,76,89,0,89]



const largestNumberMethod2 = (numbers)=>{
    let largestNum = -Infinity
    let secondLargestNum = -Infinity
    
    
    for(let  i = 0 ; i < numbers.length ; i++ ){
        if(largestNum < numbers[i]){
            secondLargestNum = largestNum 
            largestNum = numbers[i]
        } 
    }
    return largestNum
}

console.log(largestNumberMethod2(numbers));
function largestNumber(numbers){
    const sorted = numbers.sort((a,b)=> b - a)

    return sorted[0]


}
console.log(largestNumber(numbers));
