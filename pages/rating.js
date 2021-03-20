import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Button} from 'react-native';
import Header from "../components/header";

export default function AssetExample() {
  return (
    <View>
      <Header/>
      <Text style={styles.paragraph}>Sample results:</Text>
      <ScrollView style={styles.list}>
      </ScrollView>
      <Button style={styles.button} title="Beyond voting"/>
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    marginTop: 0,
    fontSize: 15,
    textAlign: 'center',
  },
  list: {
    backgroundColor: "yellow",
    display: 'flex',
    margin: 10,
    height: 600,
  },
});