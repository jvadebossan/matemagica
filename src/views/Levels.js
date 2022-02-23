import {View, Text } from 'react-native';
import styled from 'styled-components'
import React from 'react';
import cfg from '../cfg.json'



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
  font-family: ${cfg.fonts.font1};
  margin-top: 70px;
`

const LevelsBox = styled.View`
  width: 80%;
  height: 55%;
  background-color: ${cfg.colors.background2};
  border-radius: 20px;
  margin-top: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
`

const LevelBox = styled.View`
  width: 100px;
  height: 65px;
  border-radius: 10px;
  background-color: ${cfg.colors.main};
  display: flex;
  justify-content: center;
  align-itens: center;
  margin-bottom: 50px;
`
const LevelText = styled.Text`
  font-size: 50px;
  text-align: center;
  color: ${cfg.colors.text};
  font-family: ${cfg.fonts.font2};
`

const LevelRelative = styled.View`
  width: 100px;
  height: 65px;
  border-radius: 10px;
  background-color: ${cfg.colors.main};
  display: flex;
  justify-content: center;
  align-itens: center;
  margin-top: 40px;
  position: relative;
  left: 23%;
`

const Level = (props) => {
  return(
    <LevelBox>
      <LevelText>{props.num}</LevelText>
    </LevelBox>
  )
}

const LevelRel = (props) => {
  return(
    <LevelRelative>
      <LevelText>{props.num}</LevelText>
    </LevelRelative>
  )
}


const Levels = (navigation) =>{
  return(
    <Container>
      <Title>Levels</Title>
      <LevelsBox>
        <Level num="1" onPress={ () => navigation.navigate("Level")}></Level>
        <Level num="2"></Level>
        <Level num="3"></Level>
        <Level num="4"></Level>
        <LevelRel num="5"></LevelRel>
      </LevelsBox>
    </Container>
  )
}

export default Levels