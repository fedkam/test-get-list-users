import styled from 'styled-components'
import { ThemeType } from '../../common/types/theme'

export const PaginationWrapper = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: ${(props) => (props.theme as ThemeType).color.lightYellow};
    box-shadow: ${(props) => (props.theme as ThemeType).shadow.medium};
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