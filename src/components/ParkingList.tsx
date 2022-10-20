import React from "react";
import TodoItem from "./ParkingItem";
import { useSelector } from "react-redux";
import {
  SafeAreaView,
  StyleSheet,
} from "react-native";
export default function TodoList() {
  let todos = useSelector((state) => state);

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView >
        {todos.map((todo: { id: React.Key | null | undefined }) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "78%",
  },
});
