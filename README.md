# Overview

This work is an interactive Portfolio Website built to reinforce my full-stack web development skill set, with a focus on JavaScript, Node.js, Express, and MongoDB. The web application showcases my programming projects, allowing users to browse and interactively search projects via server-side rendering and database integration.

To run the app locally, start the Express dev server by running `node app.js` in the project root. Open your browser and navigate to `http://localhost:3000` to see the home page of the portfolio.

The only function of the app is to have some fun building a full-stack web application focused on backend development, templating with EJS, and attaching a MongoDB database for dynamic content storage.

[Software Demo Video](https://youtu.be/rKhv63zaJiM)

# Web Pages

- **Home Page (`/`)**: Personal welcome, profile photo, skills list, and link to the Projects page.
- **Projects Page (`/projects`)**: A list of all portfolio projects dynamically fetched from MongoDB. It features a search form to filter by project title, and the results are shown on the same page.

The application navigates from the home page to the project page using navigation links. The two pages utilize EJS templates to generate dynamic HTML content from database data and user input.

# Development Environment

The application was developed using Visual Studio Code on Windows 10. Node.js and Express were utilized for the backend with the use of JavaScript as the programming language. MongoDB is the database used to store data about projects.

EJS is used as the templating engine to render dynamic HTML pages, and CSS is used to dress the user interface. The application is run on a local development server of Express.

# Useful Websites

* [Node.js Official Site](https://nodejs.org/)
* [Express Documentation](https://expressjs.com/)
* [MongoDB Documentation](https://docs.mongodb.com/)
* [EJS Templating](https://ejs.co/)
* [BYU-Idaho CSE 310 Module Descriptions](https://byui-cse.github.io/cse310-ww-course/modules/module_descriptions.html)

# Future Work

* Implement user authentication and allow users to post new projects.
* Add pagination and advanced filtering features on the Projects page.
* Beautify the UI with responsive design and animations for better user experience.
* Launch the application onto a cloud host for public consumption.
