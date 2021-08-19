import styled from "styled-components";
import { ThemeType } from '../../common/types/theme'


export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
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