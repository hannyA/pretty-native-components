import React, {Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import AnswerGroup from "./AnswerGroup"


export default class QuestionCheckCard extends Component {

    state = {
        // answers: []
        selected : []

    }

    // selectResponse = (response, cb) => {
    //     console.log(response)
    //     const { onPress } = this.props
    //     const found = this.state.answers.find(element => element == response);
        
    //     if (found) {
    //         console.log("found")

    //         this.setState(currentState => {
    //             return {selected: currentState.answers.filter(e => e != response)}
    //         })
    //     } else {
    //         console.log("not found")

    //         this.setState(currentState => {
    //             return { selected: currentState.answers.concat(response)}
    //         })
    //     }
    //     // cb(this.state.answers)  
    //     onPress(this.state.selected)
    //     cb()   
    // }


    handlePressUpdate = (option) => {
        const { onPress} = this.props
        const found = this.state.selected.find(element => element.key == option.key);
        
        if (found) {
            console.log("found")

            this.setState(currentState => {
                return {selected: currentState.selected.filter(e => e.key != option.key)}
            })
        } else {
            console.log("not found")

            this.setState(currentState => {
                return { selected: currentState.selected.concat(option)}
            })
        }

        onPress(option)
    }


    render() {
        const { question, choices, onPress} = this.props

        return (
            <View style={styles.container}>

                <Text style={styles.text} >{question}</Text>
                <AnswerGroup 
                    updateState={ this.handlePressUpdate} 
                    options={choices}
                    selectedIndices ={this.state.selected}
                 />

                <TouchableOpacity style={[styles.button]} >
                    <Text style={styles.skipText}>
                        Skip this question
                    </Text>
                </TouchableOpacity> 


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor:"#000",
        marginTop: 80,
        marginHorizontal: 15,
        justifyContent: "center",
        alignItems: "stretch"
    },
    text: {
        fontSize: 20,
        margin: 40,
    },
    skipText: {
        fontSize: 12,
    }
})