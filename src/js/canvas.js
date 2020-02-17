import utils from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

// Objects
class Ball {
  constructor(x, y, dy, dyMove, distance, radius, color) {
    this.x = x;
    this.y = y;
    this.oldX = x;
    this.oldY = y;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.dyMove = dyMove;
    this.dxMove = dyMove * 1.7;
    this.distance = distance;
  }

  draw() {
    // c.scale(1, 0.5);
    c.beginPath()
    c.ellipse(this.x, this.y, 1, this.radius, Math.PI, 0, Math.PI * 2)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  update() {

    // if(this.y + this.radius > canvas.height) {
    //   this.dy = -this.dy * 0.93;
    // } else {
    //   this.dy += 1;
    // }

    // this.y -= this.dy;
    if(this.y < 0) {
      this.y = canvas.height + this.radius;
    }

    if(mouse.x - this.x < this.distance && mouse.x -this.x > -this.distance && mouse.y - this.y < this.distance && mouse.y -this.y > -this.distance) {
      if(mouse.x - this.x > 0) {
        this.x -= this.dxMove;
      } else if(mouse.x - this.x < 0) {
        this.x += this.dxMove;
      }
      if(mouse.y - this.y < 0) {
        this.y += this.dyMove;
      } else if (mouse.y - this.y > 0) {
        this.y -= this.dyMove;
      }
    } else {
      if(this.x > this.oldX) {
        this.x -= this.dxMove;
      } else if(this.x < this.oldX) {
        this.x += this.dxMove;
      }
      // if(this.y > this.oldY) {
      //   this.y = -this.dyMove;
      // } else if(this.y < this.oldY) {
      //   this.y = +this.dyMove;
      // }
      this.y -= this.dy;
    }

    this.draw();
  }
}

// Implementation
let balls;
function init(options) {
  let radii = options.radius || [1, 4];
  let dist = options.distance || [60, 90];
  let particleCount = options.particlesCount || 300;
  let color = options.color || 'rgba(255, 255, 255, 0.85)';
  balls = [];
  for (let i = 0; i < particleCount; i++) {
    let radius = utils.randomFloatFromRange(radii[0], radii[1]);
    let x = utils.randomIntFromRange(radius, canvas.width - radius);
    // let y = 100;
    let y = utils.randomIntFromRange(0, canvas.height);
    let dy = utils.randomFloatFromRange(10, 90) * 0.01;
    let distance = utils.randomFloatFromRange(dist[0], dist[1]);
    let dyMove = utils.randomFloatFromRange(0.05, 0.15);
    let ball = new Ball(x, y, dy, dyMove, distance, radius, color);

    balls.push(ball);
  }
  
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)

  // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y);
  balls.forEach(ball => {
    ball.update()
  })
}

init({
  radius: [1, 4],
  distance: [60, 90],
  particlesCount: 290,
  color: 'rgba(255, 255, 255, 0.85)'
});

animate()
