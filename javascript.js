function myFunction(a, b){
    return a + b;
}
let x=myFunction(5, 5);
document.getElementById("demo").innerHTML = x;


function myFunction(a, b){
    // Function returns the product of a and b
    return a * b;
}
// Function is called, the return value will end up in x
let x=myFunction(5, 6);
document.getElementById("demo").innerHTML = x;

//An Example
function toCelsius(f) {
    return (5/9) * (f-32);
  }
  
  let value = toCelsius(77);
  document.getElementById("well1").innerHTML = value;
    