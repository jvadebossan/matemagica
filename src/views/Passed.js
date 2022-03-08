import styled from 'styled-components'
import React, {useContext} from 'react'
import { useNavigation } from '@react-navigation/native'
import cfg from '../cfg.json'

import { observer } from 'mobx-react-lite'
import { RootContext } from '../App'

import Popup from '../components/Popup'

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

const Passed = ({route}) => {
    const navigation = useNavigation()
    if(route.params.message == 'GAME OVER'){
        const rootStore = useContext(RootContext)
        const {reset} = rootStore.HeartStore
        reset()
    }
    return(
        <Container>
            <Bg>
                <Text>{route.params.message}</Text>
                <Ok onPress={()=>{navigation.navigate('Levels')}}>
                    <OkText>Ok</OkText>
                </Ok>
            </Bg>
        </Container>
    )
}

export default observer(Passed)