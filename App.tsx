import 'react-native-gesture-handler';
import React from 'react';
import {Button, StatusBar, Text, View} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';

enableScreens();

export const SCREEN_ONE = 'ScreenOne';
export const SCREEN_TWO = 'ScreenTwo';

type RootStackParamList = {
  [SCREEN_ONE]: undefined;
  [SCREEN_TWO]: undefined;
};

type ScreenOneNavigationProp = StackScreenProps<
  RootStackParamList,
  'ScreenOne'
>;

type ScreenTwoNavigationProp = StackScreenProps<
  RootStackParamList,
  'ScreenTwo'
>;

const ScreenOne: React.FC<ScreenOneNavigationProp> = (props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Screen One</Text>
      <Button
        title={'Ho to Screen Two'}
        onPress={() => {
          props.navigation.navigate(SCREEN_TWO);
        }}
      />
    </View>
  );
};

const ScreenTwo: React.FC<ScreenTwoNavigationProp> = ({
  navigation: {canGoBack, goBack},
}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Screen One</Text>
      <Button
        title={'Back to Screen One'}
        onPress={() => {
          canGoBack() && goBack();
        }}
      />
    </View>
  );
};

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name={SCREEN_ONE} component={ScreenOne} />
          <RootStack.Screen name={SCREEN_TWO} component={ScreenTwo} />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
