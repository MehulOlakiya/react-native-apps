class Place {
  constructor(title,  location, imageUri,id) {
    this.title = title;
    this.address = location.address;
    this.location = {lat:location.lat,long:location.long};
    this.imageUri = imageUri;
    this.id = id;
  }
}
export default Place;
