## To Reproduce

`watchify index.js -i out.js`

Run the out.js file. No exceptions.

Edit index.js, save, wait for watchify to rebundle.

Run the out.js file. One of the variables is now undefined.

