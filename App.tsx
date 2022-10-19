import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import App1 from './src/views/EntryDetailsScreen';
import App2 from './src/views/ParkingDetailsScreen';
import App3 from './src/views/PaymentDetailsScreen';
import { store } from './src/redux/store';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store} >
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="EntryDetailsScreen" component={App1}
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
        <Stack.Screen name="ParkingDetailsScreen" component={App2}
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
         <Stack.Screen name="PaymentDetailsScreen" component={App3}
          options={{
            title: 'Go Back',
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
    </Provider>
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
