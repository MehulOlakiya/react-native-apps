import { StyleSheet ,View,TextInput,Button,Modal,Image} from "react-native"
import { useState} from "react"

function GoalInput (props) {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    const goalInputHandler = (text) =>{
        setEnteredGoalText(text)
      }

      const addGoalHandler = () =>{
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
      }

    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            {/* <Image style={styles.image} source={require('../assets/images/goal1.png')}/> */}
        <TextInput style={styles.textInput}  onChangeText={goalInputHandler} placeholder='Enter Your Goal!' value={enteredGoalText}/>
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button onPress={addGoalHandler} title='Add Goal' color="#5e0acc"/>
            </View>
            <View style={styles.button}>
                <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
            </View>
        </View>
      </View>
      </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        backgroundColor:'#1e085a'
      },
      textInput:{
       padding:14,
       borderWidth:1,
       borderColor:'#fcfafe',
       backgroundColor:'#fcfafe',
       color:'#120438',
       borderRadius:8,
       width:'100%'
      },
      buttonContainer:{
        marginTop:16,
        flexDirection:"row",
      },
      button:{
        width:100,
        marginHorizontal:8
      },
      image:{
        height:100,
        width:100,
        margin:20
      }
})