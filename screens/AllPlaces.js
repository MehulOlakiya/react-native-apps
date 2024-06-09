import { useIsFocused } from "@react-navigation/native";
import PlacesList from "../components/Places/PlacesList";
import { useEffect, useState } from "react";
import {  fetchPlaces } from "../util/database";

function AllPlaces({ route }) {
  const [loadPlaces, setLoadPlaces] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPlaces() {
      try {
       const places = await fetchPlaces(); 
       setLoadPlaces(places)
      } catch (error) {
        console.log("errore", error);
      }
    }

    if (isFocused) {
      loadPlaces();
    }
  }, [isFocused]);

  return <PlacesList places={loadPlaces} />;
}

export default AllPlaces;
