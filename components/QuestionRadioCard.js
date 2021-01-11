import React, {Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import AnswerGroup from "./AnswerGroup"


export default class QuestionRadioCard extends Component {


    state = {
        selected : []
    }

    handlePressUpdate = (option) => {
        const { onPress} = this.props

        this.setState({
            selected: [option]
        })

        onPress(option)
    }




    render() {
        const { question, choices, onPress} = this.props

        return (
            <View style={styles.container}>
                <Text style={styles.text} >{question}</Text>
                <AnswerGroup 
                    updateState={this.handlePressUpdate } 
                    options={choices} 
                    selectedIndices ={this.state.selected}
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        
        marginTop: 80,
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "stretch"
    },
    text: {
        fontSize: 20,
    }
})