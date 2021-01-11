import React, {Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 



export default class AnswerGroup extends Component {

    highlightButton = (selectedOptions) => {

        // selectedOptions.map()
        console.log("Call highlightbutton")
    }


    selectButton = (option) => {



    }

    render() {

        const { options, updateState, selectedIndices } = this.props

        return (
            <View>
                {options.map((option) => {
                    return ( 
                        <View key={option.key} style={styles.container}>
                            <TouchableOpacity
                              style={[styles.button]} 
                              onPress={() => updateState(option)}>
                                <Text style={styles.text}>
                                    {option.val}
                                </Text>
                                {selectedIndices.find(element => element.key == option.key) &&
                                    <AntDesign 
                                    name="checkcircleo" 
                                    size={24} 
                                    color="black" />
                                }
                            </TouchableOpacity> 
                        </View>
                    )
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // paddingHorizontal: 10
      },
    button: {
        flexDirection: "row",
        justifyContent: 'space-between',
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