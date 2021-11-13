import React from 'react';
import { Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import { styles } from './app.module';

const App = () =>  {
  const { container, botao } = styles;

  const gerarFrase = () => {
    let frase = Math.floor(Math.random() * 4);
    let fraseDia = Array();
    fraseDia[0] = 'Frase 0';
    fraseDia[1] = 'Frase 1';
    fraseDia[2] = 'Frase 2';
    fraseDia[3] = 'Frase 3';
    fraseDia[4] = 'Frase 4';

    Alert.alert(fraseDia[frase]);
  }

  return (
    <View style={container}>
      <Image source={ require('./imgs/logo.png')} />

      <TouchableOpacity
        onPress={gerarFrase}
      >
        <Text style={botao}> Nova Frase </Text>
      </TouchableOpacity>

    </View>
  );

};



export default App;
