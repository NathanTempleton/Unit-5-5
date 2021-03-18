let length = 0
document.getElementById('button').addEventListener('click', math)

function math() {
  length = document.getElementById('input').value
  width = length
  area = length * width
  alert(area)
}