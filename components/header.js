import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View>
        <Image style ={{ width: 420, height: 100, marginTop: 30}} source={require('../public/all.png')} />
        <Text style={styles.title}>Israel Elections 2021!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});