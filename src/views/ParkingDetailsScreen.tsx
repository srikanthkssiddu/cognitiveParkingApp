import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import React, { useEffect, useState } from "react";

import TodoList from "../components/ParkingList";
import TodoInput from "../components/ParkingInput";

export default function App2() {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ RegistrationId: "todo.name", time: "charge" }),
  };

  const postExample = async () => {
    try {
      await fetch("https://httpstat.us/200", requestOptions).then(
        (response) => {
          response.json().then((data) => {});
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    postExample();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#dcdcdc" />
      <View style={styles.container1}>
        <Text style={styles.text1}>Create new parking</Text>
        <Text style={styles.text1}>Available spaces 7 0f 8</Text>
      </View>
      <TodoList />
      <TodoInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "68%",
    padding: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#dcdcdc",
  },
  container1: {
    width: "100%",
    height: "10%",
    marginBottom: 2,
    marginTop: 2,
    alignItems: "flex-end",
  },
  text1: {
    backgroundColor: "#b0c4de",
    margin: 2,
    borderRadius: 3,
  },

  container3: {
    width: "100%",
    height: "100%",
    padding: 100,
    alignItems: "center",
  },
  container4: {
    width: "100%",
    height: "100%",
    marginTop: 170,
    alignItems: "center",
  },
  box: {
    borderColor: "#000000",
    width: "50%",
    height: "21%",
    padding: 10,
    borderStyle: "dotted",
  },
  inner: {
    flex: 1,
    backgroundColor: "#a9a9a9",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "dotted",
    borderColor: "#000000",
  },
  modalView: {
    marginTop: 536,
    width: "100%",
    height: "293%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 1,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 2,
    elevation: 0,
    marginTop: 22,
  },
  buttonOpen: {
    backgroundColor: "#000080",
    width: "100%",
    height: "10%",
  },
  buttonClose: {
    marginLeft: 5,
    width: "30%",
    height: "108%",
    backgroundColor: "#000080",
    borderRadius: 10,
  },
  buttonClose1: {
    marginLeft: 5,
    width: "65%",
    height: "108%",
    backgroundColor: "#000080",
    borderRadius: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    padding: 9,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    alignItems: "flex-start",
    height: 30,
    width: 250,
    margin: 5,
    borderWidth: 1,
    padding: 1,
  },
});
