import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationList from './src/NavigationList';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {Object.keys(NavigationList).map((NavigationName) =>
          // @ts-ignore
          <Stack.Screen key={NavigationName} name={NavigationName} component={NavigationList[NavigationName]} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
