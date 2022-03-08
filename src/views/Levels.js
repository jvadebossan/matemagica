import styled from 'styled-components'
import React from 'react';
import cfg from '../cfg.json'
import react, { useState, useEffect } from 'react';

import Popup from '../components/Popup'

const Container = styled.SafeAreaView`
    background-color: ${cfg.colors.background};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.Text`
  font-size: 60px;
  color: ${cfg.colors.main};
  font-family: ${cfg.fonts.font2};
  margin: 10px 0px;
`
const LevelsBox = styled.View`
  width: 80%;
  height: auto;
  background-color: ${cfg.colors.background2};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 30px;
`
const LevelBox = styled.TouchableOpacity`
  width: 100%;
  height: 65px;
  margin: 10px 0px;
  border-radius: 10px;
  background-color: ${cfg.colors.main};
  display: flex;
  justify-content: center;
  align-itens: center;
`
const LevelText = styled.Text`
  font-size: 50px;
  text-align: center;
  color: ${cfg.colors.text};
  font-family: ${cfg.fonts.font2};
`
const Level = (props) => {
	return (
		<LevelBox onPress={ () => props.navigation.navigate("Level", {num:props.num, list:props.list, conta:props.conta, frases:props.frases})}>
			<LevelText>{props.num}</LevelText>
		</LevelBox>
	)
}


const Levels = ({ navigation, route }) => {
	return (
		<Container>
			<Title>Levels</Title>
			<LevelsBox>
          <Level num="1" conta="10³" frases={['Nessa fase você irá realizar potências de numeros inteiros', 'Parabéns! Dica: potências de base 10 apenas adicionam a mesma quantidade de zeros do expoente, ou seja 10³ é 1 mais 3 zeros.']} list={[30,100,3,300,1000,10]} navigation={navigation}></Level>
          <Level num="2" conta="2-¹" frases={['Nessa fase você irá realizar potências com expoentes negativos', 'Parabéns! Expoentes negativos fazem que os denominadores subam e os numeradores desçam.']} list={[0.5,2,-2,2.5,1.5,0]} navigation={navigation}></Level>
          <Level num="3" conta="(6²)⁴" frases={['Nessa fase você irá realizar multiplicação de potências', 'Parabéns: quando os expoentes se encontram dessa forma eles se multiplicam, mas eles podem se encontrar sem os parênteses. Assim, irão se tornar expoentes de expoentes.']} list={['6⁶','6⁸','6⁴','6²','6⁻²','6¹⁶']} navigation={navigation}></Level>
          <Level num="4" conta="3³/3" frases={['Nessa fase você irá realizar divisão de expoêntes de bases iguais', 'Parabéns! Ao dividir potências de bases iguais, você deve subtrair os expoentes.']} list={[3,"3²","3³","3⁴","-3","3⁻³"]} navigation={navigation}></Level>
          <Level num="5" conta="(7x7)³" frases={['Lembre-se de usar a regra do chuveiro', 'Parabéns! Dica: a regra do chuveirinho também funciona com expoentes.']} list={["7³","7⁷","14³","21²","7⁶","7"]} navigation={navigation}></Level>
          <Level num="6" conta="3²x9³" frases={['Hora de fatorar', 'Parabéns! Fatorando os expoentes e fazendo a regra do chuveirinho você pode resolver varias contas complicadas. Sempre veja se é possivel fatorar.']} list={["12⁵","27⁵","3⁸","9⁴","3⁹","9⁵"]} navigation={navigation}></Level>
			</LevelsBox>
		</Container>
	)
}

export default Levels