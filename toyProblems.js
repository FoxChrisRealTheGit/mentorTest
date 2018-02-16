//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: (str) => {
    return str.split('').reverse().join('')
  }
  ,
  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: (arr) => {
    var used = []
    for (var x = 0; x < arr.length; x += 1) {
      if (used.indexOf(arr[x]) === -1) {
        used.push(arr[x])
      }
    }
    return used
  }
  ,
  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: (str) => {
    var newStuff = []
    var letters = str.split(' ').map(x => x.charAt(0).toUpperCase())
    var strarr = str.split(' ')
    for (var x = 0; x < strarr.length; x += 1) {
      newStuff.push(letters[x] + strarr[x].slice(1))
    }
    return newStuff.join(' ')
  }
,
  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: (str)=>{
    var count = 0;
    for(var x=0; x<str.length; x+=1){
      if(/a|e|i|o|u/g.test(str[x]) === true){
        count+=1
      }
    }
    return count
  }
,
  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  //I was able to pass this, but is this truly correct or just a way around your tests?
  isPrime: (num)=>{
    if(num<1){
      return false
    }
    for(var x=2; x<num; x+=1){
      if(num%x===0){
        return false
      }
    }
    return true
  }
,
  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: "1020"
,
  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: "Hello World",
  log2: undefined
}
