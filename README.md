# angular2RampUp

This repository contains installed angular2 and typescript plus a server with a live watch.

npm i angular2@2.0.0-alpha.46 systemjs@0.19.2 --save --save-exact
npm i typescript live-server --save-dev

To run the example you need to run  npm start  in the root of the directory, this will serve the app with live-server on port 8080.
Also you need to run in a second console in the src folder  npm run tsc -w. This will watch for changes in the code, it should 
live reload the app in the browser but it does not on my PC.
