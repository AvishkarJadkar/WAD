steps to run this api thing -

1. npm init -y

2. npm install express mongoose body-parser 

3. node server.js

4. open postman and enter url http://localhost:3000/
(install postmann extension)
for the get all - 
method = get
url = http://localhost:3000/api/admissions

for the get one - 
method = get
url = http://localhost:3000/api/admissions/69105d747284a0d8e3938496

for the POST -
method = post
url = http://localhost:3000/api/admissions

body - 
{
    "name" : "Prajwal",
    "email" : "[EMAIL_ADDRESS]",
    "course" : "B.Tech",
    "status" : "Approved"
}

for the PUT - 
method = put
url = http://localhost:3000/api/admissions/69105d747284a0d8e3938496
and in body 
{
    "name" : "Prajwal",
    "email" : "[EMAIL_ADDRESS]",
    "course" : "B.Tech",
    "status" : "Approved"
}

5. open url to check 