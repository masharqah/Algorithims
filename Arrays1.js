//////pushFront////// 
function pushFront (a, value) {
b= [];
b[0] = value
for (var i=1 ;i< a.length+1; i++){
    b[i]= a[i-1]
}
return b;
}
x = [5,3,2,12,90]
result= pushFront (x,500)
console.log(result)

//////popFront//////
function popFront(a){
    b=[];
    for (var i=0; i< (a.length)-1; i++){
        b[i]=a[i+1];
    }
    console.log(a[0]+ "  is deleted the new array is :")
    console.log(b)
}
popFront(x);

//////insertAt//////
function insertAt(array, location, value) {
for (var i = array.length; i > location; i--) {
        array[i] = array[i - 1];
      }
array[location]=value;
console.log(array);
}

array=[1,2,3,4,5];
insertAt(array,3,100);

//////removeAt//////
function removeAt(arr, index){
    removed= arr[index];
    for (var i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
      }
    arr.length = arr.length - 1;
    console.log (removed);
    console.log (arr);
    return removed; 
}
arr= [1,2,3,4,5,6];
removeAt(arr, 2);

//////swapPairs//////
function swapPairs(arr) {
    var numPairs = Math.floor(arr.length / 2);
    for (var i = 0; i < numPairs * 2; i += 2) {
      var temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
    console.log(arr); 
  }
swapPairs ([20,10,40,30]);
swapPairs ([20,10,40,30,200]);

//////removeDuplicates//////
function removeDuplicates(arr) {
    var uniqueIndex = 0; 
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i + 1]) {
        arr[uniqueIndex] = arr[i]; 
        uniqueIndex++; 
      }
    }
    arr.length = uniqueIndex; 
    console.log(arr);
  }
  removeDuplicates([1,1,3,3,5,5,6,7,7,8,8,8,9,9])
