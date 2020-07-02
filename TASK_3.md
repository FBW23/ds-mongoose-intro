# Mongoose - Exercise 3

## Implement all CRUD operations in Mongoose

Now instead of just returning dummy responses, we actually want to perform REAL operations on our Mongo database when our routes are called!

* Implement the Mongoose operations for /GET, /POST, /PATCH, /DELETE
    * Fetch all users from MongoDB
    * Fetch a single user from MongoDB
    * Add a new user to MongoDB
    * Update an existing user in MongoDB
    * Delete an existing user in MongoDB 

* Return the fetched / created / updated / deleted record as JSON to the browser

* Test the routes again with POSTMAN / RESTED Client

* Check in Compass or the mongo shell
    * where all your operations successfully performed to the database? 
    * If not: Please adapt your code until it works

WELL DONE! 
Our technology stack is now complete. We can now write modern fullstack applications.


### Bonus Task - Add error handling

* Handle all your API errors in a generic error handler middleware
    * app.use(err, req, res, next)
* Update your routes and implement error handling
    * Catch errors for your mongoose calls 
    * Forward them to your error handler
* Testing in POSTMAN / RESTED client
    * Try to fetch with an ID that does not exist
    * Try to update a user with an ID that does not exist
    * Try to delete a user with an ID that does not exit
    * E.g. just use the ID 12345 (that is not a valid MongoDB ID)
