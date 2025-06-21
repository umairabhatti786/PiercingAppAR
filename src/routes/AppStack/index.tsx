import React, {useEffect, useState} from 'react';
import { StatusBar } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../utils/Types';
import Welcome from '../../screens/Auth/Welcome';
import LoginScreen from '../../screens/Auth/Login';
import CameraAccess from '../../screens/Auth/CameraAccess';
import NotificationAccess from '../../screens/Auth/NotificationAccess';

const Stack = createNativeStackNavigator<AppStackParamList>();
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name={'OnboardingScreen'} component={OnboardingScreen} />  */}
      <Stack.Screen name={'WelcomeScreen'} component={Welcome} /> 
      <Stack.Screen name={'LoginScreen'} component={LoginScreen} /> 
      <Stack.Screen name={'CameraAccess'} component={CameraAccess} /> 
      <Stack.Screen name={'NotificationAccess'} component={NotificationAccess} /> 


    </Stack.Navigator>
  );
};
export default AppStack;
