//codewars solutions

//given an array of numbers, add the two smallest
function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => {
    return a - b
  })
  return numbers[0] + numbers[1]
}

//convert number to binary and add up the 1s
function countBits(n) {
  let total = 0
  let string = (n).toString(2)
  for(let i = 0; i < string.length; i++) {
    if(string[i] == 1) {
      total++
    }
  }
  return total
}

//other solution
countBits = n => n.toString(2).split('0').join('').length;


//given an array, filter out strings and only return numbers
function filterList(list) {
  let newArr = []
  list.map((item)=> {
    if(typeof item === 'number') {
      newArr.push(item)
    }
  })
  return newArr
}

//other solution
function filterList(list) {
  return list.filter((item)=> {
    return typeof item === 'number'
  })
}
