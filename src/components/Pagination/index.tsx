import { FC } from 'react'
import * as Style from './styles'
import { PaginationProps } from './types'

export const Pagination: FC<PaginationProps> = ({ page = 0, nextPage, prevPage }) => {
    return (
        <Style.Wrapper>
            <Style.ControllButton onClick={prevPage} disabled={page == 0}>
                Назад
            </Style.ControllButton>
            <h1>{page}</h1>
            <Style.ControllButton onClick={nextPage}>
                Вперед
            </Style.ControllButton>
        </Style.Wrapper>
    )
}
