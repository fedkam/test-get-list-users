import React, { FC, useEffect } from 'react'

import { useActions } from '../../customHooks/useActions'
import { useTypedSelector } from '../../customHooks/useTypedSelector'
import UserCard from '../UserCard'
import * as Style from './styles'
import { Pagination } from '../Pagination'

const UserList: FC = () => {
    const { page, error, loading, users } = useTypedSelector(state => state.user)
    const { fetchUsers, nextUserPage, previosUserPage } = useActions()

    useEffect(() => {
        fetchUsers(page)
    }, [page])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <Style.UserListWrapper>
            <Style.UserCardsWrapper>
                {users.map((user, indx) => (
                    <UserCard
                        key={user?.id ?? indx}
                        userData={user}
                    />
                ))}
            </Style.UserCardsWrapper>
            <Style.PaginationWrapper >
                <Pagination
                    page={page}
                    nextPage={nextUserPage}
                    prevPage={previosUserPage}
                />
            </Style.PaginationWrapper>
        </Style.UserListWrapper>
    )
}

export default UserList;
