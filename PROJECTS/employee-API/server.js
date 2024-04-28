// Importing the required module 'http' to create an HTTP server
const http = require("http");

// Mock database representing employee data
const employees = [
  { id: 1, name: "barash" },
  { id: 2, name: "akshat" },
];

// Define the request handler function to handle incoming HTTP requests
const requesthandler = (req, res) => {
  // Extract the HTTP method and URL from the request
  const { method, url } = req;
  // Split the URL into parts based on "/"
  const parts = url.split("/");
  // Extract the employee ID from the URL
  const id = parts[2];

  // Handle GET request for fetching all employees
  if (method === "GET" && url === "/employees") {
    // Set response headers and status code
    res.writeHead(200, { "content-Type": "application/json" });
    // Return all employees as a JSON array
    res.end(JSON.stringify(employees));
  }
  // Handle GET request for fetching a single employee by ID
  else if (method === "GET" && parts[1] === "employees" && id) {
    // Find the employee with the specified ID
    const employee = employees.find((emp) => emp.id === parseInt(id));
    // If employee found, send it in the response, else send a 404 Not Found message
    if (employee) {
      res.writeHead(200, { "content-Type": "application/json" });
      res.end(JSON.stringify(employee));
    } else {
      res.writeHead(404, { "content-Type": "application/json" });
      res.end(JSON.stringify({ message: "404 Not Found" }));
    }
  }
  // Handle POST request for adding a new employee
  else if (method === "POST" && url === "/employees") {
    // Initialize body variable to store request body
    let body = "";
    // Listen for incoming data chunks and concatenate them to form the request body
    req.on("data", (chunk) => {
      body += chunk;
    });
    // When request data ends, parse the body as JSON and add the new employee
    req.on("end", () => {
      const newEmployee = JSON.parse(body);
      employees.push(newEmployee);
      // Send response with the newly added employee and the updated list of all employees
      res.writeHead(200, { "content-Type": "application/json" });
      res.end(JSON.stringify({ newEmployee, employees }));
    });
  }
};

// Create an HTTP server using the request handler function
const server = http.createServer(requesthandler);

// Define the port on which the server will listen for incoming requests
const PORT = 3000;

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
