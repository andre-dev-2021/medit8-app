import { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { db } from '../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';


export default function Login({navigation}){

    const fetchUserFromFirestore = async (userId) => {
        try {
            const userDoc = await getDoc(doc(db, 'users', userId)); // Fetch specific user by ID
            if (userDoc.exists()) {
                const userData = userDoc.data();
                return userData;
            } else {
                return null; // Return null if user does not exist
            }
        } catch (error) {
            return null; // Return null in case of an error
        }
    };

    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [aviso, setAviso] = useState('');


    const handlePress = ({user, password}) =>{
        if (user === undefined || password === undefined){
            return setAviso('Preencha todos os campos!')
        }
        const userData = fetchUserFromFirestore(user);
        let userName = userData.name;
        let userPassword = userData.password;
        if (userName === user && userPassword === password){
            navigation.navigate('Painel', {user});
        }
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.form_container}>
            <Text style={styles.welcome}>Bem Vindo(a) de volta!</Text>
                <View style={styles.input_container}>
                    <Text style={styles.label}>Usuario</Text>
                    <TextInput
                    label={'Usuário'}
                    mode='outlined'
                    placeholder='Digite seu usuário'
                    onChangeText={text => setUser(text)}
                    value={user}
                    autoCapitalize='none'
                    />
                </View>
                <View style={styles.input_container}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                    label={'Senha'} 
                    mode='outlined'
                    placeholder='Digite sua senha'
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    />
                </View>
                <Text style={styles.aviso}>{aviso}</Text>
                <View style={styles.buttons}>
                    <Button 
                    style={styles.button}
                    textColor='#FDF8EE'
                    onPress={() => handlePress({user, password})}>
                    Entrar</Button>
                </View>
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
    welcome:{
        fontSize: 35,
        fontWeight: 'bold',
        color: '#1F2D52',
        marginTop: 20,
        marginBottom: 20,
    },
    form_container: {
        margin: 2,
        marginTop: '50%',
        padding: 10,
        display: 'flex',
    },
    input_container: {
        padding: 10,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1F2D52',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'reverse-row',
        alignItems: 'flex-end',
    },
    button: {
        margin: 5,
        justifyContent: 'center',
        width: '50%',
        height: 50,
        backgroundColor: '#1F2D52',
    },
    aviso: {
        color: '#FF0000',
        fontSize: 10,
    },
});