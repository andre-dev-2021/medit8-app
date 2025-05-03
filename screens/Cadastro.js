import React, { useState } from 'react';
import { Button, ScrollView, Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Cadastro({ navigation }) {
    const [answers, setAnswers] = useState({
        textAnswer: '',
        radioAnswer: null,
    });

    const handleTextChange = (value) => {
        setAnswers((prev) => ({ ...prev, textAnswer: value }));
    };

    const handleRadioChange = (value) => {
        setAnswers((prev) => ({ ...prev, radioAnswer: value }));
    };

    const calculateScore = () => {
        let score = 0;

        // Example scoring logic
        if (answers.textAnswer.length > 5) score += 10; // Add points for text input length
        if (answers.radioAnswer === 'option2') score += 20; // Add points for specific radio selection

        return score;
    };

    const handleSubmit = () => {
        const score = calculateScore();
        console.log('Answers:', answers);
        console.log('Score:', score);
        navigation.navigate('Painel');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Questionnaire</Text>

            {/* Text Input */}
            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>1. Enter some text:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Type your answer here"
                    value={answers.textAnswer}
                    onChangeText={handleTextChange}
                />
            </View>

            {/* Radio Group */}
            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>2. Choose an option:</Text>
                {['option1', 'option2', 'option3'].map((option) => (
                    <TouchableOpacity
                        key={option}
                        style={[
                            styles.radioOption,
                            answers.radioAnswer === option && styles.radioSelected,
                        ]}
                        onPress={() => handleRadioChange(option)}
                    >
                        <Text style={styles.radioText}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Button title="Submit" onPress={handleSubmit} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    questionContainer: {
        marginBottom: 20,
    },
    questionText: {
        fontSize: 16,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
    },
    radioOption: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
    },
    radioSelected: {
        backgroundColor: '#d3f9d8',
        borderColor: '#4caf50',
    },
    radioText: {
        fontSize: 16,
    },
});