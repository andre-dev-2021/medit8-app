import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Button, TextInput, RadioButton } from 'react-native-paper';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { getAuth } from '../firebase/firebaseConfig';

export default function Questionario({ navigation }) {
  const [frutas, setFrutas] = useState('');
  const [legumes, setLegumes] = useState('');
  const [ultraprocessados, setUltraprocessados] = useState('');
  const [exercicio, setExercicio] = useState('');
  const [tempoExercicio, setTempoExercicio] = useState('');
  const [agua, setAgua] = useState('');
  const [sol, setSol] = useState('');
  const [tempoSol, setTempoSol] = useState('');
  const [bebidaAlcoolica, setBebidaAlcoolica] = useState('');
  const [tabaco, setTabaco] = useState('');
  const [atividadeAoArLivre, setAtividadeAoArLivre] = useState('');
  const [dormi7Horas, setDormi7Horas] = useState('');
  const [horaDormir, setHoraDormir] = useState('');
  const [atividadeReligiosa, setAtividadeReligiosa] = useState('');

  const user = getAuth.currentUser;

    if (user) {
        console.log('Usuário logado:', user.email);
        console.log('UID:', user.uid);
    } else {
        console.log('Nenhum usuário logado');
    }   
  const saveData = async () => {
    const questionarioData = {
      frutas,
      legumes,
      ultraprocessados,
      exercicio,
      tempoExercicio,
      agua,
      sol,
      tempoSol,
      bebidaAlcoolica,
      tabaco,
      atividadeAoArLivre,
      dormir7Horas: dormi7Horas,
      horaDormir,
      atividadeReligiosa,
      userId: "teste",
      createdAt: Timestamp.now(),
    };
  
    try {
      await addDoc(collection(db, 'questionarios'), questionarioData);
      alert('Questionário salvo com sucesso!');
    } catch (error) {
      alert('Erro ao salvar o questionário!');
      console.error(error); // adiciona log de erro para facilitar debug
    }
  };
  

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Questionário de Saúde</Text>

      <Button
            mode="contained"
            onPress={saveData}
            style={{ margin: 16 }}
        >Salvar respostas
        </Button>

      {/* Nutrição */}
      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>Nutrição</Text>
        <Text>Hoje comi quantas porções de frutas?</Text>
        <RadioButton.Group
          onValueChange={setFrutas}
          value={frutas}
        >
          <View>
            <Text style={styles.radioText}>Nenhuma</Text>
            <RadioButton value="Nenhuma" />
          </View>
          <View>
            <Text style={styles.radioText}>Pelo menos 1x</Text>
            <RadioButton value="Pelo menos 1x" />
          </View>
          <View>
            <Text style={styles.radioText}>Mais de 1x</Text>
            <RadioButton value="Mais de 1x" />
          </View>
        </RadioButton.Group>

        <Text>Hoje comi quantas porções de legumes e verduras?</Text>
        <RadioButton.Group
          onValueChange={setLegumes}
          value={legumes}
        >
          <View>
            <Text style={styles.radioText}>Nenhuma</Text>
            <RadioButton value="Nenhuma" />
          </View>
          <View>
            <Text style={styles.radioText}>Pelo menos 1x</Text>
            <RadioButton value="Pelo menos 1x" />
          </View>
          <View>
            <Text style={styles.radioText}>Mais de 1x</Text>
            <RadioButton value="Mais de 1x" />
          </View>
        </RadioButton.Group>

        <Text>Hoje comi algum alimento ultraprocessado ou com muito açúcar?</Text>
        <RadioButton.Group
          onValueChange={setUltraprocessados}
          value={ultraprocessados}
        >
          <View>
            <Text style={styles.radioText}>Nenhuma</Text>
            <RadioButton value="Nenhuma" />
          </View>
          <View>
            <Text style={styles.radioText}>Pelo menos 1x</Text>
            <RadioButton value="Pelo menos 1x" />
          </View>
          <View>
            <Text style={styles.radioText}>Mais de 1x</Text>
            <RadioButton value="Mais de 1x" />
          </View>
        </RadioButton.Group>
      </View>

      {/* Exercício, Água e Sol */}
      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>Exercício, Água e Sol</Text>
        <Text>Fiz exercício físico hoje?</Text>
        <RadioButton.Group
          onValueChange={setExercicio}
          value={exercicio}
        >
          <View>
            <Text style={styles.radioText}>Não</Text>
            <RadioButton value="Não" />
          </View>
          <View>
            <Text style={styles.radioText}>Sim</Text>
            <RadioButton value="Sim" />
          </View>
        </RadioButton.Group>

        {exercicio === "Sim" && (
          <>
            <Text>Por quanto tempo?</Text>
            <TextInput
              label="Tempo de exercício"
              value={tempoExercicio}
              onChangeText={setTempoExercicio}
              style={styles.input}
            />
          </>
        )}

        <Text>Quantos copos de água bebi hoje?</Text>
        <TextInput
          label="Copos de água"
          value={agua}
          onChangeText={setAgua}
          style={styles.input}
          keyboardType="numeric"
        />

        <Text>Fiquei exposto ao sol hoje por pelo menos 15-20min?</Text>
        <RadioButton.Group
          onValueChange={setSol}
          value={sol}
        >
          <View>
            <Text style={styles.radioText}>Não</Text>
            <RadioButton value="Não" />
          </View>
          <View>
            <Text style={styles.radioText}>Sim</Text>
            <RadioButton value="Sim" />
          </View>
        </RadioButton.Group>

        {sol === "Sim" && (
          <>
            <Text>Por quanto tempo?</Text>
            <TextInput
              label="Tempo de exposição ao sol"
              value={tempoSol}
              onChangeText={setTempoSol}
              style={styles.input}
            />
          </>
        )}
      </View>

      {/* Temperança e Ar Puro */}
      <View style={styles.formContainer}keyboardShouldPersistTaps="handled">
        <Text style={styles.sectionTitle}>Temperança e Ar Puro</Text>
        <Text>Consumi bebida alcoólica hoje?</Text>
        <RadioButton.Group
          onValueChange={setBebidaAlcoolica}
          value={bebidaAlcoolica}
        >
          <View>
            <Text style={styles.radioText}>Não</Text>
            <RadioButton value="Não" />
          </View>
          <View>
            <Text style={styles.radioText}>Sim</Text>
            <RadioButton value="Sim" />
          </View>
        </RadioButton.Group>

        <Text>Consumi algum tipo de tabaco hoje?</Text>
        <RadioButton.Group
          onValueChange={setTabaco}
          value={tabaco}
        >
          <View>
            <Text style={styles.radioText}>Não</Text>
            <RadioButton value="Não" />
          </View>
          <View>
            <Text style={styles.radioText}>Sim</Text>
            <RadioButton value="Sim" />
          </View>
        </RadioButton.Group>

        <Text>Fiz alguma atividade ao ar livre hoje?</Text>
        <RadioButton.Group
          onValueChange={setAtividadeAoArLivre}
          value={atividadeAoArLivre}
        >
          <View>
            <Text style={styles.radioText}>Não</Text>
            <RadioButton value="Não" />
          </View>
          <View>
            <Text style={styles.radioText}>Sim</Text>
            <RadioButton value="Sim" />
          </View>
        </RadioButton.Group>
      </View>

      {/* Descanso e Confiança */}
      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>Descanso e Confiança</Text>
        <Text>Dormi de 7-8h esta noite?</Text>
        <RadioButton.Group
          onValueChange={setDormi7Horas}
          value={dormi7Horas}
        >
          <View>
            <Text style={styles.radioText}>Não</Text>
            <RadioButton value="Não" />
          </View>
          <View>
            <Text style={styles.radioText}>Sim</Text>
            <RadioButton value="Sim" />
          </View>
        </RadioButton.Group>

        {dormi7Horas === "Sim" && (
          <>
            <Text>Quantas horas você dormiu?</Text>
            <TextInput
              label="Hora de dormir"
              value={horaDormir}
              onChangeText={setHoraDormir}
              style={styles.input}
              keyboardType="numeric"
            />
          </>
        )}

        <Text>Participei de alguma atividade religiosa ou espiritual hoje?</Text>
        <RadioButton.Group
          onValueChange={setAtividadeReligiosa}
          value={atividadeReligiosa}
        >
          <View>
            <Text style={styles.radioText}>Não</Text>
            <RadioButton value="Não" />
          </View>
          <View>
            <Text style={styles.radioText}>Sim</Text>
            <RadioButton value="Sim" />
          </View>
        </RadioButton.Group>
      </View>
</ScrollView>
);
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        padding: 30
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 24,
      textAlign: 'center',
      color: '#333',
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: '600',
      marginVertical: 16,
      color: '#444',
    },
    formContainer: {
      marginBottom: 30,
      backgroundColor: '#fff',
      padding: 16,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 10,
      backgroundColor: '#fff',
      marginBottom: 12,
    },
    radioText: {
      fontSize: 16,
      marginLeft: 8,
      color: '#333',
    },
    button: {
        backgroundColor: '#6200ee',
        borderRadius: 8,
        paddingVertical: 5,
        alignSelf: 'center',
        paddingHorizontal: 44,
    },
  });  