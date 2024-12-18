# Project Title

A brief description of what this project does and who it's for

The Form Builder Application is a dynamic tool designed to allow users to create, preview, publish, and fill forms. It supports various question types, including single-select, short text, and long text. Users can manage form data, submit responses, and track completion rates using a robust state management system and a MongoDB-backed API.

## Assumption or Caveats for the Project

- A user who creates the form cannot update or write answers inside the form while creating the form it is in a disbaled state, while in `preview` mode it is in `readonly` state

- A user can publish the form and the Published form is SSR - rendered hence this is a mix approach of SSR + CSR
  hence this may take a second to build the page ssr.

- Currently we can see a single person as the only user hence, we can always be the one who creates the form and fills the form.

## Features

- Form Creation: Add, update, reorder, and delete form questions.

- Preview Mode: Allows users to preview the form without submitting responses.

- Publish Mode: Forms can be published for users to fill and submit.

- Dynamic Question Types: Supports multiple question types, including single-select with editable options.

- Form Completion Tracking: Tracks and displays the percentage of questions answered.

- Backend Integration: Save and retrieve forms and responses from a MongoDB database.

- Error Validation: Ensures valid form data during creation and before publishing

## Features yet to cover

- Delete Functionality while creating the form

- Addition of Table with all the forms (Backend API is already generated but I missed out on time )

- Some small loader button

## Tech Stack

### Frontend

- Next.js: React framework for building the user interface.

- Zustand: Lightweight state management for managing the form store.

- TypeScript: Ensures type safety across the codebase.

- Tailwind CSS: For styling components.

### Backend

- Next.js API Routes: Handles form and response-related API operations.

- MongoDB: Database for storing forms and responses.

- Mongoose: ODM for MongoDB to handle schema validations.

## Steps to install project locally :)

Clone the repository:

`git clone <repository-url>`
cd <repository-folder>

Install dependencies:

`npm install`

Create a .env file:

MONGO_URI=<Your MongoDB Connection URI>
NEXT_PUBLIC_BASE_URL=http://localhost:3000

Run the development server:

`npm run dev`

Open the application in your browser:

## Do you wanna know how I think

https://excalidraw.com/#json=R9rzo4YoSqwHMYg4Bt-V4,o2RNmCFQ_r6hf1IQLwVFXw

### There is always room for feedbacks

Drop me a feedback here on twitter shreykoradia or Peerlist: https://peerlist.io/shrey_
