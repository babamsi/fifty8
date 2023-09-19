import vert from './shader.vert'
import frag from './shader.frag'


const sketch = (p) => {
  /*

Learning Shaders 
Author: Juan Carlos Ponce Campuzano
Website: https://jcponce.github.io
Date: 31/May/2023

*/

  // a shader variable
  let theShader;
  let shaderBg;

   p.preload = () => {
    // load the shader
    theShader = p.loadShader(vert, frag);
  }

  p.setup = () => {
    // disables scaling for retina screens which can create inconsistent scaling between displays
    p.pixelDensity(1);

    p.createCanvas(p.windowWidth, p.windowHeight)
      .position(0, 0)
      .style('z-index', '-1');
    p.noStroke();

    // shaders require WEBGL mode to work
    shaderBg = p.createGraphics(p.windowWidth, p.windowHeight, p.WEBGL);
  };

  p.draw = () => {
    // we can draw the background each frame or not.
    // if we do we can use transparency in our shader.
    // if we don't it will leave a trailing after image.
    p.background(51);
    // shader() sets the active shader with our shader
    shaderBg.shader(theShader);

    // get the mouse coordinates, map them to values between 0-1 space
    let yMouse = (p.map(p.mouseY, 0, p.height, p.height, 0) / p.height) * 2 - 1;
    let xMouse = (p.mouseX / p.width) * 2 - 1;

    // Make sure pixels are square
    xMouse = (xMouse * p.width) / p.height;
    yMouse = yMouse;

    // pass the interactive information to the shader
    theShader.setUniform('iResolution', [p.width, p.height]);
    theShader.setUniform('iTime', p.millis() / 1000.0);
    theShader.setUniform('iMouse', [xMouse, yMouse]);

    // rect gives us some geometry on the screen to draw the shader on
    shaderBg.rect(0, 0, p.width, p.height);
    p.image(shaderBg, 0, 0, p.width, p.height);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  let imView = false;

  p.mousePressed = () => {
    if (imView === false) {
      imView = true;
    }
    p.cursor('grabbing');
  };

  p.mouseReleased = () => {
    if (imView === true) {
      imView = false;
    }
    p.cursor('grab');
  };
};

export default sketch;
