import { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { db } from '../firebase/firebaseConfig';
import { getDoc, doc, setDoc } from 'firebase/firestore';


export default function Login({navigation}){

    const addUser = async (userId, userData) => {
        try {
            const userDoc = await getDoc(doc(db, 'users', userId))
            if (userDoc.exists()) {
                return true;
            }
            await setDoc(doc(db, 'users', userId), userData);
            return false
        }
        catch{
            console.log('Erro ao adicionar usuário:', error);
        }
    }

    const [user, setUser] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [peso, setPeso] = useState(0);
    const [idade, setIdade] = useState(0);
    const [aviso, setAviso] = useState('');

    const confirmPassword = (password, confirmPassword) => {
        if (password !== confirmPassword){
            setAviso('As senhas não conferem!');
        }else{
            setAviso('');
        }
    }

    const handlePress = async () =>{
        if (user === undefined || password === undefined || peso === 0 || idade === 0){
            return setAviso('Preencha todos os campos!');
        }else if (peso < 0 || idade < 0){
            return setAviso('Peso ou idade inválidos!');
        }else if (peso > 300 || idade > 120){
            return setAviso('Peso ou idade inválidos!');
        }else if (password.length < 6){
            return setAviso('A senha deve ter no mínimo 6 caracteres!');
        }else{
            setAviso('');
            const userData  = {
                name: user,
                email: email,
                password: password,
                peso: peso,
                idade: idade,
            }
            
            const userExist = await addUser(email, userData);

            if(userExist){
                return setAviso('Usuário já cadastrado!');
            }

            alert('Usuário cadastrado com sucesso!');
            setUser('');
            setPassword('');
            setPeso(0);
            setIdade(0);
            setAviso('');

            navigation.navigate('Painel', {userData: userData, navigation: navigation});
        }
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.form_container}>
            <Text style={styles.welcome}>Comece a monitorar sua saúde.</Text>
                <View style={styles.input_container}>
                    <Text style={styles.label}>Nome:</Text>
                    <TextInput
                    label={'Nome e Sobrenome'}
                    mode='outlined'
                    placeholder='Nome e Sobrenome'
                    onChangeText={text => setUser(text)}
                    value={user}
                    autoCapitalize='none'
                    />
                </View>
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
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    />
                </View>
                <View style={styles.input_container}>
                    <Text style={styles.label}>Confirme sua senha:</Text>
                    <TextInput
                    label={'Confirme sua senha'} 
                    mode='outlined'
                    placeholder='Confirme sua senha'
                    secureTextEntry={true}
                    onChangeText={text => confirmPassword(text, password)}
                    />
                </View>
                <View style={styles.input_container}>
                    <Text style={styles.label}>Peso:</Text>
                    <TextInput
                    label={'Peso'} 
                    mode='outlined'
                    placeholder='Peso (Kg)'
                    keyboardType='numeric'
                    onChangeText={num => setPeso(num)}
                    value={peso}
                    />
                </View>
                <View style={styles.input_container}>
                    <Text style={styles.label}>Idade:</Text>
                    <TextInput
                    label={'Idade'} 
                    mode='outlined'
                    placeholder='Idade'
                    keyboardType='numeric'
                    onChangeText={num => setIdade(num)}
                    value={idade}
                    />
                </View>
                <Text style={styles.aviso}>{aviso}</Text>
                <View style={styles.buttons}>
                    <Button 
                    style={styles.button}
                    textColor='#FDF8EE'
                    onPress={() => handlePress({user, email, password, peso, idade})}>
                    Iniciar questionário</Button>
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
        marginTop: '10%',
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