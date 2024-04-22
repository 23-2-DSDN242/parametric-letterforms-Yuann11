const canvasWidth = 960;
const canvasHeight = 500;

const letterA = {
  ellipseSize: 20,
  rectWidth: 76,
  rectHeight: 20,
  rectXOffset: -38,
  draw: (posx, posy) => {
    fill(innerColor);
    triangle(posx, posy - 80, posx - 60, posy + 60, posx + 60, posy + 60);

    triangle(posx - 30, posy - 10, posx - 60, posy + 60, posx, posy + 60);

    quad(
      posx,
      posy - 80,
      posx - 40,
      posy - 80,
      posx - 60 - 40,
      posy + 60,
      posx - 60,
      posy + 60
    );
  },
};

const letterB = {
  ellipseSize: 30,
  rectWidth: 120,
  rectHeight: 140,
  rectXOffset: -60,
  draw: (posx, posy) => {
    fill(innerColor);

    rect(
      posx +rectXOffset,
      posy - (letterB["rectHeight"] + 20) / 2,
      letterB["rectWidth"],
      letterB["rectHeight"]
    );

    fill(255);
    rect(
      posx +rectXOffset-20,
      posy - (letterB["rectHeight"] + 20) / 2 + 20,
      letterB["rectWidth"] / 2,
      letterB["rectHeight"] / 3,
      0,
      10,
      0,
      0
    );

    rect(
      posx+ rectXOffset-20,
      posy - (letterB["rectHeight"] + 20) / 2 + 80,
      letterB["rectWidth"] / 2 + 15,
      letterB["rectHeight"] / 3,
      0,
      10,
      0,
      0
    );

    fill(innerColor);
    ellipse(
      posx + rectXOffset-10,
      posy - (letterB["rectHeight"] + 20) / 2 + 10,
      ellipseSize,
      ellipseSize
    );
  },
};

const letterC = {
  ellipseSize: 190,
  rectWidth: 30,
  rectHeight: 120,
  rectXOffset: -38,
  draw: (posx, posy) => {
    fill(innerColor);

    arc(
      posx,
      posy,
      letterC["ellipseSize"],
      letterC["ellipseSize"] - 50,
      HALF_PI,
      -HALF_PI
    );

    arc(
      posx,
      posy,
      letterC["ellipseSize"] / 2,
      letterC["ellipseSize"] / 2 - 25,
      HALF_PI,
      -HALF_PI
    );

    line(posx - 50, posy, posx - 100, posy);
  },
};

const backgroundColor = 255;
const strokeColor = 255;

const innerColor = 200;
const outColor = 232;

function setup() {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent("canvasContainer");

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(3);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw() {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x, center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  letterData["draw"](posx, posy);
}

function keyTyped() {
  if (key == "!") {
    saveBlocksImages();
  } else if (key == "@") {
    saveBlocksImages(true);
  }
}
