import styled from 'styled-components'
import { ThemeType } from '../../common/types/theme'



export const Wrapper = styled.div`
    display: flex;
`
export const ControllButton = styled.button`
    min-width: 66px;
    padding: 4px 8px;
    margin: 0px 16px;
    background-color: ${(props) => (props.theme as ThemeType).color.white};
    border-radius: 10%;
    border: 1px solid ${(props) => (props.theme as ThemeType).color.gray10};
    box-shadow: ${(props) => (props.theme as ThemeType).shadow.small};;
`
