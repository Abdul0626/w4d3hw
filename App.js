//#3
const myArray = [["Lakers, 6"], ["Hornets", 19]];

//#4
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
  for (let i = 0; i < arr.length; i += 1){
    for (let j = 0; j < arr[i].length; j += 1){
    product *= arr [i][j];
    }
  }
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


  //#5
  function testGreaterThan(val) {
    if (val > 100) { // Change this line
      return "Over 100";
    }
  
    if (val > 10) { 9 > 8 // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);
  
  
  //#6
