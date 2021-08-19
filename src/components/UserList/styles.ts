import styled from 'styled-components'
import { ThemeType } from '../../common/types/theme'

export const PaginationWrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 40px;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: ${(props) => (props.theme as ThemeType).color.lightYellow};
    box-shadow: ${(props) => (props.theme as ThemeType).shadow.medium};
`

export const PaginationContainer = styled.div`
    min-width: 700px;
    display: flex;
    justify-content: space-between;
`

export const UserListWrapper = styled.div`
    position: relative;
    height: 100vh;
`

export const UserCardsWrapper = styled.div`
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 100px;
    & > :nth-child(n){ margin-bottom: 24px; }
    & > :last-child{ margin-bottom: 0px; }
    & > :first-child{ margin-top: 24px; }
`

export const Preloader = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`