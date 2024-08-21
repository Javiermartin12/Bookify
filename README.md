# Bookify

**Bookify** is a web application that allows you to browse, search and manage a
collection of recommended books. The application offers functionalities to register
new books, view book details, and maintain a user profile with secure authentication.

## Content Table

1. [Features](#features)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Use](#use)
5. [Settings](#settings)
6. [Contributions](#contributions)
7. [License](#license)

## Features

- **Book Browsing:** Browse through a collection of recommended books.
- **Book Search:** Search for books by title, author or genre.
- **Book Registration:** Add new books to the collection with details such as title, author, genre and synopsis.
- **User Profile:** Secure authentication and profile management with Auth0.
- **Friendly Interface:** Intuitive and easy-to-use design with Material-UI.

## Technologies

- **Frontend:**

  - [React](https://reactjs.org/) - Library for building user interfaces.
  - [Material-UI](https://mui.com/) - User interface components.
  - [Axios](https://axios-http.com/) - HTTP client to make requests.
  - [Wouter](https://github.com/molefrog/wouter) - Lightweight router for React.

  - **Backend:**
  - [Node.js](https://nodejs.org/) - Runtime environment for server-side JavaScript.
  - [Express](https://expressjs.com/) - Framework for building web applications.
  - [MongoDB](https://www.mongodb.com/) - NoSQL database.
  - [Auth0](https://auth0.com/) - Authentication and authorization.

  ## Facility

  To run this application locally, follow these steps:

1. **Clone the Repository:**

```bash
   git clone https://github.com/tu-usuario/recommended-book.git
```

2. **Install Dependencies:**

- **Frontend:**

cd frontend
npm install

- **Backend:**

cd backend
npm install

3. **Configure Environment Variables:**

REACT_APP_AUTH0_DOMAIN=tu-dominio.auth0.com
REACT_APP_AUTH0_CLIENT_ID=tu-client-id
REACT_APP_AUTH0_AUDIENCE=tu-audience
VITE_CLOUDINARY_URL=https://api.cloudinary.com/v1_1/tu-cloud-name/image/upload
VITE_UPLOAD_PRESET=tu-upload-preset

4. **Run the Application:**

- **Frontend:**
  cd frontend
  npm run dev

- **Backend:**
  cd backend
  npm run dev

## Use

Authentication:

1. Log in using Auth0 to access the app's functionalities.
   Explore Books:

2. Browse the main page to see a list of recommended books.
   Search Books:

3. Use the search bar to find books by title, author, or genre.
   Add Books:

4. Head to the book creation page to add new books to the collection.
   See Details:

5. Click on a book to see its detailed information.

## Configuration

To configure the application for production, ensure that the environment
variables are correctly defined and that the backend is properly configured
to handle requests in a production environment.

## Contributions

Contributions are welcome. If you want to contribute to the project, follow these steps:

1. Fork the Repository.

2. Create a Branch for your Feature or Fix.

3. Commit your Changes.

4. Push the branch.

5. Create a pull request.

## License

This project does not have a license.
