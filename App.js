import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import QuestionCheckCard from './components/QuestionCheckCard'
import QuestionRadioCard from './components/QuestionRadioCard'
import QuestionScreen from './components/QuestionScreen'

export default function App() {


  const [answers, setAnswers] = useState([
      {key: 0, val: "One night", isSelected: false}, 
      {key: 1, val: "A few months", isSelected: false}, 
      {key: 2, val: "Several years", isSelected: false}, 
      {key: 3, val:"Rest of my life", isSelected: false}
    ])

    const [preferences, setPreferences] = useState([
        {key: 0, val: "One night", isSelected: false}, 
        {key: 1, val: "A few months", isSelected: false}, 
        {key: 2, val: "Several years", isSelected: false}, 
        {key: 3, val:"Rest of my life", isSelected: false}
      ])


    updateRadioAnswer = (response) => {
      setAnswers(() => {
        const a = answers.map(element => element.key != response.key 
          ? Object.assign({}, element, {isSelected: false} )
          : Object.assign({}, element, {isSelected: true} )
        )
        return a
      })
    }


    updateCheckAnswer = (response) => {
      setPreferences(() => {
        const a = preferences.map(element => element.key != response.key 
          ? element 
          : Object.assign({}, element, {isSelected: !element.isSelected} )
        )
        return  a
      })
    }
  
  return (

    <View style={styles.container}>
      
      {/* {console.log("state: ", state)} */}

      <StatusBar style="auto" />

      <QuestionScreen
        question="About how long do you want your next relationship to last?"
        followupQuestion="Your ideal perosn would say:"
        answers={answers}
        preferences={preferences}
        handleQuestion = {(selectedAnswer) => updateRadioAnswer(selectedAnswer)}
        handleOtherQuestion = {(selectedAnswer) => updateCheckAnswer(selectedAnswer)}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
