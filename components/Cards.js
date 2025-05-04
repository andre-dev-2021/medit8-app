import { StyleSheet, View, Text } from 'react-native';

export default function WaterCard(props){

    const copos = Math.floor((0.035 * props.peso) / 0.2);

    return(
        <View style={styles.card} color={props.color}>
            <View style={styles.card_header}>
                <Text style={styles.card_title}>Água</Text>
            </View>
            <Text style={styles.card_text}>Você deve beber {copos} copos de agua diariamente.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        margin: 10,
        width: '90%',
        backgroundColor: {color},
        padding: 10,
        borderRadius: 10,
    },
    card_title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FDF8EE',
    },
    card_text:{
        fontSize: 15,
        color: '#FDF8EE',
    },
    card_button:{
        marginTop: 10,
        backgroundColor: '#1F2D52',
    },
    card_header:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
});