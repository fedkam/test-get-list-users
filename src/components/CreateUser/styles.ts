import styled from 'styled-components'
import { ThemeType } from '../../common/types/theme'

export const Header = styled.h1`
    margin-bottom: 34px;
    font-weight:700;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Fields = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & > :nth-child(n) {
        margin-bottom: 24px;
        min-width: 400px;
        min-height: 40px;
        border-radius: 12px;
        border: 1px solid ${props => (props.theme as ThemeType).color.gray10};
        padding: 16px;
        :invalid { border: 2px solid red;}
    }
`

export const Wrapper = styled.div` 
    width: 100%;
    height: 100vh;
    background-color:  ${props => (props.theme as ThemeType).color.white};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
