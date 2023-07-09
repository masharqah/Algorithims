/////reverseArray////
function reverseArray(arr) {
  var start = 0;
  var end = arr.length - 1; 

  while (start < end) {
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }

  console.log(arr); 
}

reverseArray ([50,40,30,20]);
reverseArray ([50,40,30,20,10]);

/////rotateArr////
function rotateArr(arr, shiftBy) {
  var length = arr.length;
  shiftBy = shiftBy % length;
  if (shiftBy === 0) {
    return arr;
  }
  if (shiftBy < 0) {
    shiftBy += length; 
  }

  for (var i = 0; i < shiftBy; i++) {
    var temp = arr[length - 1];

    for (var j = length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }

    arr[0] = temp;
  }
  console.log(arr); 
}

rotateArr([1,2,3],1)

/////filterRange/////
function filterRange(arr, min, max) {
  var i = 0; 
  for (var j = 0; j < arr.length; j++) {
    var currentValue = arr[j];
    if (currentValue >= min && currentValue <= max) {
      arr[i] = currentValue; 
      i++; 
    }
  }
  arr.length = i; 
  console.log(arr); 
}

filterRange([1, 2, 3, 4, 5], 2, 4)
filterRange([2,3,5,7,1.5,45,3.25],1,5)

/////arrConcat/////

function arrConcat(arr1, arr2) {
  var newArray = [];
  for (var i = 0; i < arr1.length; i++) {
    newArray[newArray.length] = arr1[i];
  }
  for (var j = 0; j < arr2.length; j++) {
    newArray[newArray.length] = arr2[j];
  }
  console.log (newArray);
  return newArray;
}

arrConcat(['a', 'b'], [1, 2]);
arrConcat(['a', 7, 'x'], [100, 44, 'name']);