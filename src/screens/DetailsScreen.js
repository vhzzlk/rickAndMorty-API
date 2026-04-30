import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../styles/theme';

export default function DetailsScreen({ route }) {
  const { character } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{character.name}</Text>
        
        <View style={styles.detailRow}>
          <Text style={styles.label}>Status:</Text>
          <Text style={styles.value}>{character.status}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>Espécie:</Text>
          <Text style={styles.value}>{character.species}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>Gênero:</Text>
          <Text style={styles.value}>{character.gender}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>Origem:</Text>
          <Text style={styles.value}>{character.origin.name}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>Localização Atual:</Text>
          <Text style={styles.value}>{character.location.name}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 20,
    backgroundColor: theme.colors.card,
    margin: 16,
    borderRadius: 12,
    elevation: 4,
  },
  name: {
    color: theme.colors.primary,
    fontSize: theme.typography.title,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
  label: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.body,
    fontWeight: '600',
  },
  value: {
    color: theme.colors.text,
    fontSize: theme.typography.body,
    maxWidth: '70%',
    textAlign: 'right',
  },
});
