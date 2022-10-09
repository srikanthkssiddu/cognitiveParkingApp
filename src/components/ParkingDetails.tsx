import { Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native"
 import { useState } from "react";



export default function App2 () {
    const [RegisterID, setRegisterID] = useState('');
    const navigation = useNavigation()
    const moveToNext = () => {
        navigation.navigate('PaymentDetails', {
          paramsKey:RegisterID
        });
      };


    return(
        <SafeAreaView>
            <StatusBar
             animated={true}
             backgroundColor="#dcdcdc"
            />
            <Text>Hello Srikanth</Text>
            <Button
              title="Submit"
              color='#000000'
              
              onPress={moveToNext}
            />
        </SafeAreaView>
    )
}