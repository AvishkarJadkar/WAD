steps to run this api thing -

1. npm init -y

2. npm install express mongoose body-parser 

3. node server.js

4. open postman and enter url http://localhost:3000/
(install postmann extension)

a. POST (Create)
URL: http://localhost:3000/api/admissions

Action: Use this to add a new student to the database.

JSON
{
  "studentName": "Amit Verma",
  "email": "amit.v@pune.edu",
  "course": "Information Technology",
  "status": "Pending"
}

b. GET (Read)
URL: http://localhost:3000/api/admissions

Action: You don't need to send a JSON body for GET. Just hit Send. The server will return an array of objects like this:

JSON
[
  {
    "_id": "6639abc1234567890def1234",
    "studentName": "Amit Verma",
    "email": "amit.v@pune.edu",
    "course": "Information Technology",
    "status": "Pending",
    "__v": 0
  }
]

c. PUT (Update)
URL: http://localhost:3000/api/admissions/6639abc1234567890def1234

(Replace the ID at the end with the actual _id from your GET response) Action: Use this to change the student's status or course.

JSON
{
  "status": "Approved",
  "course": "Computer Science"
}

d. DELETE (Remove)
URL: http://localhost:3000/api/admissions/6639abc1234567890def1234

Action: Like the GET request, DELETE does not require a JSON body. The server uses the ID in the URL to find and destroy the record.

Upon success, you will receive a confirmation message:

JSON
{
  "message": "Record deleted successfully",
  "deletedStudent": {
    "_id": "6639abc1234567890def1234",
    "studentName": "Amit Verma",
    "status": "Approved"
  }
}

5. open url to check 