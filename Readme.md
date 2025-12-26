## 🧠 MVC Explanation

- **Routes** → Handle URL routing only
- **Controllers** → Handle all request & response logic
- **Middleware** → Handle errors and unknown routes

---

## ⚙️ Technologies Used

- Node.js
- Express.js
- JavaScript
- JSON

---

## 🚀 How to Run the Project

### 1️⃣ Install dependencies
```bash
npm install
2️⃣ Start the server
bash
Copy code
node app.js
Server will run on:

arduino
Copy code
http://localhost:3000
📍 API Endpoints
Base route:

bash
Copy code
/api
Method	Endpoint	Description
GET	/api	Welcome message
GET	/api/about	About response
GET	/api/contact	Contact information
GET	/api/time	Dynamic current time
POST	/api/echo	Accepts and returns JSON data

🧪 Example POST Request
json
Copy code
{
  "name": "Reiko",
  "role": "Backend Learner"
}
Response:

json
Copy code
{
  "receivedData": {
    "name": "Reiko",
    "role": "Backend Learner"
  }
}
🌱 Bonus Features
Unknown route handling (404)

JSON responses only

Basic request validation

Clean MVC separation

✅ Status
✔ Server runs without errors
✔ MVC pattern followed
✔ GET and POST requests supported
✔ Beginner-friendly structure

📌 Author
Reiko Wakbeka
Software Engineering Student

