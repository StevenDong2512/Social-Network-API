# Social-Network-API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

The goal of this application is to allow users to update social network information so the website could handle the large amount of unstructured data.

The api itself allows user to:

- Create, delete, update a user
- Create, delete a friend from existing user list
- Create, delete, update a thought
- Create, delete a reaction

## Installation

1. Clone git repo from github
2. Open cloned repo in VS Code
3. Download the below to make sure the app is running.

## Build with

- JavaScript
- JSON
- Mongoose
- Express
- Insomnia
- MonoDB
- Node.js

## Usage

## Code to start the app

npm init -y

npm install express@4.18.2 mongoose@7.0.2 --save
npm install nodemon@2.0.21 --save-dev

npm start

After runnning the above code in terminal, open insomnia to run the local hose with the endpoint listed below:

http://localhost:3001/user for

1. Get all users
2. Create a new user

http://localhost:3001/user/userID for

1. Get user by ID
2. Update user by ID
3. Delete user by ID

http://localhost:3001/user/userID/friend/userID2 for

1. Create a friend
2. Delete a friend

http://localhost:3001/api/thought for

1. Get a thoguht
2. Delete a thought

http://localhost:3001/api/thought/thoughtID for

1. Get thought by ID
2. Update thought by ID
3. Delete thought by ID

http://localhost:3001/api/thought/thoughtID/reaction for

1. Create a reaction

http://localhost:3001/api/thought/thoughtID/reaction/reactionID for

1. Delete a reaction

## Demo videos

API endpoint test: https://drive.google.com/file/d/1eX4ECcjNkSO-_MCHRmykUcYJb5KVNfNg/view?pli=1

MongoDB test: https://drive.google.com/file/d/1xh6aUatRi58WkrFMsueaTUdPhleGxSbs/view

## Credits

Steven Dong

## License

Copyright (c) 2023 StevenDong2512

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
