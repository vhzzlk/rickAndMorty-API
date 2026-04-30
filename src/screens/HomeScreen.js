import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text, TextInput } from 'react-native';
import api from '../services/api';
import Card from '../components/Card';
import Header from '../components/Header';
import { theme } from '../styles/theme';

export default function HomeScreen({ navigation }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async (query = '') => {
    setLoading(true);
    try {
      const response = await api.get('/character', {
        params: { name: query }
      });
      setCharacters(response.data.results);
      setError(false);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setCharacters([]); // Se não encontrar, apenas esvazia a lista
        setError(false);
      } else {
        setError(true);
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchCharacters(search);
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
        ListEmptyComponent={
          !loading ? <Text style={styles.emptyText}>Nenhum personagem encontrado.</Text> : null
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header title="The Rick and Morty" />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar personagem..."
          placeholderTextColor={theme.colors.textSecondary}
          value={search}
          onChangeText={setSearch}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
      </View>
      {renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: theme.colors.card,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.primary,
  },
  searchInput: {
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: theme.typography.body,
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
  emptyText: {
    textAlign: 'center',
    color: theme.colors.textSecondary,
    fontSize: theme.typography.subtitle,
    marginTop: 20,
  }
});
