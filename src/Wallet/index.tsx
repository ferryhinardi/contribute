import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Icon, Divider } from 'react-native-elements';
import { WalletScreenNavigationProp } from '../../types';

const styles = StyleSheet.create({
  containerItem: { padding: 8 },
  item: { flexDirection: 'row', alignItems: 'center' },
  containerIcon: { paddingHorizontal: 8 },
  title: { fontSize: 18 },
  divider: { marginVertical: 8, paddingHorizontal: 16 },
});

function WalletItem(props: { title: string, subtitle?: string, children?: React.ReactChild }) {
  return (
    <View style={styles.containerItem}>
      <View style={styles.item}>
        <Icon type="font-awesome-5" name="wallet" containerStyle={styles.containerIcon} />
        <View>
          <Text h4 h4Style={styles.title}>{props.title}</Text>
          {props.subtitle ? <Text>{props.subtitle}</Text> : null}
        </View>
      </View>
      {props.children ? <Divider style={styles.divider} /> : null}
      {props.children}
    </View>
  );
}

function WalletScreen({ navigation }: { navigation: WalletScreenNavigationProp }) {
  return (
    <>
      <WalletItem title="Wallet Name" />
      <Divider style={styles.divider} />
      <WalletItem title="Wallet Name">
        <WalletItem title="Wallet Name" subtitle="abc" />
      </WalletItem>
    </>
  );
}

export default WalletScreen;
