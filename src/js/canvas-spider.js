import utils from './utils'

const canvas = document.querySelector('#canvas')
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
    this.y -= this.dy;

    if(mouse.x - this.x < this.distance && mouse.x -this.x > -this.distance && mouse.y - this.y < this.distance && mouse.y -this.y > -this.distance) {
      c.beginPath();
      c.moveTo(this.x, this.y);
      c.lineTo(mouse.x, mouse.y);
      c.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      c.stroke();
    } else {

    }

    this.draw();
  }
}

// Implementation
let balls;
function init() {
  balls = [];
  for (let i = 0; i < 290; i++) {
    let radius = utils.randomFloatFromRange(1, 4);
    let x = utils.randomIntFromRange(radius, canvas.width - radius);
    // let y = 100;
    let y = utils.randomIntFromRange(0, canvas.height);
    let dy = utils.randomFloatFromRange(10, 90) * 0.01;
    let dist = utils.randomFloatFromRange(80, 150);
    let dyMove = utils.randomFloatFromRange(0.05, 0.15);
    let ball = new Ball(x, y, dy, dyMove, dist, radius, 'rgba(255, 255, 255, 0.85)');

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

// setInterval(() => {
  init()
// }, 700);
animate()
