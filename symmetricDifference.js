function nAppearances (arr,x) {

    return (arr.filter((e) => e == x)).length
}
  
  function repeatedElements(arr) {
        return arr.filter((e) => nAppearances(arr,e) > 1 );
  }
  
  function removeElementsThatHaveDuplicates(joinedList,repeatedOnes) {
      return joinedList.filter( e => !repeatedOnes.includes(e))
  }

  const removeDuplicatesReduced = (accumulator, currentValue) => {
      if (!accumulator.includes(currentValue)) {
        accumulator.push(currentValue) 
      }
      return accumulator;
    };

  function removeDuplicates(arr) {
    return arr.reduce(removeDuplicatesReduced,[])
  }

  //const reducer = (accumulator, currentValue) => accumulator.concat(removeDuplicates(currentValue));

  function symmetricDifference(arr1,arr2) {
        const array1WithoutDuplicates = removeDuplicates(arr1)
        const array2WithoutDuplicates = removeDuplicates(arr2)
        const newArray = array1WithoutDuplicates.concat(array2WithoutDuplicates)
        const repeatedOnes = repeatedElements(newArray)
        const result = removeElementsThatHaveDuplicates(newArray,repeatedOnes)
        return result;
  }

  const reducer = (accumulator, currentValue) => symmetricDifference(accumulator,currentValue);

  function sym(...args) {
    const symmetricDifference = args.reduce(reducer,[]);
    console.log(symmetricDifference)
    return symmetricDifference;
  }
  



sym([1, 2, 3], [5, 2, 1, 4]);
sym([1, 2, 3, 3], [5, 2, 1, 4]);
sym([1, 2, 3], [5, 2, 1, 4], [3,3]);
sym([1, 2, 3], [5, 2, 1, 4], [3,3],[5,4]);
sym([1, 2, 5], [2, 3, 5], [3, 4, 5])

//console.log(removeDuplicates([1,2,3,3]))