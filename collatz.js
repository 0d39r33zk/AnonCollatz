function populate_catalog(num_of_arrays){
    let collection = []
    for (let i=0;i<num_of_arrays;i++){
        arr = []

        collection[i]=calculateCollatz(i)
    }
    return collection
}

function calculateCollatz(n) {
    arr.push(n%2)
    if (n <= 1){
        return arr
    }else if (!(n%2)){
        return calculateCollatz(n/2)
    }else{
        return calculateCollatz(n*3+1)
    }
}

// driver code
let num_of_areas = 40
const catalog = populate_catalog(num_of_areas)
console.log(catalog)
