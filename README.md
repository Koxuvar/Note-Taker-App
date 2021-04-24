![GitHub](https://img.shields.io/github/license/Koxuvar/Note-Taker-App)
![GitHub language count](https://img.shields.io/github/languages/count/Koxuvar/Note-Taker-App)
![GitHub top language](https://img.shields.io/github/languages/top/Koxuvar/Note-Taker-App)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/Koxuvar/Note-Taker-App/express)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/Koxuvar/Note-Taker-App/uniqid)


# Note-Taker-App
A web based note taking application

## Table of Contents

 - [Description](#Description)
 - [Installation](#Installation)
 - [Usage](#Usage)
 - [Contributing](#Contributing)
 - [Test](#Tests)
 - [Questions](#Questions)
 - [License](#License)

 ## Installation

 ```npm i``` to install all dependencies necessary. Currently using express and uniqid.

 ## Usage

 ```npm start``` to initialize the app. Once running, the app will serve a homepage html file to the port specified in the server.js file, either 3000 on local machines or environment dependant on deployment. The home landing page has a button that brings the user to a notes page. The left had column is maintained with the ```db.json``` file in the ```db``` folder and will keep track of any notes previously made. The right side is the area where users can add new notes. Once a title and message has been entered a save icon will appear on the top right hand side. When the user clicks on any of the saved notes in the left hand column, that note will be displayed in the right text area. To add a new note, users can select the pencil icon in the top right corner.

 ## Contributing

 Please fork this repo. Current accpted contributions would be to add a proper database to this system and integrate it into the api handling for notes. Submit a pull request when ready to merge and the dev team will review accordingly.

 ## Tests

 No tests are implemented in this application.

 ## Questions

 For questions concerning this app contact me [here](mailto:connor@mmvdesigns.com)
 
 To see more of my work, check out my [Github Profile](http://www.github.com/Koxuvar)

 ## License

 MIT License
 
 Copyright (c) 2021 Connor Sullivan
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
