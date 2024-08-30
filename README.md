Notes Application Overview
The Notes Application is a full-stack platform for managing notes, featuring the ability to create, view, and delete notes. It utilizes a React frontend with Material-UI for user interface components and a NestJS backend for handling CRUD operations.
Key Features
Create Notes: Add new notes with a title and content.
View Notes: Display notes in a grid layout showcasing their titles and content.
Delete Notes: Remove individual notes as needed.
Snackbar Notifications: Receive feedback on successful or failed operations.
Technologies
Frontend:
React: A JavaScript library for building user interfaces.
Material-UI: Provides React components that follow Google's Material Design guidelines.
Backend:
NestJS: A progressive Node.js framework for building efficient and scalable server-side applications.
TypeScript: A superset of JavaScript used for backend development.
Database: Choose a database for storing notes (e.g., MongoDB, PostgreSQL, MySQL).
Installation
Frontend
1. Clone the Repository:
git clone https://github.com/dmpatel2168/notes/front-end.git

2.Navigate to the Project Directory:
cd notes-app-frontend

3.Install Dependencies:
npm install

4.Start the Development Server:
npm start
Backend
1.Clone the Repository:
git clone https://github.com/dmpatel2168/notes/back-end.git

2.Navigate to the Project Directory:
cd notes-app-backend

3.Install Dependencies:
npm install

4.Start the Development Server:
npm run start:dev
The NestJS server will start on port 3000 by default. Adjust the port if necessary based on your configuration.
Usage
Frontend
Creating a Note: Click the "+" button to open the dialog and enter the title and content for the new note.
Viewing Notes: Notes are displayed in a grid layout.
Deleting a Note: Click the "Delete" button on a note to remove it.
Backend
API Endpoints:
GET /: Fetch all notes.
POST /: Create a new note. Requires a JSON body with title and content.
DELETE /
: Delete a note by its ID.
Error Handling
Frontend
Fetching Notes: Displays an error message if fetching fails.
Creating Notes: Snackbar notifications are shown for errors during creation.
Deleting Notes: Notifications are provided if deletion fails.
Backend
Proper HTTP status codes and error messages are returned for failed operations.
Contributing
Contributions are welcome! To contribute:
1.Fork the Repository
2.Create a Feature Branch:
git checkout -b feature/new-feature

3.Commit Your Changes:
git commit -am 'Add new feature'

4.Push to the Branch:
git push origin feature/new-feature
5.Open a Pull Request
License
This project is licensed under the MIT License. See the LICENSE file for details.
