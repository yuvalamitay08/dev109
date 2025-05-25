function createRhombus() {
  const height = parseInt(document.getElementById("rHeight").value);
  const colorEven = document.getElementById("colorEven").value;
  const colorOdd = document.getElementById("colorOdd").value;
  const symbol = document.getElementById("symbol").value;

  let rhombus = '';

  // Top half
  for (let i = 0; i < height; i++) {
    // padding to center
    rhombus += '&nbsp;'.repeat((height - i - 1));
    for (let j = 0; j < 2 * i + 1; j++) {
      let color = (j % 2 === 0) ? colorOdd : colorEven;
      rhombus += `<span style="color:${color}">${symbol}</span>`;
    }
    rhombus += '<br>';
  }

  // Bottom half
  for (let i = height - 2; i >= 0; i--) {
    // padding to center
    rhombus += '&nbsp;'.repeat((height - i - 1));
    for (let j = 0; j < 2 * i + 1; j++) {
      let color = (j % 2 === 0) ? colorOdd : colorEven;
      rhombus += `<span style="color:${color}">${symbol}</span>`;
    }
    rhombus += '<br>';
  }

  document.getElementById("rhombusOutput").innerHTML = rhombus;
}
