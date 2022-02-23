import styled from 'styled-components'
import cfg from '../cfg.json'


const Container = styled.SafeAreaView`
    background-color: ${cfg.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;
`

const Level = () => {
    return(
        <Container>

        </Container>
    )
}

export default Level