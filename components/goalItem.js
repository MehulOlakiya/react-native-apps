import { StyleSheet ,View ,Text , Pressable} from "react-native"

function GoalItem (props) {

    const deleteGoalHandler = () =>{
        props.onItemDelete(props.id)
    }
   return (
       <View  style={styles.goalItem}>
        <Pressable android_ripple={{color:'#210664'}} style={({pressed})=>{ pressed && styles.pressedItem }} onPress={props.onItemDelete.bind(this,props.id) 
        
        }>
    <Text style={styles.goalText}>{props.text}</Text>
    </Pressable>
    </View>
   )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem :{
        margin:8,
        borderRadius:6,
        backgroundColor:'#fcfafe',
    },
    goalText:{
        padding:8 ,
        color:'#120438',
        
      },
      pressedItem :{
        opacity:0.5
      }
})