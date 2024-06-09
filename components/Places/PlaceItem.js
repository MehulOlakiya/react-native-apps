import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constant/color";


function PlaceItem({ place ,onSelect}) {
    return (
        <Pressable style={({pressed})=>[styles.item, pressed && styles.pressed]} onPress={onSelect.bind(this,place.id)}>
            <Image  style={styles.image} source={{uri:place.imageUri}}/>
            <View style={styles.info}>
                <Text style={styles.title}>{place.title}</Text>
                <Text style={styles.address}>{place.address}</Text>
            </View>
        </Pressable>
    )
}

export default PlaceItem;

const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        alignItems:'flex-start',
        marginVertical:12,
        borderRadius:6, 
        elevation:2,
        backgroundColor:Colors.primary500,
        shadowColor:'black',
        shadowOpacity:  0.15,
        shadowOffset:{height:1,width:1},
        shadowRadius:2,
    },
    pressed:{
        opacity:0.8,

    },
    image:{
        flex:1,
        borderBottomLeftRadius:4,
        borderTopLeftRadius:4,
        height:100
    },
    info:{
        flex:2,
        padding:12,
        // justifyContent:'center'
        marginTop:6
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        color:Colors.gray700,
        marginBottom:4
        // textAlign:'center'
    },
    address:{
        fontSize:12 ,
        color:Colors.gray700
    }

})
