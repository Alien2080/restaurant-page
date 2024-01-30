# Restaraunt page
Odin project project.  
Uses just JavaScript, HTML and CSS to make a simple restraunt page for a fake restraurant.  
Uses Webpack to allow for JavaScript modules and other features to be able to reuse code easier.  

## Get started
- Clone repo  
- go to repo  
- run  
```
  npm install  
```
- run for developmet server  
```
  npm run start  
```  
- run for production build  (output to dist folder) 
```
  npm run build  
```
 
## Webpack
Repo contains a webpack config that can be used as an example for other projects.  
Has a prod and dev config file and uses webpack-merge to keep the common parts in a single place (webpack.common.js)  

## GitHub pages
[Live Demo](https://alien2080.github.io/restaurant-page/)

### How to update the GitHub Page
```
sh gitpages-deploy.sh
```
There is a shell [script](gitpages-deploy.sh) that will automate the GitHub Page update.  
Run the above command from the project directory to push the dist folder to the gh-pages branch. 

### Reason for script
GitHub Pages expeects the index.html file to be in the root folder. 