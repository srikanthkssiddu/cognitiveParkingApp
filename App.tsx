import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EnterLotView from './src/Views/EnterDetailsView'
import HomeView from './src/Views/ParkingDetailsView';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EnterLot">
        <Stack.Screen
         name="EnterLot" component={EnterLotView} 
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
        <Stack.Screen
         name="Home" component={HomeView} 
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

export default App;