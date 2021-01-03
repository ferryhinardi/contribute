import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { BudgetScreenNavigationProp } from '../../types';

const styles = StyleSheet.create({
  containerItem: { borderWidth: 1, borderRadius: 6,  margin: 8, padding: 8 },
  item: { flexDirection: 'row', alignItems: 'center' },
  titleItem: { flex: 1, paddingHorizontal: 4 },
});

function BudgetItem() {
  return (
    <View style={styles.containerItem}>
      <View style={styles.item}>
        <Icon name="book" />
        <Text style={styles.titleItem}>{'Budget Screen'}</Text>
        <Text>{'Rp. 10.0000'}</Text>
      </View>
    </View>
  );
}

function BudgetScreen({ navigation }: { navigation: BudgetScreenNavigationProp }) {
  return (
    <>
      <BudgetItem />
      <BudgetItem />
    </>
  );
}

export default BudgetScreen;
