import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import RadioGroup from "./RadioGroup";

export default function Radio() {
  const data = [
    {
      text: "Option A",
    },
    {
      text: "Option B",
    },
  ];

  const onRadioButtonPress = () => {
    return 0;
  };

  return (
    <SafeAreaView>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Pergunta</Text>
      </View>

      <RadioGroup values={data} onPress={onRadioButtonPress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    margin: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});