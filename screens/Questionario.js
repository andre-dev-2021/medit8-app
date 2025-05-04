import { ScrollView, Text, StyleSheet } from "react-native";

export default function Questionario({navigation}){
    const gotoPainel = () => {
        navigation.navigate('Painel');
    }

    return(
        <ScrollView style={styles.container}>
            <Text>Questionário</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flex: 1,
        backgroundColor: '#FDF8EE',
    }
})