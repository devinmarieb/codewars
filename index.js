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

//check codes and expiration dates on coupons
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if(enteredCode !== correctCode) {
    return false
  }
  if(new Date(currentDate) > new Date(expirationDate)) {
    return false
  }
  else {
    return true
  }
}

//filter out even or odd outlying numbers in an array
function findOutlier(integers) {
  let odd = integers.filter(n => n % 2 !== 0)
  let even = integers.filter(n => n % 2 == 0)
  return odd.length > even.length ? even[0] : odd[0]
}
