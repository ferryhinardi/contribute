import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabScreen from './TabScreen';
import { TransactionScreenNavigationProp } from '../../types';

const Tab = createMaterialTopTabNavigator();

function TransactionScreen({ navigation }: { navigation: TransactionScreenNavigationProp }) {
  return (
    <Tab.Navigator>
      {Object.keys(TabScreen).map((field) => (
        // @ts-ignore
        <Tab.Screen key={field} name={field} component={TabScreen[field]} />
      ))}
    </Tab.Navigator>
  );
}

export default TransactionScreen;
