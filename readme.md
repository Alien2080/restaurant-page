# Restaraunt page
Odin project [project](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page) to learn about DOM manipulation.    
Uses vanilla JavaScript, HTML and CSS to make a page for a fake restraurant.  
Uses Webpack to allow for JavaScript ES6 modules and other features to be able to reuse code easier.  

## Get started
- Clone repo  
- go to repo directory  
- run the following ```npm install```
- run for development server (webpack) ```npm run start```  
- run for production build  (output to dist folder) ```npm run build```
- to deploy build website to GitHub Pages, run ```npm run deploy-init``` on first commit and then ```npm run deploy``` from then on   
 
## Webpack 5
Repo contains a webpack config that can be used as an example for other projects. Makes use of webpack-merge to keep common [config](webpack.common.js) together.    
Has a prod and dev config file and uses webpack-merge to keep the common parts in a single place (webpack.common.js)  

Uses the webpack Dev server with hot reload on changes and html plugin to allow the index.html file to remain in src folder.  

## GitHub pages
[Live Demo](https://alien2080.github.io/restaurant-page/)

### How to update the GitHub Page
First build the site with ```npm run build``` then deploy the newly created file in the [dist](dist) folder to the gh-pages branch with ```npm run deploy``` and ```npm run deploy-init``` (see above)   

### Reason for script
There is a shell [script](package-lock.json) called 'pages' saved in package.json that will automate the GitHub Page update.  
GitHub Pages expects the index.html file to be in the root folder. In GitHub settings the Pages branch was changed to gh-pages.  

found lots of issues with pushing to a branch like this. Git doesn't like it and I've added some more commands to avoid those errors.  