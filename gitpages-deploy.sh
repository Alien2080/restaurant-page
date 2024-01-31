# Commits and pushes to branch, the dist folder.
# Used to update GitHub Pages that expects index.html to be in root folder of a branch.
# Run the following in WSL terminal:  sh gitpages-deploy.sh 

git add dist -f && git commit -m "update github page with latest build" && git subtree push -f --prefix dist origin gh-pages