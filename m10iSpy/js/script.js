const items = ["umbrella", "ball", "sunglasses", "bucket", "starfish"];
let foundCount = 0;

function foundItem(itemName) {
  const item = document.getElementById(itemName);
  if (item.style.textDecoration !== "line-through") {
    item.style.textDecoration = "line-through";
    foundCount++;

    if (foundCount === items.length) {
      setTimeout(() => {
        const playAgain = confirm("Congratulations! You found all items! Play again?");
        if (playAgain) {
          location.reload();
        }
      }, 300);
    }
  }
}

// Attach event listeners to each <area>
items.forEach(itemName => {
  const area = document.getElementById(itemName + "Area");
  area.addEventListener("click", function () {
    foundItem(itemName);
  });
});
