***Website Optimization***

Project goal is to optimize portfolio site in order to acheive acheive a score of 90+ using Google's Pagespeed Insights tool.

**Overview**

Changes are made to index.html in order to optimize images and inline critical css.
Optimizations are made to views/js/main.js in order to increase scrolling background pizzas to 60 fps and

Optimization of index.html is achieved primarily by using Grunt tasks (['clean', 'mkdir', 'responsive_images', 'critical', 'imagemin']). See Gruntfile.js or package.json.

Changes to views/js/main.js are noted in comments.
See lines:

Lines 404-455 are borrowed from Cam's solution in the class videos, which was also posted on the Udacity forums. The new appraoch disposes of dx approach, since the complicated code simply generates a pixel val and violates the DRY concept. Changing the pixel val of the pizzas is simply achieved in changePizzaSizes with a switch statement.

Lines 495-505
Change querySelectorAll to getElementsByClassName to improve speed.
Put items in global scope so code doesn't run with each funciton invocation.
Avoid accessing dom elements uneccessarily in for loop.
Cache items length to avoid calculating with each function call.
Take phase out of for loop.

**Development setup**

*Install Local Dependencies*

OS X & Linux:

npm install (my npm tasks) --save -dev

Windows:
edit autoexec.bat

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

**Meta**

JC jdotcdot@hotmail.com

Distributed under the Apache License 2.0 license. See LICENSE for more information.

https://github.com/pixiephreak
