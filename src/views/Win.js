import styled from 'styled-components'
import React, {useContext} from 'react'
import { useNavigation } from '@react-navigation/native'
import cfg from '../cfg.json'

import { observer } from 'mobx-react-lite'
import { RootContext } from '../App'

const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: ${cfg.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Bg = styled.View`
    width: 90%;
    height:auto;
    padding-bottom: 60px;
    background-color: ${cfg.colors.background3};
    position: absolute;
    top: 30%;
    left: 5%;
    border-radius: 15px;
    display: flex;
`
const Text = styled.Text`
    font-size: 25px;
    color: ${cfg.colors.text};
    font-family: verdana;
    margin: 20px;
    text-align: center;
`
const Ok = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0;
    background-color: ${cfg.colors.main};
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    justify-content: center;
    align-itens: center;
`
const OkText = styled.Text`
    font-size: 40px;
    color: ${cfg.colors.text};
    font-family: ${cfg.fonts.font2};
    text-align: center;
`


const Title = styled.Text`
  font-size: 60px;
  color: ${cfg.colors.main};
  font-family: ${cfg.fonts.font2};
  margin: 10px 0px;
  position: absolute;
`
const Confete = styled.Image`
    width: 100%;
    height: 100%;
`

const Win = ({route}) => {
    const navigation = useNavigation()
    return(
        <Container>
            <Title>Parabéns</Title>
            <Confete source={require('../images/confete.gif')}/>
            <Bg>
                <Text>Muito bem você completou o jogo. Agora pode revisar quantas vezes quiser e sempre usar de base para estudar</Text>
                <Ok onPress={()=>{navigation.navigate('Home')}}>
                    <OkText>voltar</OkText>
                </Ok>
            </Bg>
        </Container>
    )
}

export default observer(Win)