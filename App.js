'use strict';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PageStart from "./src/screens/PageStart";
import {PageHome} from "./src/screens/PageHome";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{  headerShown: false }}>
          <Stack.Screen name="Start" component={PageStart} />
          <Stack.Screen name="Home" component={PageHome} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


