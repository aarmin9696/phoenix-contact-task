# User Management

This is a simple user management frontend for an IIoT platform built using React. It fetches user data from a backend API, displays the user list, and allows for viewing and editing user details.

## Deployed Link - https://phoenix-contact-task.vercel.app/

## Features

- **User List**: Displays all users fetched from the backend.
- **User Details Dialog**: Clicking a user opens a dialog with their details.
- **Edit User Information**: Allows for editing the first and last names of a user.

## Prerequisites

- Node.js (version 14 or higher)
- NPM or Yarn for managing packages

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aarmin9696/phoenix-contact-task.git
   cd phoenix-contact-task

2. Install dependencies:

   ```bash
   npm install

3. Running the Application:

   ```bash
   npm start

## Structure

### Components
- UserList: Displays the list of users fetched from the API. Clicking on a user opens the UserDetailsDialog.
- UserDialog: A dialog component that shows user details and allows editing of first and last names.
- UserService: A service class responsible for handling all user-related API requests (fetching and updating users).
- UserContext: For sharing the fetched users to components
  
