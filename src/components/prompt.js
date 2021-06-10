//Write me a function that takes in an array of integers and returns to me 2 new arrays. One with all the even numbers and the other with odd numbers.

arr = [1,2,3,4,5,6,7,8]


const blah = (arr) => {
  let evens = arr.filter(y=> 
    y % 2 == 0)
  let odds = arr.filter(x=> 
    x % 2 != 0)
  console.log(evens)
  console.log(odds)
  return [evens, odds]
}

blah(arr)


// var odds = arr.filter(x=> 
//    x % 2 != 0)
// console.log(odds)

// var evens = arr.filter(y=> 
//   y % 2 == 0)
// console.log(evens)


