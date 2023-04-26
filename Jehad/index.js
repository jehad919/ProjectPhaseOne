const app = require("express")()
const fs = require('fs');


// To run the code write in terminal in its directory: node .


/** 
* It will render the main page to client.
* Routes HTTP GET requests to the specified path with the specified callback functions.
* @param "String represent the path of the page"
* @return - A middleware function.
*       - A series of middleware functions (separated by commas).
*       - An array of middleware functions.
*       - A combination of all of the above.
* @throws Log the error.
*/

/*
* @Test
* Test Plan:
* 1. Test if the server is responding to GET requests at the root endpoint ("/").
* 2. Test if the response of the GET request is an HTML file.
* 3. Test if the HTML file returned is the correct file, i.e., "index.html".
* 4. Test if the server is handling any errors that may occur during the sending of the HTML file.
* 5. Test if the error is being logged in the console if an error occurs.
Test Results:
* 1.Test for GET request at root endpoint ("/"):
    a. Use a testing framework (e.g., Mocha, Jest) to create a test suite for the server.
    b. Use a testing framework to create a test case that sends a GET request to the root endpoint.
    c. Verify that the response status code is 200, indicating that the request was successful. 
* 2. Test for GET request at root endpoint ("/"):
    a. Use a testing framework (e.g., Mocha, Jest) to create a test suite for the server.
    b. Use a testing framework to create a test case that sends a GET request to the root endpoint.
    c. Verify that the response status code is 200, indicating that the request was successful.
* 3. Test for correct HTML file:
    a. Use a testing framework to create a test case that sends a GET request to the root endpoint.
    b. Verify that the HTML file returned is "index.html".
* 4. Test for correct HTML file:
    a. Use a testing framework to create a test case that sends a GET request to the root endpoint.
    b. Verify that the HTML file returned is "index.html".
* 5. Test for error logging:
    a. Use a testing framework to create a test case that sends a GET request to the root endpoint with an invalid file path.
    b. Verify that the error message is logged in the console.
*/
app.get("/", function (req, res) {
    try {
        res.sendFile(__dirname + "/index.html")
    } catch (error) {
        console.error(error)
    }
})



app.get("/1", function (req, res) {
    try {
        res.json({
            data: fs.readFileSync('./1.jpg', { encoding: 'base64' }),
            title: "Unsolved",
            text: "Unsolved Puzzle"
        })
    } catch (error) {
        console.error(error)
    }

})


app.get("/2", function (req, res) {
    try {
        res.json({
            data: fs.readFileSync('./2.jpg', { encoding: 'base64' }),
            title: "Solved",
            text: "Solved Puzzle"
        })
    } catch (error) {
        console.error(error)
    }

})




/** 
*Binds and listens for connections on the specified host and port. 
*This method is identical to Node’s http.Server.listen().
* @param "Number of Port, The port server will listen"
* @return undefined
* @throws Error: listen EACCES 0.0.0.0:3000: 
This error occurs when the server is not allowed to listen on the specified port, 
often due to insufficient privileges..
*/


/*
* @Test
* Test Plan:
* 1. Manually run the code and verify that the server is listening on port 3000.
* 2. Check that the console message "Server is listening on port 3000" is displayed in the console when the server is started.
* 3. Check that the server can receive requests on port 3000 and respond appropriately.
* 4. Try to start the server on a different port number (e.g., 4000) and verify that the console message reflects the new port number.
* 5. Try to start the server on a port number that is already in use and verify that the server fails to start.
Test Results:
* 1. If the server is listening on port 3000 and no errors occur, mark the test as passed.
* 2. If the console message "Server is listening on port 3000" is displayed when the server is started, mark the test as passed.
* 3. If the server can receive requests on port 3000 and respond appropriately, mark the test as passed.
* 4. If the console message reflects the new port number when the server is started on a different port, mark the test as passed.
* 5. If the server fails to start on a port number that is already in use, mark the test as passed.
*/
app.listen(3000, function () {
    console.log("Server is listening on port 3000")
})



