//image Array with src, alt text, and description
const images = [
  {
    src: "images/nature.png",
    alt: "Beautiful view of nature - Image 1",
    desc: "Beautiful view of nature - Image 1"
  },
  {
    src: "images/mountain.png",
    alt: "Mountain range during sunrise - Image 2",
    desc: "Mountain range during sunrise - Image 2"
  },
  {
    src: "images/beach.png",
    alt: "Calm beach with waves - Image 3",
    desc: "Calm beach with waves - Image 3"
  },
  {
    src: "images/city.png",
    alt: "City skyline at night - Image 4",
    desc: "City skyline at night - Image 4"
  },
  {
    src: "images/autumn.png",
    alt: "Forest path during autumn - Image 5",
    desc: "Forest path during autumn - Image 5"
  }
];

//initial index and timer setup
let index = 0;
let timer = 4;
let interval;

//get Elements
const slide = document.getElementById("slide");
const description = document.getElementById("description");
const timerDisplay = document.getElementById("timer");

//function to show current image
function showImage(i) {
  slide.src = images[i].src;
  slide.alt = images[i].alt;
  description.textContent = images[i].desc;
}

//show next image
function nextImage() {
  index = (index + 1) % images.length;
  showImage(index);
  resetTimer();
}

//previous image
function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
  resetTimer();
}

//start or restart the countdown timer
function startTimer() {
  interval = setInterval(() => {
    timer--;
    timerDisplay.textContent = timer;
    if (timer === 0) {
      nextImage(); // Automatically go to next
    }
  }, 1000);
}

//reset the timer when manually navigating
function resetTimer() {
  clearInterval(interval);
  timer = 4;
  timerDisplay.textContent = timer;
  startTimer();
}

//attach events via JavaScript
document.getElementById("next").addEventListener("click", nextImage);
document.getElementById("prev").addEventListener("click", prevImage);

//initial image load
showImage(index);
startTimer();

