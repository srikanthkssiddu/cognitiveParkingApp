import { Text, StyleSheet,  Button, TextInput, SafeAreaView } from "react-native"
import { StatusBar } from "expo-status-bar"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react";





export default function App1 () {
    const [parkingNumber, setParkingNumber] = useState('');
    const navigation = useNavigation();
    const getParkingnumber = () => {
    navigation.navigate('ParkingDetails', {
      paramsKey:parkingNumber,
    });
  };
    
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
            animated={true}
            backgroundColor="#dcdcdc"
            />
            <Text style={styles.title}>Parking Management</Text>
            <SafeAreaView>
            <TextInput
               style={styles.input}
               placeholder='Enter number of parking spaces'
               onChangeText={(text) => setParkingNumber(text)}
            />
            </SafeAreaView>
            <SafeAreaView>
            <Button
              title="Submit"
              color='#000000'
              disabled={parkingNumber===''}
              onPress={getParkingnumber}
            />
            </SafeAreaView>
            
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#dcdcdc',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        borderWidth: 2,
        borderRadius:5,
       
        borderColor: '#000000',
        backgroundColor: '#dcdcdc',
        margin: 20,
        width: 250,
        height:50,
        paddingLeft:10
      },
    title: {
      paddingBottom: 50,
      fontSize: 25,
      fontWeight: "400",
    },
    
      
    
  });