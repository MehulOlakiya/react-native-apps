import PlaceForm from "../components/Places/PlaceForm"
import {insertPlace} from '../util/database'



function AddPlace({navigation}){
 
    async function createPlaceHandler(place){
       try {
        console.log('test',place)
       const result = await insertPlace(place)
        console.log('ers',result)
       } catch (error) {
        console.log('error',error)
       }
        navigation.navigate('AllPlaces')
    }
    return <PlaceForm onCreatePlace={createPlaceHandler}/>
}

export default AddPlace