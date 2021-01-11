import { StatusBar } from 'expo-status-bar';
import React, {Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import QuestionCheckCard from './QuestionCheckCard'
import QuestionRadioCard from './QuestionRadioCard'

export default class QuestionScreen extends Component {

    // state = {
    //     answers: []
    // }

    // updateAnswer = (response, cb) => {
    //     this.setState({
    //         answers: [response]
    //     })

    //     console.log("Count: ", this.state.answers.length)
    //     console.log(this.state.answers)

    //     this.props.onPress(this.state.answers)
    //     cb()   
    // }


    // handleAnswer = (answers) => {
    //     this.setState({
    //         answered: answers.length > 0 ? true : false
    //     })
    //     console.log("Answered answered", this.state.answered)
    // }

    render() {

        const { question, followupQuestion, answers, preferences, handleQuestion, handleOtherQuestion} = this.props

        return (
            <View style={styles.container}>

                <QuestionRadioCard 
                    question={question}
                    choices={answers}
                    onPress = { handleQuestion}
                />

            {console.log(answers)}
            {console.log(preferences)}

                {answers.find(element => element.isSelected) &&
                    <QuestionCheckCard  
                        question={followupQuestion}
                        choices={preferences}
                        onPress = { handleOtherQuestion}
                    />
                }

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
    },
  });
  