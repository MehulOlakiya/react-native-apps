import { Pressable, StyleSheet, Text } from "react-native"
import { Colors } from "../../constant/color"


function Button({children,onPress}){
    return(
        <Pressable style={({pressed})=>[styles.button,pressed && styles.pressed]} onPress={onPress}>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    )
}

export default Button


const styles = StyleSheet.create({
    button:{
        margin:4,
        paddingHorizontal:16,
        paddingVertical:8,
        backgroundColor:Colors.primary800,
        elevation:4,
        shadowColor:'black',
        shadowOpacity:  0.15,
        shadowOffset:{height:1,width:1},
        shadowRadius:2,
        borderRadius:4
    },
    pressed:{
        opacity:0.7
    },
    text:{
        fontSize:16,
        textAlign:'center',
        color:Colors.primary50
    }

})