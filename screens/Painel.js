import { useState } from 'react';
import { ScrollView, Text, StyleSheet, View} from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';

export default function Painel({route, navigation}){ 

    const setAlert = () => {
        showDialog();
    }
        
    const { user } = route.params;
    const { score } = route.params;

    const gotoQuestionario = () => {
        navigation.navigate('Questionario');

    }

    const [visible, setVisible] = useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    return(
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profile_picture}>
                <Button icon='account' size='50' textColor='#FDF8EE' mode='text' onPress={() => {}}/>
                </View>
                <Text style={styles.header_text}>Bem Vindo(a)! {user}</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.card}>
                    <View style={styles.card_header}>
                        <Button icon='cup-water' size='1000' textColor='#FDF8EE' mode='text' onPress={() => {}}/> 
                        <Text style={styles.card_title}>Água</Text>
                    </View>
                    <Text style={styles.card_text}>Copos bebidos hoje: {score.agua[0]}</Text>
                    <Text style={styles.card_text}>Faltam {score.agua[1] - score.agua[0]} copos.</Text>
                    <Button 
                    textColor='#FDF8EE'
                    style={styles.card_button} 
                    mode='outlined'
                    onPress={() => {setAlert}}
                    >Criar alerta</Button>
                    <Portal>
                        <Dialog visible={visible} onDismiss={() => {setVisible(false)}}>
                            <Dialog.Title>Alerta de água</Dialog.Title>
                            <Dialog.Content>
                                <Text>Alerta criado!</Text>
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button onPress={() => {hideDialog()}}>OK</Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </View>
                <Button 
                mode='outlined'
                onPress={() => {gotoQuestionario()}}
                >Refazer questionário</Button>
            </View>
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
    },
    header:{
        width: '100%',
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1F2D52',
        padding: 10,
        paddingTop: 20,
        paddingBottom: 2,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        position: 'absolute',
    },
    header_text:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FDF8EE',
        marginLeft: 10,
    },
    profile_picture:{
        width: 50,
        height: 50,
        borderWidth: 2,
        borderColor: '#FDF8EE',
        borderRadius: 50,
    },
    content: {
        marginTop: 110,
        padding: 10,
    },
    card:{
        margin: 10,
        width: '90%',
        backgroundColor: '#579AEC',
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
})