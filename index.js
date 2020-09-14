// Code your solution here!
function printString(str) {
  console.log(str[0])
  if (str.length > 1){
    printString(str.substring(1, str.length))
  } else {
    return true
  }
}

function reverseString(str){
  if (str.length < 2){
    return str;
  } else {
    return reverseString(str.substring(1)) + str[0]
  }
}

function isPalindrome(str) {
  if (str.length < 2) {
    return true
  } else if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.substring(1, str.length - 1))
  } else {
    return false
  }
}

function addUpTo(arr, i) {
  if (i > 0){
    return arr[i] + addUpTo(arr, --i)
  } else {
    return arr[i]
  }
}

function maxOf(arr){
  if (arr.length === 1){
    return arr[0];
  }else{
    return Math.max(arr.pop(), maxOf(arr))
  }
}

function includesNumber(arr, n) {
  console.log(arr, n)

  if (!arr.length){
    return false;
  } else if (arr[0] === n){
    return true;
  } else {
    return includesNumber(arr.slice(1), n)
  }
}
