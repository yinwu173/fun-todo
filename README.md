# Note Taker Starter Code

## About the Project

* The purpose of this project is to create a site where the user is able to easily write, read, and save notes. The website will serve as a means for the user to organize their thoughts and keep track / log tasks that need to be completed.

## Acceptance Criteria

* Users should be presented with a landing page with a link to a notes page when they open the Note Taker website.

* Users should be presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column when they click on the link to the notes page.

* When the users enter a new note title and the note’s text, then a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page.

* The new note users have entered should save and appear in the left-hand column with the other existing notes and the buttons in the navigation disappear once users click on the Save button.

* When users click on an existing note in the list in the left-hand column then that note appears in the right-hand column and a "New Note" button appears in the navigation.

* When users click on the "New Note" button in the navigation at the top of the page, then they are presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears.


## Installation

* We need to first clone the starter code to our own repository. Then, we need to create a git ignore to ignore the node packages. Next, we should install the node packages using "npm i" and "npm init -y". We can also create a folder to hold the HTML and API routes so that the server.js file is easier to read.

## Deployed Link

* Render Link: https://fun-todo.onrender.com

### Hints

* Make sure to import the proper packages such as "express, path, fs, etc.".

### Resources

* Received assistance from Xpert Learning Assistant for the lines 13-19 in the api.js file. We can use async/await to handle the asynchronous nature of fs.readFile. Since we are dealing with promises, we can directly import the fs.promises package.

* Received additional assistance from Xpert Learning Assistant for line 27 in the api.js file. We use the fs.readFile to read the existing notes in the JSON file. If there is an error in reading the notes, then an error json message will log.

