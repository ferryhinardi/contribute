import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Budget: undefined;
  Transaction: undefined;
  Wallet: undefined;
  PhoneNumberLogin: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;
export type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList>;
export type BudgetScreenNavigationProp = StackNavigationProp<RootStackParamList>;
export type TransactionScreenNavigationProp = StackNavigationProp<RootStackParamList>;
export type WalletScreenNavigationProp = StackNavigationProp<RootStackParamList>;