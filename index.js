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
  let newString = string.split('')
  return newString.reverse().join('')
}

function reverse(string) {
	let newString = ''
	for (let i = string.length - 1; i >= 0; i--) {
       newString += string[i]
    }
	return newString
}

function reverse(string) {
  if (string === '')
    return ''
  else
    return reverseString(string.substr(1)) + string.charAt(0)
}

//staircase
function stairCase(n) {
  let space = " "
  let symbol = "x"
  for(let i = 1; i <= n; i++) {
    document.write(space.repeat(n - i).concat(symbol.repeat(i)))
    document.write('<br />')
  }
}

//return string in array of twos, if not even, add '_'
function separate(str){
    let i = 0
    let finalArray = []
    if(str.length % 2 !== 0) {
        str = str.concat('_')
    }
    while(i < str.length) {
      finalArray.push(str[i] + str[i+1])
      i += 2
    }
  return finalArray;
}

//palindrome builder
function palindrome(n) {
  let num = JSON.stringify(n)
  let array = num.split('')
  let reverseNumbers = array.reverse()
  let original = n
  let reversed = parseInt(reverseNumbers.join(''))
  if(original == reversed) {
    return original
  } else {
     let answer = JSON.stringify(original).concat(JSON.stringify(reversed))
     return parseInt(answer)
  }
}

//palindrome recursively?
//function palindrome(n) {
//   let reversed = JSON.stringify(n).split('').reverse().join('')
//   let toAdd = parseInt(reversed)
//   if(n == toAdd) {
//     return n
//   } else {
//       let answer = n + toAdd
//       palindromeChainLength(answer)
//   }
// }


//learn about regex to replace instances in string
function songDecoder(song){
  let dubStep = /(WUB)+/g
  return song.replace(dubStep, ' ').trim()
}

//sort array by length of strings at index
//this one works
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length)
}
//this one doesn't... why?
function sortByLength(array) {
  return array.sort((a, b)=> {
    a.length - b.length
  })
}
