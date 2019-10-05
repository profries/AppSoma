

import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.respostaContainer}>
          <Text style={styles.resposta}>0</Text>
        </View>
        <View style={styles.botoesContainer}>
          
          <View style={styles.botoesLinhaContainer}>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}>/</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.botoesLinhaContainer}>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}>*</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.botoesLinhaContainer}>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}>-</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.botoesLinhaContainer}>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}>=</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}>+</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  respostaContainer: {
    flex: 1
  },
  resposta: {
    flex: 1
  },
  botoesContainer:{
    flex: 1
  },
  botoesLinhaContainer:{
    flex: 1
  },
  botao:{
    flex: 1
  },
  botaoTexto:{
    flex: 1
  }
});
