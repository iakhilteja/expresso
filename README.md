# expresso
**Express JS code 
Never name the folder name same as a package name.<br/>Ex- Node, Express, NPM etc., (Conflicts with code and leads to concurrence attack)
(installs package.json)<br/>
```npm init ```<br/>
Entry point - app.js<br/>
Create app.js<br/>
```npm i nodemon --save-dev ```(installs nodemon package(developer dependencies) - to automate the restarting of server)<br/>
```npm i express --save``` (installs express - normal dependencies)<br/>
Go to package.json and change -<br/>
Main : app.js<br/>
Start : node app.js<br/>
dev : nodemon app.js<br/>
Create ".gitignore" file ( write “node_modules/” to not to add node modules to github )<br/>
^ symbol in the version in package.json means “patch” - semantic version.<br/>
(To show list of packages if outdated)
```npm outdated``` <br/>
(To pull latest version of express)
```npm i express@latest --save ```<br/>
