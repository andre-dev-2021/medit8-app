import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useState } from 'react';
import React from 'react';

let respostas = {
    nutricao: [9],
    exercicio: [0],
    agua: [3],
    sol: [20],
    temperanca: [2],
    ar_puro: [true],
    sono: [1],
    confianca: [true],
}

const WaterCard = props => {
    const { peso } = props;
    const copos = Math.floor((0.035 * parseInt(peso)) / 0.2);

    return(
            <View style={styles.water}>
                <View style={styles.card_header}>
                    <Text style={styles.card_title}>Água</Text>
                </View>
                <Text style={styles.card_text}>Você deve beber <Text style={styles.card_emphasis}>{copos}</Text> copos de agua diariamente!!</Text>
                <Button
                mode='contained'
                onPress={() => alert('Alerta criado!')}
                style={styles.card_button}>
                    <Text style={styles.card_text}>Criar alerta</Text>
                </Button>
            </View>
    )
}

const NutricaoCard = props => {

    let pontuacao = '';
    let aviso = '';

    if(respostas.nutricao > 6){
        pontuacao = 'Excelente!';
        aviso = 'Continue assim!';
    }else if(respostas.nutricao > 4){
        pontuacao = 'Bom!';
        aviso = 'Você pode melhorar!';
    }else {
        pontuacao = 'Ruim!';
        aviso = 'Você precisa melhorar!, evite alimentos industrializados ou açucarados e coma mais verduras e legumes!';
    }
    return(
        <View style={styles.nutricao}>
            <View style={styles.card_header}>
                <Text style={styles.card_title}>Nutrição</Text>
            </View>
            <View style={styles.card_header}>
                <Text style={styles.card_text}>Pontuação:</Text><Text style={styles.card_emphasis}> {pontuacao}</Text>
            </View>
            <Text style={styles.aviso}>{aviso}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    water:{
        margin: 10,
        width: '90%',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#499ECE',
    },
    nutricao: {
        margin: 10,
        width: '90%',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#49CE6B',
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
    card_emphasis:{
        fontSize: 15,
        fontWeight: 'bold',
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

export { WaterCard };
export { NutricaoCard };