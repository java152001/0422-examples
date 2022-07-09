/*** Async 1 Example ***/

// (async function fetchData(dataArray = []) {
//   // Performs a fetch request with the passed URL and returns the data as text asynchronously
//   const makeRequest = async function (url) {
//     const response = await fetch(url);
//     const data = await response.text();
//     return data;
//   };

//   // don't change this function, you will need to pass the Lisbon data to it to complete this exercise
//   /**
//    * @param data - the first parameter for this function should be your variable with the stored Lisbon weather data
//    * @param dataArr - the dataArray variable which should hold all four data responses from the given URLs
//    */

//   const addLisbonDataToDocument = (data, dataArr = []) => {
//     // validate data format and data
//     data = JSON.parse(data);
//     if (data.name !== 'Lisbon') {
//       data = null;
//     }

//     // create DOM element for Lisbon Data and add it to document
//     let arrayLengthDiv = document.createElement('div');
//     arrayLengthDiv.innerHTML = `<div id="array-length-div">Data Items:${dataArr.length}</div>`;
//     document.body.appendChild(arrayLengthDiv);

//     // create DOM element for Lisbon Data and add it to document
//     let lisbonDiv = document.createElement('div');
//     lisbonDiv.innerHTML = `<div id="lisbon-data-div">Weather:${JSON.stringify(data)}</div>`;
//     document.body.appendChild(lisbonDiv);
//   };

//   const urlArray = [
//     'https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=7b68bf0910a2a7530b9929d01904bc79',
//     'https://api.openweathermap.org/data/2.5/weather?q=Houston&units=metric&APPID=7b68bf0910a2a7530b9929d01904bc79',
//     'https://api.openweathermap.org/data/2.5/weather?q=Lisbon&units=metric&APPID=7b68bf0910a2a7530b9929d01904bc79',
//     'https://api.openweathermap.org/data/2.5/weather?q=Baltimore&units=metric&APPID=7b68bf0910a2a7530b9929d01904bc79',
//   ];

//   urlArray.forEach(async (url) => {
//     makeRequest(url).then(function (result) {
//       // STEP 1: Store `result` inside the variable dataArray, this is required to pass this exercise

//       dataArray.push(result);

//       if (dataArray.length == urlArray.length) {


//         // STEP 2: Loop through each item in the `dataArray` and use the logic below by uncommenting the code to see if it is the correct weather data for `Lisbon`

//         for (let i = 0; i < dataArray.length; i++) {

//             if (JSON.parse(dataArray[i]).name == "Lisbon") {
//         // // You will need to change the itemInDataArray variable to match your own variable that stores the current item in array that you are checking
//                addLisbonDataToDocument(dataArray[i], dataArray);
//             }

//         }

//         // STEP 3: Return dataArray

//         return dataArray   
//       }
//     });
//   });
// })();


/*** Example 2 Map API ***/

// function createMapMarker() {
//   // TODO: add your own access token
//   mapboxgl.accessToken = 'pk.eyJ1IjoiamF2YTE1MjAwMSIsImEiOiJjbDBtdnNnd3ExNndtM2psYTNpczB4cHdtIn0.ZnTKfbUKSzW_Dd0Un9io4g';

//   let map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v11',
//     center: [-71.091542, 42.358862],
//     zoom: 12,
//   });

//   // TODO: add a marker to the map

//   const marker1 = new mapboxgl.Marker()
//   .setLngLat([-71.12, 42.39])
//   .addTo(map);
// }

// // Do not edit the code below
// window.onload = () => {
//   createMapMarker();
// };


/*** Example 3 Bus Stop Animate ***/

const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoiamF2YTE1MjAwMSIsImEiOiJjbDBtdnNnd3ExNndtM2psYTNpczB4cHdtIn0.ZnTKfbUKSzW_Dd0Un9io4g';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 14,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"

var marker = new mapboxgl.Marker()
  .setLngLat(busStops[0])
  .addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.

  setTimeout(function() {

    if (counter === busStops.length - 1) {
      counter = 0;
    } else {
      counter++;
    }
    
    marker.setLngLat(busStops[counter]);

    move();
  }, 1000); 
  
}