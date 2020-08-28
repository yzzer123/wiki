// const jellyFish = document.querySelector(".jellyfish");
//

// [...Array(10)].forEach((_, i) => {
//   var cln = jellyFish.cloneNode(true);
//   cln.setAttribute("jelly-num", i);
//   document.querySelector(".container").appendChild(cln);
//   cln.style.left = i*100+i+5+"px";
// });

const InitBubbles = function (canvasEl, durationInSec) {
  let canvas;
  let ctx;
  let durationLimit_ms;

  const particles = [];
  let count = 100;
  let complete = false;
  let loopTime = 0;

  const update = () => particles.forEach(el => el.update());

  const resize = () => {
    ctx.canvas.width = canvas.offsetWidth;
    ctx.canvas.height = canvas.offsetHeight;
    update();
  };

  const draw = () => {
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    particles.forEach(el => el.draw());
  };
  const loop = () => {
    //  if (loopTime >= durationLimit_ms) InitBubbles.complete = true;
    draw();
    update();
    loopTime++;
    if (!InitBubbles.complete) window.requestAnimationFrame(loop);
  };

  const addParticles = () => {
    [...Array(count)].forEach(() => {
      particles.push(Bubble(canvas));
    });
  };

  const events = () => {
    window.addEventListener("resize", resize);
  };

  canvas = document.querySelector(`${canvasEl}`);
  ctx = canvas.getContext("2d");
  durationLimit_ms = durationInSec * 100;
  addParticles();
  events();
  loop();
  resize();

  return { complete: complete };
};

const Bubble = canvEl => {
  const random = (min, max) => min + Math.random() * (max - min);

  const canvas = canvEl;
  const ctx = canvas.getContext("2d");
  const height = document.body.clientHeight;

  var x = random(0, canvas.offsetWidth);
  var y = random(0, height);
  var alpha = random(0, 1);

  let fillArray = [
  "rgba(204, 246, 204,",
  "rgba(147, 224, 147, ",
  "rgba(101, 203, 101, ",
  "rgba(199, 238, 190, "];

  let fill = fillArray[Math.floor(Math.random() * fillArray.length)];
  const radius = random(0.3, 7.0);

  var i = 0;
  var easeDuration_ms = 5 * 60;

  var gravity = 2;
  var angle = random(-1, 1);
  var density = random(0, 1000);
  var speed = 0;
  var wind = 0;

  function draw() {
    ctx.beginPath();
    ctx.strokeStyle = fill + "1)";
    ctx.lineWidth = 1;

    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.fillStyle = fill + alpha + ")";
    ctx.fill();
    ctx.closePath();
  }

  const animateBubbles = () => {
    const hitTop = y < 0;
    angle += 0.02;

    if (hitTop) {
      y = height;
      x = random(0, canvas.offsetWidth);
    } else {
      y -= speed;
      x += wind;
      speed = 0.02 * (Math.cos(angle + density) + 1 + radius * 3);
      wind = 0.1 * (Math.sin(angle) * 2);
    }
  };

  const update = () => {
    animateBubbles();
  };

  return {
    update,
    draw };

};

document.addEventListener("DOMContentLoaded", () => {
  InitBubbles("#bubbles-canvas");

});