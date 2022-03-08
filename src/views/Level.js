import styled from 'styled-components'
import cfg from '../cfg.json'
import answ from '../answers.json'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

import Popup from '../components/Popup'

import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { RootContext } from '../App'
const HeartPng = require('../images/heart.png')

const Container = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    background-color: ${cfg.colors.background};
    display: flex;
    align-items: center;
`
const LevelTitle = styled.Text`
    font-size: 50px;
    color: ${cfg.colors.main};
    font-family: ${cfg.fonts.font2};
    margin-top: 10px;
`

const Bg = styled.View`
    margin: ${props => props.margem}px 0px;
    width: ${props => props.width}%;
    height: ${props => props.height}%;
    border-radius: 20px;
    background-color: ${cfg.colors.background2};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${props => props.justify};
    padding: 0px ${props => props.espaco}px;

`
const HeartBox = styled.View`
    width: 32%;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Heart = styled.Image`
    width: 28.32px;
    height: 26.46px;
    margin-right: 5px;
`
const Menu = (props) => {
    let hearts = props.stores.hearts
    const Hearts = []
    for(let i = 0; i < hearts; i++){
        Hearts.push(<Heart source={HeartPng} key={i}/>)
    }
    return(
        <Bg width="90" height="8" margem="20" espaco="20" justify="space-between">
            <HeartBox>
                {Hearts}
            </HeartBox>
        </Bg>
    )
}


const Border = styled.View`
    width: 100%;
    height: 5%;
    background-color: ${cfg.colors.main};
    position: absolute;
    bottom: 0px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`
const Conta = styled.Text`
    font-size: 100px;
    color: ${cfg.colors.text};
    font-family: ${cfg.fonts.font2};
`

//animate conta from -2.5 to 76% top absolute
const GameArea = (props) => {
    return(
        <Bg width="90" height="45" margem="5" espaco="0" justify="center">
            <Conta>{props.conta}</Conta>
            <Border/>
        </Bg>
    )
}

const BtnsBox = styled.View`
    width: 103%;
    height: 20%;
    margin-top: 8%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`
const BtnBox = styled.TouchableOpacity`
    width: 70px;
    height: 60px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${cfg.colors.main};
    margin: 0px 7%;
    margin-bottom: 8%;
`
const BtnText = styled.Text`
    font-size: 28px;
    color: ${cfg.colors.text};
    font-family: ${cfg.fonts.font2};
`
const Btns = (props) => {
    const nav = useNavigation()
    function verify_answer(num){
        let correct = answ[props.level_num]
        if(num == correct){
            console.log('acertou')
            nav.navigate('Passed', {message:props.message})
        }else{
            let hearts = props.stores.hearts
            let increment = props.stores.increment
            if(hearts > 0){
                increment('-')
                hearts -= 1 
            }
            if(hearts == 0){
                console.log('game over')
                nav.navigate('Passed', {message:'GAME OVER'})
            }
            //hearts -= 1
        }
    }
    const buttons = props.list.map((item, index) => {
        return(
            <BtnBox key={index} onPress={() => {verify_answer(item)}}>
                <BtnText>{item}</BtnText>
            </BtnBox>
        )
    })
    return(
        <BtnsBox>
            {buttons}
        </BtnsBox>
    )
}

const Level = ({route}) => {
    const rootStore = useContext(RootContext)
    const { hearts, increment} = rootStore.HeartStore
    return(
        <Container>
            <LevelTitle>Level {route.params.num}</LevelTitle>
            <Menu stores={{hearts, increment}}/>
            <GameArea conta={route.params.conta}></GameArea>
            <Btns stores={{hearts, increment}} message={route.params.frases[1]} list={route.params.list} level_num={route.params.num}/>
            <Popup show="flex" text={route.params.frases[0]}/>
        </Container>
    ) 
}

export default observer(Level)