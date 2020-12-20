import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined,
  Details: undefined
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;
export type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList>;