import styled from 'styled-components'
import React from 'react';

import cfg from '../cfg.json'
const play = require('../images/play_btn.png') 

const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: ${cfg.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.Text`
  font-size: 60px;
  color: ${cfg.colors.main};
  font-family: ${cfg.fonts.font1};
  margin-top: 70px;
  text-align: center;
`

const ImgBox = styled.TouchableOpacity`
  width: 160px;
  height: 160px;
  margin-bottom: 70%;
`
const Img = styled.Image`
  width: 100%;
  height: 100%;
`

const Home = ({navigation}) =>{
  return(
    <Container>
      <Logo>MathMagic</Logo>
      <ImgBox onPress={() => navigation.navigate('Levels')}>
        <Img source={play}/>
      </ImgBox>
    </Container>
  )
}

export default Home