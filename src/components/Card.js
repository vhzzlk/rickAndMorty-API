import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../styles/theme';

export default function Card({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.status}>
          {item.status} - {item.species}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    overflow: 'hidden',
    elevation: 3, // for android shadow
    shadowColor: '#000', // for ios shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 120,
  },
  info: {
    padding: 12,
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    color: theme.colors.text,
    fontSize: theme.typography.subtitle,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  status: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.body,
  },
});
