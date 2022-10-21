import React from "react";
import { View, StyleSheet, FlatList, Dimensions, Pressable } from "react-native"
import { Button, Card, Text } from "react-native-paper";
import HomeController from "./ParkingDetailsController";
import { slot } from "../Models/Slot";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Paragraph, Dialog, TextInput, HelperText } from 'react-native-paper';

let deviceWidth = Dimensions.get('window').width;
let column: number = 2;
let columnHeight: number = 100;

export default class HomeView extends HomeController {
    
   
    renderItem = (item: slot) => {
      
        return (
            <View style={styles.viewStyle}>
                <Text>y{item.id}</Text>
            </View>
        );
    }

    render() {
        console.log("Creating parking slot, this.state.arrLot", this.state.arrLot.length);
        return (
            <View style={styles.view}>
                <View style={styles.separator} />
                <View style={styles.viewAddCar}>
                    <View>
                        <TextInput
                            style={styles.inputStyle}
                            label="Enter Car Number"
                            
                            value={this.state.carNumber}
                            onChangeText={(text: string) => this.onChangeTextNumLot(text)}
                        />
                        <HelperText style={{ marginVertical: 10 }} type="error">
                            {this.state.error}
                        </HelperText>
                    </View>
                    <Button style={{ height: 40 }} mode="contained" onPress={() => {
                        this.onPressAddCar();
                    }}>
                        Add Car
                    </Button>
                </View>
                
                
                <View style={styles.separator} />

                <FlatList
                    style={{ width: deviceWidth * 1}}
                    extraData={this.state}
                    data={this.state.arrLot}
                    renderItem={({ item, index }) => {
                        
                        return (
                            <View style={styles.viewStyle}>
                                <Text style={{ textAlign: "right", alignSelf: "center", fontSize: 12 }}>Slot -{item.id}</Text>
                                {item.isAlloted &&
                                    
                                     <Pressable onPress={() => {
                                        this.onPressExitCar(index);
                                    }}
                                     >
                                    
                                    <Text>   Tap to Checkout</Text>
                                  </Pressable>
                                }
                                {item.isAlloted ?
                                    <Icon name="car" size={35} color="#000000" />
                                    : <Icon name="parking" size={35} color="#000000" />

                                }
                                {item.isAlloted && <Text >{item.carNum}</Text>}
                            </View>
                        );
                    }}
                    numColumns={column}
                    keyExtractor={(item, index) => index.toString()}
                />

                <Text style ={styles.text1}>Create New Parking</Text>
                <Text style ={styles.text1}>No Of Parking Space { this.state.arrLot.length}.</Text>
                <Dialog visible={this.state.showDialog} onDismiss={() => {
                    this.setState({ showDialog: false })
                }}>
                    
                    <Dialog.Title>Notification</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>Parking Slots Booked</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => {
                            this.setState({ showDialog: false })
                        }}>Ok</Button>
                    </Dialog.Actions>
                   
                </Dialog>

                <Dialog visible={this.state.showPaymentDialog} onDismiss={() => {  }}>
                    <Dialog.Title>Exit Vehicle</Dialog.Title>
                    <Card style ={styles.card}>
                    <Dialog.Content>
                        <Paragraph style ={styles.text2}>{this.state.dialogMsg}</Paragraph>
                    </Dialog.Content>
                    </Card>
                    <Dialog.Actions>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => {
                        this.setState({ showPaymentDialog: false });
                        }}
                    >
                    <Text style={styles.textStyle}>Payment Taken</Text>
                    </Pressable>
                       
                    </Dialog.Actions>
                </Dialog>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'white',
    },
    viewAddCar: {
        flexDirection: "row",
    },
    separator: {
        height: 10,
    },
    viewStyle: {
        height: columnHeight,
        margin: 10,
        marginLeft:16,
        padding: 10,
        borderColor: '#808080',
        borderStyle: 'dotted',
        borderWidth: 2.5,
        backgroundColor: "#d1d1d1",
        alignItems: "center",
        justifyContent: "center",
        width: ((deviceWidth * 0.9) - (column * 10)) / column,
    },
    icon: {
        height: columnHeight,
        margin: 10,
        padding: 10,
        width: ((deviceWidth * 0.7) - (column * 10)) / column,
    },
    inputStyle: {
        width: deviceWidth * 0.6,
        height: 40
    },
    text1 : {
      backgroundColor: '#dcdcdc',
      margin: 2,
      borderRadius: 3
    },
    card : {
        width : "90%",
        height : "33%",
        marginLeft: 15,
        borderWidth: 5,
        borderColor: '#dcdcdc',
        borderRadius: 10,
    },
    text2 : {
        backgroundColor: '#dcdcdc',
        padding: 10,
        borderRadius: 3,
        fontSize: 18,
        fontWeight: '400',
        marginTop: 18
      },
      button: {
        borderRadius: 10,
        padding: 2,
        elevation: 0,
        marginTop: 2,
      },
      buttonOpen: {
        backgroundColor: "#000000",
        width: "100%",
        height: "100%",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        padding: 9,
      },
   
    
   
});