import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import api from '../services/api';
import Card from '../components/Card';
import Header from '../components/Header';
import { theme } from '../styles/theme';

export default function HomeScreen({ navigation }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await api.get('/character');
      setCharacters(response.data.results);
      setError(false);
    } catch (err) {
      setError(true);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.center}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
          <Text style={styles.loadingText}>Carregando personagens...</Text>
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.center}>
          <Text style={styles.errorText}>Erro ao carregar dados da API.</Text>
        </View>
      );
    }

    return (
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            item={item}
            onPress={() => navigation.navigate('Details', { character: item })}
          />
        )}
        contentContainerStyle={styles.list}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header title="The Rick and Morty" />
      {renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  list: {
    paddingBottom: 20,
    paddingTop: 10,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: theme.colors.primary,
    fontSize: theme.typography.body,
  },
  errorText: {
    color: '#FF6B6B',
    fontSize: theme.typography.subtitle,
    fontWeight: 'bold',
  },
});
