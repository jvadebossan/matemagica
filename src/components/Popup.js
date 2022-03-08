import styled from 'styled-components'
import React from 'react'

import cfg from '../cfg.json'

const Container = styled.View`
    width: 90%;
    height:auto;
    padding-bottom: 60px;
    background-color: ${cfg.colors.background3};
    position: absolute;
    top: 30%;
    left: 5%;
    border-radius: 15px;
    display: ${props => props.show};
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
const Popup = (props) => {
    const [show, setShow] = React.useState(props.show)
    return(
        <Container show={show}>
            <Text>{props.text}</Text>
            <Ok onPress={()=>{setShow('none')}}>
                <OkText>Ok</OkText>
            </Ok>
        </Container>
    )
}

export default Popup