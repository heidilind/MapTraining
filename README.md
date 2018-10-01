# MapTraining

## Requirements
Requires npm v10.7.0 

## Install
```
$ git clone https://github.com/heidilind/MapsTraining.git
$ cd MapTraining/maps
```
Insert your Google API key manuallly in the maps/index.html <script> element
```
$ npm install
$ ./deploy.sh
$ cd ../maps-backend
$ npm install

```
## Run

In the MapsTraining/maps-backend run
```
$ npm start
```
To run the tests run in the MapsTraining/maps 
```
$ CI=true npm test
```
## Usage

Use application with a browser at  http://localhost:3001.
Use browser or other client program to see JSON:s received by the server at the address http://localhost:3001/paths
