const scene = document.getElementById('scene');
const road = document.getElementById('road');
const wheels = document.querySelectorAll('.wheel');

let speed = 4;

function changeSpeed(mode) {
  if (mode === 'down') {
    speed = 2;
    scene.classList.remove('night');
    road.style.animationDuration = "10s";
    wheels.forEach(w => w.style.animationDuration = "2s");
  } else if (mode === 'boost') {
    speed = 6;
    scene.classList.remove('night');
    road.style.animationDuration = "5s";
    wheels.forEach(w => w.style.animationDuration = "1s");
  } else if (mode === 'turbo') {
    speed = 12;
    scene.classList.add('night');
    road.style.animationDuration = "2.5s";
    wheels.forEach(w => w.style.animationDuration = "0.5s");
  }
}

// Initialize
changeSpeed('down');
