var angle = 0

function setup() {
  createCanvas(800, 800)
  slider = createSlider(0, Math.PI*2, Math.PI / 4, 0.01)
}

function draw() {
  background(51)
  angle = slider.value()
  let len = 200
  stroke(255)
  translate(width/2,height)
  branch(len)
}

function branch(len) {
  line(0,0,0, -len)
  translate(0, -len)
  if(len>2){
    push()
    rotate(angle)
    branch(len * 0.67)
    pop()
    push()
    rotate(-angle)
    branch(len * 0.67)
    pop()
  }
}