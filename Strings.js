////RemoveBlanks////
function removeBlanks(str) {
    var result = "";
  
    for (var i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        result += str[i];
      }
    }
  
    return result;
  }

  console.log(removeBlanks ('Hello I Am Here To Remove My Blanks '))


////getDigits////
function getDigits(str) {
    var result = "";
  
    for (var i = 0; i < str.length; i++) {
      if (!isNaN(Number(str[i]))) {
        result += str[i];
      }
    }
  
    return Number(result);
  }

  console.log(getDigits("12mdsj!klfjsdf4493lkjsd3423"))

  ////Acronyms////
  function acronym(str) {
    var words = str.split(" ");
    var acronym = "";
  
    for (var i = 0; i < words.length; i++) {
      if (words[i] !== "") {
        acronym += words[i][0].toUpperCase();
      }
    }
  
    return acronym;
  }


console.log(acronym("frequently asked questions"))

////Count Non-Spaces////
function countNonSpaces(str){
var nonspaces=0
    for (var i=0; i<str.length;i++){
        if (str[i] !== " ")
        {nonspaces++;}
}
return nonspaces;
}

console.log(countNonSpaces("hello          world   m"));

////Remove Shorter Strings////
function removeShorterStrings(arr, value){
    array= [];
    for (var i=0; i<arr.length; i++){
        if (arr[i].length>= value){
        array[array.length]=arr[i];
        }
    }
    return array;
}
result = removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4);
console.log(result);
