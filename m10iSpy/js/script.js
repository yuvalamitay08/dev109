const items = ["Sun", "Beach Ball", "Hat"];
let found = [];

document.querySelectorAll("area").forEach(area => {
  area.addEventListener("click", function (e) {
    e.preventDefault();
    const name = area.title;

    if (!found.includes(name)) {
      found.push(name);
      document.getElementById(name).classList.add("line-through");
    }

    if (found.length === items.length) {
      document.getElementById("replay").hidden = false;
    }
  });
});
