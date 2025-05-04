import { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';


export default function Login({navigation}){
    const [user, setUser] = useState();
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

    const handlePress = () =>{
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
            navigation.navigate('Questionario');
        }
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.form_container}>
            <Text style={styles.welcome}>Comece a monitorar sua saúde.</Text>
                <View style={styles.input_container}>
                    <Text style={styles.label}>Usuário</Text>
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
                <View style={styles.input_container}>
                    <Text style={styles.label}>Confirme sua senha</Text>
                    <TextInput
                    label={'Confirme sua senha'} 
                    mode='outlined'
                    placeholder='Confirme sua senha'
                    secureTextEntry={true}
                    onChangeText={text => confirmPassword(text, password)}
                    />
                </View>
                <View style={styles.input_container}>
                    <Text style={styles.label}>Peso</Text>
                    <TextInput
                    label={'Insira seu peso'} 
                    mode='outlined'
                    placeholder='Insira seu peso'
                    keyboardType='numeric'
                    onChangeText={num => setPeso(num)}
                    value={peso}
                    />
                </View>
                <View style={styles.input_container}>
                    <Text style={styles.label}>Idade</Text>
                    <TextInput
                    label={'Insira sua idade'} 
                    mode='outlined'
                    placeholder='Insira sua idade'
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
                    onPress={() => handlePress({user, password, peso, idade})}>
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