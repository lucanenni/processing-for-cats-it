// Live p5.js demos embedded in README.md. Kept in a separate file (rather
// than inline in the README) so the README stays plain markdown+HTML that
// renders cleanly when viewed directly on GitHub -- a <script> tag inside
// the README gets stripped by GitHub's markdown sanitizer, but its text
// content was left behind as visible plain text at the bottom of the page.
new p5(function(p) {
  p.setup = function() { p.createCanvas(300, 200); };
  p.draw = function() {
    p.background(240);
    p.ellipse(150, 100, 80, 80);
    p.rect(20, 20, 60, 40);
    p.line(200, 20, 260, 60);
  };
}, document.getElementById('demo-shapes'));

new p5(function(p) {
  p.setup = function() { p.createCanvas(300, 200); };
  p.draw = function() {
    p.background(20, 20, 40);
    p.noStroke();
    p.fill(255, 165, 0);
    p.ellipse(90, 100, 100, 100);
    p.fill(0, 200, 180);
    p.ellipse(210, 100, 100, 100);
  };
}, document.getElementById('demo-color'));

new p5(function(p) {
  let x = 0;
  p.setup = function() { p.createCanvas(300, 150); };
  p.draw = function() {
    p.background(240);
    x = (x + 2) % p.width;
    p.ellipse(x, 75, 40, 40);
  };
}, document.getElementById('demo-animate'));

new p5(function(p) {
  let x = 150;
  let speed = 3;
  p.setup = function() { p.createCanvas(300, 150); };
  p.draw = function() {
    p.background(240);
    x = x + speed;
    if (x > p.width || x < 0) {
      speed = speed * -1;
    }
    p.ellipse(x, 75, 40, 40);
  };
}, document.getElementById('demo-bounce'));

new p5(function(p) {
  p.setup = function() { p.createCanvas(300, 200); };
  p.draw = function() {
    p.background(240);
    p.fill(255, 100, 150);
    p.noStroke();
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
  };
}, document.getElementById('demo-mouse'));

new p5(function(p) {
  let isOrange = true;
  p.setup = function() { p.createCanvas(300, 200); };
  p.mousePressed = function() { isOrange = !isOrange; };
  p.draw = function() {
    p.background(240);
    if (isOrange) {
      p.fill(255, 165, 0);
    } else {
      p.fill(0, 200, 180);
    }
    p.ellipse(150, 100, 100, 100);
  };
}, document.getElementById('demo-click'));

new p5(function(p) {
  p.setup = function() { p.createCanvas(300, 200); };
  p.draw = function() {
    p.background(240);
    p.noStroke();
    p.fill(120, 170, 220);
    for (let x = 20; x < p.width; x = x + 40) {
      for (let y = 20; y < p.height; y = y + 40) {
        p.ellipse(x, y, 25, 25);
      }
    }
  };
}, document.getElementById('demo-grid'));

new p5(function(p) {
  p.setup = function() {
    p.createCanvas(300, 200);
    p.background(240);
  };
  p.draw = function() {
    p.noStroke();
    p.fill(255, 165, 0, 150);
    let x = p.random(p.width);
    let y = p.random(p.height);
    let size = p.random(5, 30);
    p.ellipse(x, y, size, size);
  };
}, document.getElementById('demo-random'));

new p5(function(p) {
  function drawCat(x, y, size) {
    p.noStroke();
    p.fill(90);
    p.triangle(x - size * 0.5, y - size * 0.3, x - size * 0.15, y - size * 0.9, x, y - size * 0.3);
    p.triangle(x + size * 0.5, y - size * 0.3, x + size * 0.15, y - size * 0.9, x, y - size * 0.3);
    p.fill(130);
    p.ellipse(x, y, size, size);
    p.fill(255);
    p.ellipse(x - size * 0.2, y - size * 0.05, size * 0.15, size * 0.15);
    p.ellipse(x + size * 0.2, y - size * 0.05, size * 0.15, size * 0.15);
    p.fill(20);
    p.ellipse(x - size * 0.2, y - size * 0.05, size * 0.06, size * 0.06);
    p.ellipse(x + size * 0.2, y - size * 0.05, size * 0.06, size * 0.06);
  }
  p.setup = function() { p.createCanvas(300, 200); };
  p.draw = function() {
    p.background(240);
    drawCat(80, 110, 60);
    drawCat(210, 90, 40);
  };
}, document.getElementById('demo-function'));

new p5(function(p) {
  let dots = [];
  p.setup = function() {
    p.createCanvas(300, 200);
    for (let i = 0; i < 12; i++) {
      dots.push({
        x: p.random(p.width),
        y: p.random(p.height),
        speed: p.random(1, 3)
      });
    }
  };
  p.draw = function() {
    p.background(240);
    for (let i = 0; i < dots.length; i++) {
      let d = dots[i];
      d.x = d.x + d.speed;
      if (d.x > p.width) {
        d.x = 0;
      }
      p.noStroke();
      p.fill(120, 170, 220);
      p.ellipse(d.x, d.y, 14, 14);
    }
  };
}, document.getElementById('demo-array'));
