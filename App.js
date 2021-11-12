import React from 'react';
import { Text, View, StyleSheet} from 'react-native';


const App = () =>  {

  return (
    <View >
      <View style={styles.container}>
        <Text style={styles.texto}>
          Frases do Dia
        </Text>
      </View>

      <View style={styles.main}>
        <View style={styles.cx1} />
        <View style={styles.cx2} />
      </View>

    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ad5bff',
    padding: 5,
    shadowColor: '#ccc',
    shadowOffset: {width: 20, height: 15},
    shadowOpacity: 1
  },
  texto: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  cx1: {
    width: 30,
    height: 30,
    margin: 2,
    backgroundColor: '#400080',
  },
  cx2: {
    width: 30,
    height: 30,
    margin: 2,
    backgroundColor:'#ff0000',
  },
  main: {
    flex: 1,
    backgroundColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});

export default App;
