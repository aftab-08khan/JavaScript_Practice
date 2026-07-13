const numbers = [1,10,2,4,6,7]

function findMissingNum(numbers){

    let res= []
    let sorted = numbers.sort((a,b)=> a- b)



    return sorted

}

console.log(findMissingNum(numbers));
