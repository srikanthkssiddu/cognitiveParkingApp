import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/actions";
import { Card } from "react-native-paper";
import { Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";

export default function TodoItem({ todo }) {
  let dispatch = useDispatch();
  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");

  return (
    <SafeAreaView>
        
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title1}>-Car Registration {todo.name}:  </Text>
          <Text style={styles.title1}>-TimeSpent : {todo.phone} </Text>
          <Text style={styles.title1}>-Parking Charges 10 $:</Text>
        </Card.Content>
      </Card>
      <SafeAreaView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setPhone("");
            setName("");
            dispatch(
              deleteTodo({
                ...todo,
                name: name,
                phone: phone,
              })
            );
          }}
        >
          <Text style={styles.title2}>PAYMENT TAKEN</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dcdcdc",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title1: {
    fontWeight: "500",
    fontSize: 18,
    padding: 15,
    color: "#000000",
  },
  card: {
    backgroundColor: "#dcdcdc",
    borderColor: "#696969",
    borderWidth: 3,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 10,
    paddingTop: 10,
    width: 340,
    height: 220,
  },
  button: {
    margin: 12,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "#696969",
    padding: 10,
  },
  title2: {
    fontWeight: "500",
    fontSize: 16,
    color: "#dcdcdc",
  },
});
