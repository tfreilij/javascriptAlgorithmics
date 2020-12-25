function perm(xs) {
    let ret = [];
  
    for (let i = 0; i < xs.length; i = i + 1) {
      let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));
  
      if(!rest.length) {
        ret.push([xs[i]])
      } else {
        for(let j = 0; j < rest.length; j = j + 1) {
          ret.push([xs[i]].concat(rest[j]))
        }
      }
    }
    return ret;
  }

function  hasNoRepeatedConsecutives (indexes, string) {

    for ( let i = 0 ; i < indexes.length - 1 ; i++) {
        const current = indexes[i];
        const next = indexes[i+1]
            if ( string.charAt(current) === string.charAt(next)) {
                return false
            }
    }
    return true;
}
const testedString = "aba";
const size =  testedString.length;

const arrayOfIndexes = [...Array(size).keys()];
const permutations = perm(arrayOfIndexes);

let count = 0;
permutations.forEach( indexes => {


    if ( hasNoRepeatedConsecutives(indexes, testedString)) {
        count++;
    }
})

console.log(count);

