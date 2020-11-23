function updateInventory(arr1, arr2) {
    
    const result = arr1.map( x => x);
    arr2.forEach(e2 => {
        
        const index = result.findIndex( e1 => e1[1] === e2[1])

        if ( index == -1 ) {
            result.push(e2)
        }
        else {
            result[index][0] = result[index][0] + e2[0]
        }

    });
    
    
    return result.sort((e1, e2) => (e1[1] > e2[1]));
}

let arr1 = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]
let arr2 = [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]

const res1 = updateInventory(arr1,arr2);

console.log(res1)

/*
[[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]
*/

arr1 = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]];
arr2 = []
const res2 = updateInventory(arr1,arr2)

console.log(res2);

/*
[[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]
*/

arr1 = []
arr2 = [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]
const res3 = updateInventory(arr1,arr2)

console.log(res3);

/*
[[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]
*/

arr1 = [[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]]
arr2 = [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]
const res4 = updateInventory(arr1,arr2)

console.log(res4);

/*
[[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]
*/