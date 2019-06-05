/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, Alert} from 'react-native';

const gerarNumeroAleatorio = () =>{
  let total = '';
  for (let index =0; index < 6; index++) {
    let numero = Math.random();
    numero = Math.floor(numero *100);
    total += `${numero}-`
  }
  
 
  Alert.alert("Número Gerado",`${total}`);
}

export default class App extends Component {
  render() {
    return (
      <View>
        <Button title="Gerar número" onPress={gerarNumeroAleatorio} /> 
     
      </View>
    );
  }
}

