import { Button, ScrollView,} from 'react-native';
import InputText from '../components/Text';
import InputNumber from '../components/Number';
import Radio from '../components/Radio';

export default function Questionario(){
    return(
        <ScrollView>
            <InputText number="1" text="Teste" placeholder="Teste"/>
            <InputNumber number="2" text="teste"/>
            <Radio/>
            <Button
            title='Responder Questionário'
            />
        </ScrollView>
    );
}