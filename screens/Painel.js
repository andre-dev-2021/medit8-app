import { useState } from 'react';
import { ScrollView, Text, StyleSheet, View, Image} from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';
import WaterCard from '../components/Cardss';

export default function Painel({route}){ 

    const setAlert = () => {
        showDialog();
    }
        
    const { userData } = route.params;
    const { navigation } = route.params;

    const user = userData.name;
    const index = user.indexOf(' ') !== -1 ? user.indexOf(' ') : user.length;
    const name = userData.name.slice(0, 1).toUpperCase() + userData.name.slice(1, index).toLowerCase();

    const respondeuQuestionario = userData.respondeuQuestionario;


    const gotoQuestionario = () => {
        navigation.navigate('Questionario', {userData: userData, navigation: navigation});

    }

    const [visible, setVisible] = useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    if (respondeuQuestionario === false){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.header_text}>Bem Vindo(a)! {name}</Text>
                </View>
                <View style={styles.content}>
                    <Text>Você ainda não respondeu o questionário.</Text>
                    <Button mode='contained' onPress={gotoQuestionario} style={styles.button}>
                        <Text style={styles.card_text}>Responder agora.</Text>
                    </Button>
                </View>
            </ScrollView>
        );
    }
    
    return(
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.header_text}>Bem Vindo(a)! {name}</Text>
            </View>
            <View style={styles.content}>
                <WaterCard color='#579AEC' peso={userData.peso}/>
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
    },
    logo: {
        resizeMode: 'fit-content',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 120,
        justifyContent: 'center',
        padding: 10,
    },
    button: {
        justifyContent: 'center',
        width: '100%',
        height: 50,
        position: 'flex-end',
        backgroundColor: '#1F2D52',
        borderRadius: 10,
    },
})