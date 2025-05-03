import { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import users from '../data/users.json';

export default function Login({navigation}){
    
    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [aviso, setAviso] = useState('');

    const handlePress = ({user, password}) =>{
        if (user === undefined || password === undefined){
            return setAviso('Preencha todos os campos!')
        }else if(users[user] === undefined || users[user].password !== password){
            return setAviso('Usuario ou senha incorretos!');
        }else{
            navigation.navigate('Painel', {user});
        }   
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.form_container}>
                <View>
                    <Text style={styles.label}>Usuario</Text>
                    <TextInput
                    label={'Usuário'}
                    mode='outlined'
                    placeholder='Usuario'
                    onChangeText={text => setUser(text)}
                    value={user}
                    autoCapitalize='none'
                    />
                </View>
                <View>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                    label={'Senha'} 
                    mode='outlined'
                    placeholder='Senha'
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    />
                </View>
                <Text>{aviso}</Text>
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
    form_container: {
        margin: 2,
        marginTop: '20%',
        padding: 10,
        display: 'flex',
    },
    label: {
        fontSize: 20,
        fontWeight: 5,
        color: '#1F2D52',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'reverse-row',
        alignItems: 'flex-end',
    },
    button: {
        margin: 2,
        justifyContent: 'center',
        width: '50%',
        height: 50,
        backgroundColor: '#5FB3F3',
    },
});