To run and start the server, follow these steps:

1. Clone the repository from GitHub:
   git clone git@github.com:maximmajor/user-management-module-backend-node.git

   BaseUrl = http://localhost:3000

2. run yarn (to Install dependencies)

3. Set environment variables:
   Create a .env file at the root of the project directory and add the following environment variables:
   MONGO_URI=<mongodb-uri>
   Replace <mongodb-uri> with a valid MongoDB connection string.

4. run yarn tsc
   (This compiles the TypeScript code into JavaScript code. and create a dist folder where it is stored.)

5. run yarn start
   (This will start the server and listen for incoming requests.)

6. or run yarn dev
   (This will start the server and listen for incoming requests.)

User Service

1. Create User:
   POST BaseUrl/user/create
   Content-Type: application/json
   {
   "first_name": "John",
   "last_name": "Aboy",
   "email": "Aboy@gmail.com",
   "password":"Testing1#",
   "phone_number":"+2347098051612",
   "date_of_birth": "23/05/2012"

}

2. get All User:
   Get BaseUrl/user
   Content-Type: application/json
   {
   "status": "success",
   "users": [
   {
   "first_name": "christ",
   "last_name": "ugo",
   "email": "u@gmail.com",
   "password": "$2b$10$zKklse1xuW51h0tsTIMwfe34El0sELdoHWRX8aHtyoMiPnx9KmRNW",
   "phone_number": "+2347068051646",
   "date_of_birth": "23/05/2009",
   "createdAt": "2024-03-21T16:02:24.452Z",
   "updatedAt": "2024-03-21T16:02:24.452Z",
   "id": "65fc5a105e48b459c5264c5e"
   },
   {
   "first_name": "amake",
   "last_name": "favour",
   "email": "favour@gmail.com",
   "password": "$2b$10$DeyO/Svf74UFWq/SEPth4eRrvEOBBxtFMSNLOIKdjPUfKXkB0jUP.",
   "phone_number": "+2347068051612",
   "date_of_birth": "23/05/2011",
   "createdAt": "2024-03-21T16:06:18.951Z",
   "updatedAt": "2024-03-21T16:06:18.951Z",
   "id": "65fc5afa65396743ebef589b"
   },
   {
   "first_name": "John",
   "last_name": "Aboy",
   "email": "Aboy@gmail.com",
   "password": "$2b$10$AkX3MSWrxq95HlKMZqk66.eEhcDwuwROWhraaaR..5ABnhk78wYUO",
   "phone_number": "+2347098051612",
   "date_of_birth": "23/05/2012",
   "createdAt": "2024-03-21T16:06:50.732Z",
   "updatedAt": "2024-03-21T16:06:50.732Z",
   "id": "65fc5b1a65396743ebef589f"
   }
   ]
   }

3. get use By Id (Get single User)
   GET BaseUrl/user/:userId

File Structure:
├── src/
│ │ ├── models/
│ │ │ └── userModel.ts
│ │ ├── controllers/
│ │ │ └── userController.ts
│ │ ├── repositories/
│ │ │ └── userRepository.ts
│ │ ├── service/
│ │ │ └── userServices.ts
│ │ ├── routes/
│ │ │ └── userRoute.ts
│ │ ├── interfaces/
│ │ │ ├── userInterface.ts
│ │ ├── middlewares/
│ │ │ └── HttpException.ts
│ │ │ └── errorHandlers.ts
│ │ ├── config/
│ │ │ └── db.ts
│ │ └── utils/
│ │ └── server.ts
│ ├── app.ts
└──
Breakdown of what each folder and file contains:

1. src/:
   This directory contains all the source code for the project.

2. controllers/:
   This sub-directory contains code related to handling requests and responses from the client.

3. Controller.ts:
   This contains functions to handle CRUD (Create, Read, Update, Delete) operations.

4. repositories/:
   This sub-directory contains code related to interacting with the database

5. Repository.ts:
   This contains functions to read from and write to the database for short links.

6. routes/:
   This sub-directory contains code related to defining and handling HTTP routes for the feature.

7. Routes.ts:
   This contains functions to define the routes for the short link feature.

8. interfaces/:
   This sub-directory contains code related to defining data structures, interfaces, types for the feature.

9. Interface.ts, RepositoryInterface.ts, and ModelInterface.ts:
   These define the interfaces for the controller, repository, and data model.

10. middlewares/:
    This sub-directory contains code related to handling middleware logic for the feature.

11. errorHandlers.ts and HttpException.ts:
    These contain code to handle errors and exceptions that may occur during the handling of HTTP requests.

12. config/:
    db.ts:
    This contains configuration settings for connecting to the database.

13. utils/:
    This sub-directory contains utility functions/other miscellaneous code related to the feature.

14. server.ts:
    This contains code to set up and start the HTTP server for the feature.

15. app.ts:
    This file contains code to start the entire application and tie together the various features and modules.

TECHNOLOGY USE

1. Node.js: a JavaScript runtime environment that allows running JavaScript code outside of a web browser

2. Express.js: a popular web application framework for Node.js used for building APIs and web applications

3. TypeScript: a superset of JavaScript that adds optional static typing and other features to JavaScript code

4. MongoDB: a NoSQL document database used for storing and retrieving data

5. Mongoose: a Node.js library used for modeling and interacting with MongoDB databases

6. Jest: a JavaScript testing framework used for unit and integration testing of Node.js applications

7. Supertest: a library used for testing Node.js HTTP servers such as Express.js applications1
