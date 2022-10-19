import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Card } from "react-native-paper";
import { useDispatch } from "react-redux";

function TodoItem({ todo }) {
  const navigation = useNavigation();
  let dispatch = useDispatch();
  let id = todo.id;
  let [name, setName] = useState();
  let [phone, setPhone] = useState();

  return (
    <SafeAreaView>
      <Card style={styles.box}>
        <TouchableOpacity
          onPress={() => navigation.navigate("PaymentDetailsScreen")}
        >
          <View>
            <Text>{todo.id}</Text>
            <Text>{todo.name}</Text>
          </View>
        </TouchableOpacity>
      </Card>
    </SafeAreaView>
  );
}
export default TodoItem;

const styles = StyleSheet.create({
  box: {
    padding: 10,
    backgroundColor: "#b0c4de",
    width: "45%",
    marginLeft: 95,
    marginBottom: 10,
    borderRadius: 10,
    borderStyle: "dotted",
    borderColor: "#000000",
    borderWidth: 2,
  },
});
