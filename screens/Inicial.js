import { Button, Text, View } from 'react-native';

export default function Inicial({ navigation }){
    const handlePress = () =>{
        navigation.navigate('Questionário')
    }

    return(
        <View>
            <Button title='INICIAR QUESTIONÁRIO' onPress={handlePress}/>
        </View>
    );
}