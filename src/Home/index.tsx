import React from 'react';
import { View, Text, Button } from 'react-native';
import { HomeScreenNavigationProp } from '../../types';

function HomeScreen({ navigation }: { navigation: HomeScreenNavigationProp }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default HomeScreen;