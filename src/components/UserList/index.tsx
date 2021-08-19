import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { useActions } from '../../customHooks/useActions'
import { useTypedSelector } from '../../customHooks/useTypedSelector'
import UserCard from '../UserCard'

const UserList: FC = () => {
    const { page, error, loading, users } = useTypedSelector(state => state.user)
    const { fetchUsers } = useActions()

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
        <UserListWrapper>
            {users.map((user, indx) => (
                <UserCard
                    key={user?.id ?? indx}
                    userData={user}
                />
            ))}
        </UserListWrapper>
    )
}

export default UserList;

const UserListWrapper = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
`