import { FlatList } from "react-native";
import PlaceItem from "./PlaceItem";

function renderPlaceHandler(itemData) {
  return <PlaceItem place={itemData.item} />;
}

function PlacesList({ places }) {
  <FlatList
    data={places}
    keyExtractor={(item) => item.id}
    renderItem={renderPlaceHandler}
  />;
}

export default PlacesList;
