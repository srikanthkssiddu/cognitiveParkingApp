import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App1 from './src/components/EntryDetails';
import App2 from './src/components/ParkingDetails';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="EntryDetails" component={App1}
          options={{
            title: 'Parking App',
            headerStyle: {
            backgroundColor: '#000000',
            
            },
            headerTintColor: '#dcdcdc',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }}/>
        <Stack.Screen name="ParkingDetails" component={App2}
          options={{
            title: 'Parking Details',
            headerStyle: {
            backgroundColor: '#000000',
            
            },
            headerTintColor: '#dcdcdc',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }}/>

        
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
