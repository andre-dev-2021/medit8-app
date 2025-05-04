import { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { db } from '../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';


export default function Login({navigation}){

    const fetchUser = async (userId) => {
        try {
            const userDoc = await getDoc(doc(db, 'users', userId)); // Fetch specific user by ID
            if (userDoc.exists()) {
                const userData = userDoc.data();
                return userData;
            } else {
                return null; 
            }
        } catch (error) {
            return null; 
        }
    };

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [aviso, setAviso] = useState('');


    const handlePress = async ({email, password}) =>{
        if (email === undefined || password === undefined){
            return setAviso('Preencha todos os campos!')
        }
        
        const userData = await fetchUser(email);

        if (userData === null){
            return setAviso('Usuário não encontrado!')
        }else if (userData.password !== password){
            return setAviso('Senha incorreta!');
        }else{
            setAviso('');
            navigation.navigate('Painel', {userData: userData, navigation: navigation});
        }
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.form_container}>
            <Text style={styles.welcome}>Bem Vindo(a) de volta!</Text>
                <View style={styles.input_container}>
                    <Text style={styles.label}>Email:</Text>
                    <TextInput
                    label={'usuario@email.com'}
                    mode='outlined'
                    placeholder='usuario@email.com'
                    onChangeText={text => setEmail(text)}
                    value={email}
                    autoCapitalize='none'
                    />
                </View>
                <View style={styles.input_container}>
                    <Text style={styles.label}>Senha:</Text>
                    <TextInput
                    label={'Senha'} 
                    mode='outlined'
                    placeholder='Informe sua senha'
                    autoCapitalize='none'
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
                    onPress={() => handlePress({email, password})}>
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