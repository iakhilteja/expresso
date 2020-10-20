# expresso
**Express JS code 
Never name the folder name same as a package name.<br/>Ex- Node, Express, NPM etc., (Conflicts with code and leads to concurrence attack)<br/>
(installs package.json)<br/>
```npm init ```<br/>
Entry point - app.js<br/><br/>
Create app.js<br/><br/>
(installs nodemon package(developer dependencies) - to automate the restarting of server)
```npm i nodemon --save-dev ```<br/>
(installs express - normal dependencies)
```npm i express --save``` <br/><br/>
Go to package.json and change -<br/>
Main : app.js<br/>
Start : node app.js<br/>
dev : nodemon app.js<br/><br/>
( write “node_modules/” to not to add node modules to github )<br/>
Create ".gitignore" file <br/>
^ symbol in the version in package.json means “patch” - semantic version.<br/><br/>
(To show list of packages if outdated)<br/>
```npm outdated``` <br/>
(To pull latest version of express)<br/>
```npm i express@latest --save ```<br/>
