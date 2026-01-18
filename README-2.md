# backend_assignment3

🍽️ Restaurant Menu API (Full-Stack Project)

📌 Project Description  
This project is a full-stack web application that demonstrates the development of a RESTful API using Node.js, Express, and MongoDB, along with a simple HTML/JavaScript frontend.  
The application allows users to manage restaurant menu items and customer reviews.  
Data is stored permanently in MongoDB and accessed through REST API endpoints.

🛠️ Technologies Used
- Node.js – backend runtime environment
- Express.js – web framework for building REST APIs
- MongoDB Atlas – cloud NoSQL database
- Mongoose – MongoDB object modeling tool
- HTML / CSS / JavaScript – frontend interface
- Postman – manual API testing

📂 Project Structure
restaurant-api/
│
├── server.js
├── package.json
├── .env
│
└── public/
    └── index.html

🔐 Environment Variables
Create a .env file in the project root:
MONGODB_URI=your_mongodb_connection_string
PORT=3000

🚀 How to Run the Project
Install dependencies:
npm install

Start the server:
npm start

Open in browser:
http://localhost:3000

📡 REST API Endpoints

Menu Items
Method	Endpoint	Description
POST	/api/menu-items	Create a new menu item
GET	/api/menu-items	Get all menu items
GET	/api/menu-items/:id	Get menu item by ID
PUT	/api/menu-items/:id	Update menu item
DELETE	/api/menu-items/:id	Delete menu item

Reviews
Method	Endpoint	Description
POST	/api/reviews	Create a new review
GET	/api/reviews	Get all reviews
GET	/api/reviews/:id	Get review by ID
PUT	/api/reviews/:id	Update review
DELETE	/api/reviews/:id	Delete review

⚠️ Error Handling
The API returns appropriate HTTP status codes:
- 201 Created – successful creation
- 400 Bad Request – validation errors
- 404 Not Found – resource not found
- 500 Internal Server Error – server error

🧪 Testing
All endpoints were manually tested using Postman to ensure correct interaction with MongoDB.  
Tested operations include:
- Creating entries
- Retrieving data
- Updating records
- Deleting records

🖥️ Frontend Interface
A simple frontend interface was created using HTML and JavaScript.  
The interface allows users to:
- View the list of menu items
- Add new menu items
- View customer reviews
- Submit new reviews

The frontend communicates with the backend via REST API using the fetch() method.

🗄️ Database (MongoDB)
MongoDB is used to store:
- Menu items
- Customer reviews

Data is stored as JSON-like documents and remains persistent between server restarts.

✅ Project Requirements Fulfilled
- RESTful API endpoints
- MongoDB integration
- Proper error handling and HTTP status codes
- Manual testing using Postman
- Simple frontend interface (Full-Stack element)

👤 Author
Student Full-Stack Project  
Node.js + Express + MongoDB