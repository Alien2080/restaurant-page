# Restaraunt page
Odin project project.  
Uses just JavaScript, HTML and CSS to make a restraunt page for a fake restraurant.  
Uses Webpack to allow for JavaScript modules and other features to be able to reuse code easier.  

## Get started
- Clone repo  
- go to repo directory  
- run the following
```
  npm install  
```
- run for development server (webpack)  
```
  npm run start  
```  
- run for production build  (output to dist folder) 
```
  npm run build  
```
- to deploy build website to GitHub Pages, run
```
npm run pages
```
 
## Webpack 5
Repo contains a webpack config that can be used as an example for other projects.  
Has a prod and dev config file and uses webpack-merge to keep the common parts in a single place (webpack.common.js)  

Uses the webpack Dev server with hot reload on changes and html plugin to allow the index.html file to remain in src folder.  

## GitHub pages
[Live Demo](https://alien2080.github.io/restaurant-page/)

### How to update the GitHub Page
```
npm run pages
```
There is a shell [script](package-lock.json) called 'pages' saved in package.json that will automate the GitHub Page update.  
Run the above command from the project directory to push the dist folder to the gh-pages branch. 

### Reason for script
GitHub Pages expeects the index.html file to be in the root folder. In GitHub settings the Pages branch was changed to gh-pages.  