import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 



export default class CardCheckButton extends Component {

    // highlightButton = () => {
    //     console.log("Call highlightbutton")
    // }

    // render() {

    //     const { options, updateState } = this.props

    //     return (
    //         <TouchableOpacity 
    //             style={[styles.button] } 
    //             key={option.key} 
    //             onPress={() => updateState(option, this.highlightButton )}>
    //             <Text style={styles.text}>{option.val}</Text>
    //             <AntDesign name="checkcircleo" size={24} color="black" />

    //         </TouchableOpacity> 
    //     )
    // }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // paddingHorizontal: 10
      },
    button: {
        backgroundColor: '#DDDDDD',
        padding: 15,
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginVertical: 1
    },
    text: {
        fontSize: 20,
    }

})