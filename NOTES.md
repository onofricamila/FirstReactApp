## NOTES
### This is all you need to create a react app:
* run `curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -`, `sudo apt-get install -y nodejs` to install **node js**, and `sudo apt-get install -y build-essential` to being able to compile and install native extentions form **npm** _(notice we install node js only because of npm)_

* run `npm install create-react-app -g` to install that tool which has a server (webpack), a compiler that is used to rtransalate new js to old js, etc. **This tool allows you to create React apps with no build configuration.**

* run `create-react-app my-app` to create a new react app

* run `npm start` to start the server thar hosts our recently created app

### If you already have npm and just downloaded a react app ...

* cd to the app folder

* run `npm install` (will **install** all the **packages** named **in** the **package.json** file)

* run `npm start` to launch the app