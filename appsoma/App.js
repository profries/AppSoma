import React, {Component} from 'react';
import {View,Text,TextInput} from 'react-native';

export default class App extends Component{
  state = {
    valor1:"",
    valor2:"",
    total:""
  };

  calcularSoma1 = (text) => {
    const v1 = parseInt(text);
    const v2 = parseInt(this.state.valor2);
    const total = v1+v2;
    this.setState({valor1: text, total:total.toString()});
  }
  calcularSoma2 = (text) => {
    const v1 = parseInt(this.state.valor1);
    const v2 = parseInt(text);
    const total = v1+v2;
    this.setState({valor2: text, total:total.toString()});
  }

  render() {
    return (
      <View style={{marginTop:50}}>
        <Text style={{fontSize:24}}>Valor 1:</Text>
        <TextInput 
          value={this.state.valor1} 
          onChangeText={this.calcularSoma1}>
        </TextInput>
        <Text>Valor 2:</Text>
        <TextInput 
          value={this.state.valor2} 
          onChangeText={this.calcularSoma2}>
        </TextInput>
        <Text>Total:</Text>
        <TextInput 
        value={this.state.total}
          onChangeText={this.calcularTotal}></TextInput>
      </View>
    );
  }
}