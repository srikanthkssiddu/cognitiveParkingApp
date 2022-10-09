import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar';



export default function App2 () {


    return(
        <SafeAreaView>
            <StatusBar
             animated={true}
             backgroundColor="#dcdcdc"
            />
            <Text>Hello Srikanth</Text>
        </SafeAreaView>
    )
}