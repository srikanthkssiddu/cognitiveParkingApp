import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native"
import EnterDetailsController from "./EnterDetailsController";
import { TextInput, Button, HelperText } from 'react-native-paper';
import { StatusBar } from "expo-status-bar";


export default class EnterLotView extends EnterDetailsController {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                
                <StatusBar animated={true} backgroundColor="#dcdcdc" />
                <View style={styles.container}>
                <Text style={styles.title}>Parking Management</Text>
                <SafeAreaView>
                    <TextInput
                    style={styles.input}
                    placeholder="Enter parking Slot Number"
                    value={this.state.slot}
                    onChangeText={(text: string) => this.onChangeTextNumLot(text)}
                />
                
                </SafeAreaView>
                <HelperText style={{ marginVertical: 10 }} type="error">
                    {this.state.error}
                </HelperText>
                </View>
                <View style={styles.container1}>
                <Button 
                mode="contained" 
                disabled={!this.state.slot ? true : false}
                color= '#000000'
                onPress={() => {
                    this.onPressSubmit();
                }}>
                    Submit
                </Button>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height:'100%',
      backgroundColor: "#dcdcdc",
      alignItems: "center",
      justifyContent: "center"
      
      
    },
    input: {
      borderWidth: 2,
      borderRadius: 5,
      borderColor: "#000000",
      backgroundColor: "#dcdcdc",
      margin: 2,
      width: 250,
      height: 50,
      
    },
    title: {
      paddingBottom: 50,
      fontSize: 25,
      fontWeight: "400",
    },
    container1: {
        marginBottom: 100,
        height: '30%',
        backgroundColor: "#dcdcdc",
        alignItems: "center",
        justifyContent: "center",
        
      }
  });