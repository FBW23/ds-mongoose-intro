# Mongoose - Exercise 2

## Prepare an Express App

* Install express
* Setup express app in your script
* Move your code for generating the fake data into a GET route "/seed"

* Implement middleware for parsing incoming JSON data (into req.body):
    * app.use(express.json())

* Create all following CRUD routes for a user
    * GET /user (=> get all users)
    * GET /user/:id (=> get single user by ID)
    * POST /user (=> create user)
    * PATCH /user/:id (=> update user with given ID)
    * DELETE /user/:id (=> remove user with given ID)

* Implement dummy responses
    * All routes should return dummy JSON data
    * For routes POST & PATCH
        * console.log the received body (req.body)
    * For routes GET /user/:id, PATCH /user/:id, DELETE /user/:id
        * console.log the received ID parameter

* Test your routes
    * Start your app with nodemon
    * Open POSTMAN or RESTED Client
        * Make test calls to all your four routes
        * Check if you receive parameters and body correctly in your routes
