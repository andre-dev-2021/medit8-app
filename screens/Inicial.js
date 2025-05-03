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
                onPress={gotoCadastro}
                style={styles.sign_button}> 
                <Text style={styles.label}>Cadastre-se</Text></Button>
                <Button 
                textColor='#FDF8EE'
                onPress={gotoLogin}
                style={styles.login_button}> 
                <Text style={styles.label}>Login</Text></Button>
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
    },
    logo: {
        width: '300',
        height: '300',
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: '20%',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '100',
    },
    login_button: {
        margin: 5,
        justifyContent: 'center',
        width: '75%',
        height: 50,
        backgroundColor: '#5FB3F3',
    },
    sign_button: {
        margin: 5,
        justifyContent: 'center',
        width: '75%',
        height: 50,
        backgroundColor: '#BC75EB',
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})