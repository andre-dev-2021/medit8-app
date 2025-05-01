import { Text, TextInput, View, StyleSheet } from "react-native";

export default function InputText({number, text, placeholder}){
    return(
        <View style={container}>
            <Text style={label}>{number} - {text}</Text>
            <TextInput
            style={input}
            placeholder={placeholder}
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
        borderRadius: 15
    },
})

const label = StyleSheet.compose(styles.text)
const input = StyleSheet.compose(styles.input)
const container = StyleSheet.compose(styles.container)