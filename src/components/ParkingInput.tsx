import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { addTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

export default function TodoInput() {
  let [modalVisible, setModalVisible] = useState(false);
  let dispatch = useDispatch();
  let [id, setId] = useState("");
  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [count, setCount] = useState(8)

  return (
    <SafeAreaView style={styles.container4}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.container1}>
          <View style={styles.modalView}>
            <Text>-Enter the ID:</Text>
            <TextInput
              style={styles.input}
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter The ID"
            />
            <Text>-Enter Car Registration:</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Car Registration"
            />
            <Text>-Enter Current Time:</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="select time"
            />
            <View style={{ flexDirection: "row" }}>
              <Pressable
                style={styles.buttonClose}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={styles.buttonClose1}
                onPress={() => {
                  setCount(count-1)
                  dispatch(
                    addTodo({
                      id: id,
                      name: name,
                      phone: phone,
                    })
                  );
                  setPhone("");
                  setName("");
                  setId("");
                }}
              >
                <Text style={styles.textStyle}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>ADD NEW PARKING</Text>
      </Pressable>
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
