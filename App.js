/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, Alert} from 'react-native';


//Criei uma funçãp para gerar numeros aleatorios
const gerarNumeroAleatorio = () =>{
  let total = '';
  for (let index =0; index < 6; index++) {
    let numero = Math.random();
    numero = Math.floor(numero *100);
    total += `${numero}-`
  }
  
 //Alert é utilizado para exibir informações em forma d ealerta
  Alert.alert("Número Gerado",`${total}`);
}

export default class App extends Component {
  render() {
    return (
      // O Button esta utilizando o Onpress para chamar uma função
      // Quando tocar no botão que tem o nome Gerar Numero
      <View> 
        <Button title="Gerar número" onPress={gerarNumeroAleatorio} /> 
     
      </View>
    );
  }
}

