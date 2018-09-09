# Triangle challenge
A program that will determine the type of a triangle. It should take the lengths of the triangle's three sides as input, and return whether the triangle is equilateral, isosceles or scalene.

## App design

### Front end
* Used couple of componets (noticication, buttons, alert) from the TS ui 
* I did not spend much time to create the fancy UI, it's just basic html file

### Backend
* Used express framework to create the api
* Genaric module as shape and it can hole different type of shapes (triaangle atm). That module expose shape function which will get the shape type as main argument and it decide which shape logic needs to call. So that function can be extent to support any other shape as required.
* Triangle module has functions for it's own logic and those are created as pure functions.



## Getting Started

### Prerequisites
* Make sure node is installed (8 or 8+)

### Installing and running app
Clone the repo
```
https://github.com/{username}/triangle-challenge.git
```
cd in to the folder and run following commands 
```
npm install
npm start
```
npm start command will start the express server in 8080 port and you can open the app on
```
http://localhost:8080/
```
## Running the tests
Run following commands to run the unit tests and the code coverage
```
npm run test
```
```
npm run unit:cover
```

