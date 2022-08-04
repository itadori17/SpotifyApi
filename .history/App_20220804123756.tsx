import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from './src/screens/Home'; 
import Search from './src/screens/Search';
import Library from './src/screens/Library';
import Premium from './src/screens/Premium';
import { Ionicons } from '@expo/vector-icons';

const Tabs = createMaterialBottomTabNavigator();

export default fun