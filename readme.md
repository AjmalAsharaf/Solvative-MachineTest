# Getting Started
To run this application Follow these

```bash
cd backend
npm i
npm start
```

```bash
cd frontend
npm i
npm start
```

# Problem Statement
https://gist.github.com/shhdharmen/4dcfc143fe614faa680e3ebd0248156e

# Completed
Use any DB and NodeJS framework of your choice
Use any pre-defined configurations to read environment variables, for example use dotenv package
Create REST APIs to perform CRUD operations of notes    
Store each note with title, content, date-time and draft flag

Show each note in card layout
View notes with user-friendly date/time
Latest note should be displayed first
A button to create a note
User can click on any note to view / edit it
1 input/textarea for note content
Save button - saves the note, closes the modal and while adding, clears the local storage
Cancel button
closes the modal
while adding, keeping the note-content in browser storage, so next when user creates note, that content is pre-filled
While adding a note, if user clicks outside of modal, save the note title and content in browser storage, so when user clicks on create note again, that content is pre-filled
