function findSquare() {
  const num = parseFloat(document.getElementById('numberInput').value);
  if (isNaN(num)) {
    document.getElementById('resultOutput').value = "Enter a valid number";
    return;
  }
  document.getElementById('resultOutput').value = num * num;
}

function findCube() {
  const num = parseFloat(document.getElementById('numberInput').value);
  if (isNaN(num)) {
    document.getElementById('resultOutput').value = "Enter a valid number";
    return;
  }
  document.getElementById('resultOutput').value = num * num * num;
}
