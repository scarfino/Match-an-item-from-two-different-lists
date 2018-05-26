/*
@scarfino 2018
This script will match an element that is the same in two arrays.
*/

let myPlaces = ['Houston', 'Sioux Falls', 'Phoenix'];

let friendPlaces = ['Sioux Falls', 'Missoula', 'Buffalo'];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
    if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
      console.log(friendPlaces[friendPlacesIndex]);
    }
  }
}