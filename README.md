![Tweeter Logo](/assets/tweeter-logo.png)
By Wing Koon, Kevin Leung

# Tweeter Project


Tweeter is a simple, single-page social media app Twitter clone designed to enable users to post tweets with a maximum limit of 140 characters.

All the requests will be made asynchronously, which will allow us to gain familiarity using the jQuery library to make these requests.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express back-end skills.

It places a strong emphasis on front-end development, utilizing jQuery, AJAX, and vanilla JavaScript to handle asynchronous requests for posting and retrieving tweets.


## Technologies Used
- HTML5
- CSS3 (with a focus on Flexbox and Media Queries for responsive design)
- JavaScript (jQuery)
- AJAX for asynchronous data handling
- Node.js and Express (for backend server functionality)
- REACT for frontend implementation

## Dependencies

- Express
- Node.js
- Body-parser
- Chance


## Getting Started

1. Download the software.

https://github.com/wingkoon/tweeter.git

2. Prepare for the dependency.

- Go to the directory /tinyapp
- Install all dependencies (using the `npm install` command).
i.e.,       
    npm install

3. Run your node server.

- Run the development web server using the `npm run start` command.

4. Browse to `http://localhost:8080/`


- Enjoy all its features


## Preview

![Tweeter](/assets/tweeter_screen.jpg)


## Javascript functionality
* Click the compose button to write a tweet.
* While typing, the remaining character count will be displayed to the user with its color changing when it turns negative.
* Upon submission, the new tweet will be checked for adequate length (non-empty, not longer than 140 characters) and an appropriate error message will display if the validation fails.
* Each tweet is recorded with content, avatar, name, handle and timestamp.
* Upon successful submission, the tweet list will reload.
* Tweet submission and tweet loading is implemented using AJAX.
* A scroll button is implemented to quickly return to the top.





