import { ScrollView, Text } from "react-native";

export default function Questionario({navigation}){
    const gotoPainel = () => {
        navigation.navigate('Painel');
    }

    return(
        <ScrollView>
            <Text>Questionário</Text>
        </ScrollView>
    );
}