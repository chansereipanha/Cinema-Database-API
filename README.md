# Cinema API

## Website url: 
1. MAIN: https://localhost:3000
2. MOVIE: https://localhost:3000/api/movies
3. USER: https://localhost:3000/api/users
3. BOOKINGS: https://localhost:3000/api/bookings

## Packages downloaded: 
npm i express express-generator nodemon body-parser mongoose mongodb

This was made and tested using **VSCode**, **Postman**, and **MongoDB Compass**


**MongoDB Details**: Username: "CinemaAdmin", Password: "Cinema01"

## Instructions: 

### 1. Inside VSCode make sure you're in the correct directory: /cinema/cinema-api
---
### 2. Movies: 
---
  -  GET Movie listings: https://localhost:3000/api/movies
     - How to GET movies list: 
          1.  Inside Postman, go to GET page
          2.  Enter the URL above, and click on button name "Send". And it will show a list with all the movies that has been posted. 
---
  - POST Movie: https://localhost:3000/api/movies
      - How to POST new movies: 
        1. Inside Postman, go to POST page
        2. Enter the URL above 
        3. Head to the "Body" page, click on "raw" 
        4. Type in your movie details in the format below
        5. Click on button name "Send".  
        

        - POST format: 

              {  
                "title": "",
                "genre": "",
                "duration": /*This is in minutes*/,
                "releaseDate": "YYYY-MM-DD",
                "description": "",
                "rating" : /*Must be an integer. Rating from 1-10*/
              }
        
        - Example of POST: 

              {
                "title": "The Dark Knight",
                "genre": "Action",
                "duration": 152,
                "releaseDate": "2008-07-18",
                "description": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
                "rating" :    7
              }
---
  - PUT Movie: https://localhost:3000/api/movies/(movieID)
    - How to PUT movies details: 
      1. Inside Postman, go to PUT page, place the URL above with the movie ID
      2. Head to the "Body" page, click on "raw" 
      3. Type in your updated movie details and click on button name "Send". 
          
        - PUT Format:

              {
                "title": "",
                "genre": "",
                "duration": /*This is in minutes*/,
                "releaseDate": "YYYY-MM-DD",
                "description": "",
                "rating" : /*Must be an integer. Rating from 1-10*/
              }

        - Example of PUT: 
         
              Original: 
                {
                  "title": "The Dark Knight",
                  "genre": "Action",
                  "duration": 152,
                  "releaseDate": "2008-07-18",
                  "description": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
                  "rating" :    7
                }


              PUT new information: 
                {
                  "title": "Avengers"
                }
        
              Updated Movie: 
                {
                  "title": "Avengers",
                  "genre": "Action",
                  "duration": 152,
                  "releaseDate": "2008-07-18",
                  "description": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
                  "rating" :    7
                }
---
  - DEL Movie: https://localhost:3000/api/movies/(movieID)
    - How to DEL movies from list: 
      1. Inside Postman, go to DEL page, 
      2. Type in the URL above with the movie ID
      3. Click on button name "Send", and It will delete the movie from the movie list. 
---

### 3. Users: 
---
  -  GET Users listings: https://localhost:3000/api/users
     - How to GET users list: 
          1.  Inside Postman, go to GET page
          2.  Enter the URL above, and click on button name "Send". And it will show a list with all the user that has been posted. 
---
  - POST User: https://localhost:3000/api/users
      - How to POST new user: 
        1. Inside Postman, go to POST page
        2. Enter the URL above 
        3. Head to the "Body" page, click on "raw" 
        4. Type in your user details in the format below
        5. Click on button name "Send".  
        

        - POST format: 

              {
                "username": "",
                "email": "",
                "password": "",
              }
        
        - Example of POST: 
       
              {
                "username" : "alex",
                "email" : "alex@gmail.com",
                "password" : 123
              }
---
  - PUT User: https://localhost:3000/api/users/(userID)
    - How to PUT user details: 
      1. Inside Postman, go to PUT page, place the URL above with the user ID
      2. Head to the "Body" page, click on "raw" 
      3. Type in your updated user details and click on button name "Send". 
          
        - PUT Format:

              {
                "username": "",
                "email": "",
                "password": "",
              }


        - Example of PUT: 
         
              Original: 
                {
                  "username" : "alex",
                  "email" : "alex@gmail.com",
                  "password" : 123
                }


              PUT new information: 
                {
                  "username": "Kevin"
                }
        
              Updated User: 
                {
                  "username" : "Kevin",
                  "email" : "alex@gmail.com",
                  "password" : 123
                }
---
  - DEL User: https://localhost:3000/api/users/(userID)
    - How to DEL user from list: 
      1. Inside Postman, go to DEL page, 
      2. Type in the URL above with the user ID
      3. Click on button name "Send", and It will delete the user from the user list. 
---
  
### 4. Bookings:
--- 
  -  GET Bookings listings: https://localhost:3000/api/bookings
     - How to GET bookings list: 
          1.  Inside Postman, go to GET page
          2.  Enter the URL above, and click on button name "Send". And it will show a list with all the bookings that has been posted. 
---
  - POST Bookings: https://localhost:3000/api/bookings
      - How to POST new bookings: 
        1. Inside Postman, go to POST page
        2. Enter the URL above 
        3. Head to the "Body" page, click on "raw" 
        4. Type in your user details in the format below
        5. Click on button name "Send".  
        

        - POST format: 

              { 
                "userID": "",
                "movieID": "",
                "seatNumber": "",
                "status" : "/*Booked or Cancel. Default value is Booked*/"
              }
        
        - Example of POST: 
       
              {
                "userID": "66ea73a868dd52ebeb235ea5",
                "movieID": "66ea48cb19e838e6b3525df0",
                "seatNumber" : "A12",
                "status" : "Booked"
              }

---
      
  - PUT Bookings: https://localhost:3000/api/bookings/(bookingID)
    - How to PUT user details: 
      1. Inside Postman, go to PUT page, place the URL above with the bookings ID
      2. Head to the "Body" page, click on "raw" 
      3. Type in your updated bookings details and click on button name "Send". 
          
        - PUT Format:

              {
                "userID": "",
                "movieID": "",
                "seatNumber": "",
                "status" : "/*Booked or Cancelled. Default value is Booked*/"
              }


        - Example of PUT: 
         
              Original
                {
                  "userID": "66ea73a868dd52ebeb235ea5",
                  "movieID": "66ea48cb19e838e6b3525df0",
                  "seatNumber" : "A12",
                  "status" : "Booked"
                }


              PUT new information: 
                {
                  "seatNumber": "B12"
                }
        
              Updated Bookings: 
                {
                  "userID": "66ea73a868dd52ebeb235ea5",
                  "movieID": "66ea48cb19e838e6b3525df0",
                  "seatNumber" : "B12",
                  "status" : "Booked"
                }
---            
  - DEL Bookings: https://localhost:3000/api/bookings/(bookingID)
    - How to DEL bookings from list: 
      1. Inside Postman, go to DEL page, 
      2. Type in the URL above with the booking ID
      3. Click on button name "Send", and It will delete the booking from the booking list. 
---
