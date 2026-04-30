import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import Routes from './src/routes';
import { theme } from './src/styles/theme';

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: theme.colors.card }}>
      <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
        <StatusBar barStyle="light-content" backgroundColor={theme.colors.card} />
        <Routes />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
