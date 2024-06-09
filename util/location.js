
const GOOGLE_API_KEY = 'AIzaSyDC-F9Dzw9MUmgNIf3AxXc4Y6qo-wJEy7o'
const API_KEY ="222049a391114027ac9f08a7e5be7efd"

export function getMapPreview(lang,lat){

const imageUrl =`https://maps.googleapis.com/maps/api/staticmap?center=${lang},${lat}&zoom=13&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lang},${lat}&key=${GOOGLE_API_KEY}`
return imageUrl

}

export async function getAddress(lat, long){
    return new Promise((resolve,reject)=>{
        const requestOptions = {
            method: 'GET',
          };
          
         fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=${API_KEY}`, requestOptions)
            .then(response => response.json())
            .then(result =>{
                resolve(result.features[0].properties.formatted)
            })
            .catch(error => console.log('error', error));
    })

}