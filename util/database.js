import * as SQLite from "expo-sqlite";
import Place from "../models/place";

const database = SQLite.openDatabaseSync("places.db");

export async function init() {
  return database.execAsync(`CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            imageUri TEXT NOT NULL,
            address TEXT NOT NULL,
            lat REAL NOT NULL,
            long REAL NOT NULL
           );`);
}

export async function insertPlace(place) {
  const title = place.title;
  const address = place.address;
  const imageUri = place.imageUri;
  const lat = place.location.lat;
  const long = place.location.long;

  return await database.runAsync(
    `INSERT INTO places (title, imageUri, address, lat, long) VALUES (?,?,?,?,?)`,
    `${title}`,
    `${imageUri}`,
    `${address}`,
    `${lat}`,
    `${long}`
  );
}

export async function fetchPlaces() {
  try {
    const response = await database.getAllAsync(`SELECT * FROM places;`);
    const places = []
    for (const dp of response) {
         places.push(new Place(dp.title,{address:dp.address,lat:dp.lat,long:dp.long},dp.imageUri,dp.id))
      }
    return response;
  } catch (error) {
    console.log(error);
  }
}


export async function fetchPlaceDetails(id){
  const dp = await database.getFirstAsync('SELECT * FROM places WHERE id = ?',`${id}`)
  const place = new Place(dp.title,{address:dp.address,lat:dp.lat,long:dp.long},dp.imageUri,dp.id)
  return place
}