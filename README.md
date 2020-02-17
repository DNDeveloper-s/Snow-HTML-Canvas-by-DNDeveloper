I am considering, you have the basic knowledge about webpack, js and HTML. So, Careful with adding script tags in HTML.

First Include Js to HTML using script tag and then In another script tag, Initialize the Canvas Effect using information given below.

## Getting Started

1.      Copy canvas.bundle.js file from dist/js folder to your project.

2.      In Html file, add 

                <canvas id="canvas"><canvas>

3.      Apply some styles like, Background of your container of canvas, As here it is "body"  

                body {
                   background: black;
                }


4.      Add Script Tag and initialize the canvas effect 

        Using,

                init({
                   radius: [1, 4],
                   distance: [60, 90],
                   particlesCount: 290,
                   color: 'rgba(255, 255, 255, 0.85)'
                });

                radius: These are intervals from 1 to 4 it will be auto generated randomly between these intervals, Similarly for distance.

        These all will be default values, If you wanna go with default values

        Just use,

                init();
