***Website Optimization***

Project first goal is to optimize portfolio site (index.html) in order to acheive acheive a score of 90+ using Google's Pagespeed Insights tool.

The other goal is to achieve jank free moving pizza animation on pizza.html qith a consistent rate of 60 FPS and to achieve a response of less than 5ms when resizing the pizzas using the slider.

**Overview**

Changes are made to index.html in order to optimize images and inline critical css.
Optimizations are made to the vanilla JavaScript in views/js/main.js in order to increase scrolling background pizzas to 60 fps.

Optimization of index.html is achieved primarily by using Grunt tasks (['clean', 'mkdir', 'responsive_images', 'critical', 'imagemin']). See Gruntfile.js or package.json.

In pizza.html, performance imporvments are made through 5 major strategies, in accordance with the W3 schools js perf optimization guidlines:
1) Store the length of arrays in a var to avoid caculating the array length each time it's used in a for loop.
2) Reduce the number of DOM queries by caching DOM elements and moving queries outside of for loops.
3) Reduce the total number of DOM elements when possible.
4) Don't create unnecessary variables.
5) Place scripts at the bottom of the page or load them dynamically.


Exact changes to views/js/main.js are noted in comments.
See lines:

Lines 404-455 (pizza slider) are borrowed from Cam's solution in the class videos, which was also posted on the Udacity forums. The new appraoch disposes of dx approach, since the complicated code simply generates a pixel val and violates the DRY concept. Changing the pixel val of the pizzas is simply achieved in changePizzaSizes with a switch statement.

Lines 495-505
Change querySelectorAll to getElementsByClassName to improve speed.
Put var items in global scope so code doesn't run with each funciton invocation(avoid accessing dom elements uneccessarily in for loop.)
Cache items length to avoid calculating with each function call.
Take phase out of for loop to avoid running calculations each time the loop runs that could already be stored in phaseArray..

Lines 544-555
Cache DOM query for pizzas moving on screen (reduce activity in loops)
Use faster selector: getElementById instead of querySelector.
Why do we need 200 background pizzaz when just a small number is visible.
Reduced the number of DOM elements from 200 to 24.

**Development setup**

index.html can be easily reviewed by visiting:

https://pixiephreak.github.io/

Next, follow the link on the page "PIZZA TIME" to review the performance of pizza.html.

**Should you choose to run the program locally:**

*Install Local Dependencies*

OS X & Linux:

npm install (my npm tasks) --save -dev

Windows:
edit autoexec.bat

See more about how to get GRUNT tasks up and running at: http://gruntjs.com/getting-started

**Meta**

JC jdotcdot@hotmail.com

Distributed under the Apache License 2.0 license. See LICENSE for more information.
The code for this program is written by Udacity teacher, Cam, and optimized through my own ideas, help form the mentors, and code found on the udacity.com forums.

https://github.com/pixiephreak
