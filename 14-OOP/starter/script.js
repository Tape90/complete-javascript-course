'use strict';

function countBoomerangs(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
      counter++;
    }
  }
  return counter;
}

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));

// function canNest(arr1, arr2) {
//   let isGreater,
//     isSmaller = false;

//   arr2.forEach(arr => {
//     if (arr1.find(element => element > arr)) isGreater = true;
//     if (arr1.find(element => element < arr)) isSmaller = true;
//   });
//   return isGreater, isSmaller;
// }

// 1) Arr1 min is greater than arr 2 min
// 2) Arr1 max is less than arr2 max

function canNest(arr1, arr2) {
  let arr1Max = Math.max(...arr1);
  let arr1Min = Math.min(...arr1);
  let arr2Max = Math.max(...arr2);
  let arr2Min = Math.min(...arr2);
  if (arr1Min > arr2Min && arr1Max < arr2Max) {
    return true;
  } else {
    return false;
  }
}

console.log(canNest([1, 2, 3, 4], [2, 3]));
