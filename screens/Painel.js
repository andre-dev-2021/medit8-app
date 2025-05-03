import { ScrollView, Text} from 'react-native';

export default function Painel({route}){ 

    if (route.params === undefined){
        return(
            <ScrollView>
                <Text>Você não está logado!</Text>
            </ScrollView>
        );
    }
    
    const { user } = route.params;

    return(
        <ScrollView>
            <Text>Bem Vindo! {user}</Text>
        </ScrollView>
    );
}