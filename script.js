// I set the length to 0 so it can be changed later on by the users input.
let length = 0
let area = 0
let width = 0
// This will make the document look for the element button to be clicked, which will cause math to activate.
document.getElementById('button').addEventListener('click', math)

// This function will do the math for the square by getting the users input for length, doing the math, and then displaying the area through an alert.
function math () {
  length = document.getElementById('input').value
  width = length
  area = length * width
  alert(area)
}
