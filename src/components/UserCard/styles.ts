
import styled from 'styled-components'
import { ThemeType } from '../../common/types/theme'



export const FieldWrapper = styled.div`
    :nth-child(n){ margin-bottom: 24px; }
    :last-child{ margin-bottom: 32px; }
`

export const LabelField = styled.div`
    font-size: 14px;
    color: ${(props) => (props.theme as ThemeType).color.gray10};
`

export const ItemsField = styled.div`
    font-size: 18px;
    color: ${(props) => (props.theme as ThemeType).color.black10};
    margin-left: 16px;
`



export const LabelValidityField = styled.span`
    font-size: 12px;
    color: ${(props) => (props.theme as ThemeType).color.gray10};
`

export const ItemsValidityField = styled.span`
    font-size: 14px;
    color: ${(props) => (props.theme as ThemeType).color.black10};
    margin-left: 4px;
`



export const NameField = styled.div`
    font-size: ${(props) => (props.theme as ThemeType).fonts.size._24};
    font-weight: 700;
    margin-bottom: 24px;
`


export const Card = styled.div`
    max-width: 400px;
    padding: 24px;
    border: 1px solid ${props => (props.theme as ThemeType).color.gray10};
    border-radius: 16px;
    background-color: ${props => (props.theme as ThemeType).color.white};
    box-shadow:  ${props => (props.theme as ThemeType).shadow.small};;
`
export const HeaderUserCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 24px;
`

export const PhotoUser = styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid ${props => (props.theme as ThemeType).color.gray10};
    border-radius: 24px;
    background-color: ${props => (props.theme as ThemeType).color.white};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    > img {
        max-height: 100%;
    }
`

export const IconButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    :hover{
        cursor: pointer;
        box-shadow: ${props => (props.theme as ThemeType).shadow.small};
        transition: box-shadow .2s linear;
    }
    :active{
        background-color: ${props => (props.theme as ThemeType).color.gray9};
    }
    ::after,::before{
        content: '';
        width: 6px;
        height: 6px;
        background-color: ${props => (props.theme as ThemeType).color.gray10};
        border-radius: 100%;
    }
    ::after{ margin-left:4px }
`