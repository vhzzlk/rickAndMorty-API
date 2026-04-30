import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';
import { theme } from './src/styles/theme';

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: theme.colors.card }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <StatusBar style="light" backgroundColor={theme.colors.card} />
        <Routes />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
