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

//add all positive numbers in an array
function addPositives (arr) {
  let sum = 0
  let positives = arr.filter(n => n > 0)
  positives.map(n => sum += n)
  return sum
}

//make a phone number
function createPhoneNumber(numbers){
  let areaCode = numbers.slice(0, 3)
  let threeBlock = numbers.slice(3, 6)
  let fourBlock = numbers.slice(6, 10)
  return `(${areaCode.join('')}) ${threeBlock.join('')}-${fourBlock.join('')}`
}

//reverse a string
function reverse(string) {
	let newString = ''
	for (var i = string.length - 1; i >= 0; i--) {
       newString += string[i]
    }
	return newString
}

function reverseString(str) {
  if (str === '')
    return ''
  else
    return reverseString(str.substr(1)) + str.charAt(0)
}
