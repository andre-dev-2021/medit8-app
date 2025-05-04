import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';

export default function Inicial({ navigation }){
    const gotoCadastro = () => {
        navigation.navigate('Cadastro'); 
    }

    const gotoLogin = () => {
        navigation.navigate('Login')
    }
    return(
        <View style={styles.container}>
            <Image
            source={require('../assets/logo.png')}
            style={styles.logo}/>
            <View style={styles.buttons}>
                <Button 
                textColor='#FDF8EE'
                onPress={gotoLogin}
                style={styles.login_button}> 
                <Text style={styles.label}>Entrar</Text></Button>
                <Button 
                textColor='#1F2D52'
                onPress={gotoCadastro}
                style={styles.sign_button}> 
                <Text style={styles.label}>Cadastre-se</Text></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flex: 1,
        backgroundColor: '#FDF8EE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '300',
        height: '300',
        resizeMode: 'contain',
    },
    buttons: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    login_button: {
        margin: 5,
        justifyContent: 'center',
        width: '75%',
        height: 50,
        backgroundColor: '#1F2D52',
    },
    sign_button: {
        margin: 5,
        justifyContent: 'center',
        width: '75%',
        height: 50,
        borderWidth: 2,
        borderColor: '#1F2D52',
        backgroundColor: '#FDF8EE',
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})