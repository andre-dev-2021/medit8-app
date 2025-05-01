import { Text, TextInput, View, StyleSheet } from "react-native";

export default function InputNumber({number, text}){
    return(
        <View style={container}>
            <Text style={label}>{number} - {text}</Text>
            <TextInput
            style={input}
            keyboardType="numeric"
            placeholder="Teste"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 24,
        fontWeight: 'bold'
    },
    container:{
        display: 'flex',
        padding: 10
    },
    input: {
        margin: 1,
        borderWidth: 1,
        borderRadius: 5
    },
})

const label = StyleSheet.compose(styles.text)
const input = StyleSheet.compose(styles.input)
const container = StyleSheet.compose(styles.container)