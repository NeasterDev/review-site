# Nelp

## Purpose
This website, called Nelp, is designed to function like Yelp, the popular site that allows users to post their reviews about businesses. On the homepage of the site, there is a header, a scenic nature image, and multiple reviews posted by users of the site. On the header, there is a search bar, along with a Login and Signup links. When the user clicks on the search bar, an auto completed suggestion appears in the background of the search bar. 

When the user clicks on the sign up button, then said user is directed on the sign up page. On the sign up page, the user is propmpted the create a username and password, and enter a valid email address. Once the sign in is successful, then the user will be redirected back to the homepage. When the user is logged in to Nelp, the 'Profile' and 'Logout' links will replace the two aforementioned links. 

When the user clicks on the 'Profile' link, then the user is directed to his own profile. Located on top of the profile is the user's profile image. Under the image is a short bio of the user. All of the user's own reviews can be seen by the user, with an option to edit the reviews.

## Built With
    * React

## Screenshot
![Alt text](./client/public/assets/images/screenshot.JPG?raw=true "Nelp")

## Require Packages
    * Root
        * concurrently

    * Server
        * apollo-server-core
        * apollo-server-express
        * bcrypt
        * dotenv
        * express
        * faker
        * graphql
        * jsonwebtoken
        * mongodb
        * mongoose

    * Client
        * @apollo/client
        * @testing-library/jest-dom
        * @testing-library/react
        * @testing-library/user-event
        * graphql
        * jwt-decode
        * react
        * react-autocomplete-hint
        * react-dom
        * react-router-dom
        * react-scripts
        *  web-vitals
        * --legacy-peer-deps (if React client fails to render)
            * delete node_modules beforehand
        * npm audit fix --force (if --legacy-peer-deps fails to fix faulty rendering)

## Website Link
<!-- insert -->

## Contribution
crazypants300, CoderJ01, Evidal19