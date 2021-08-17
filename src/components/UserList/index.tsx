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

    console.log("UserList users=", users)
    return (
        <UserListWrapper>
            <UserCard />
        </UserListWrapper>
    )
}

export default UserList;

const UserListWrapper = styled.div`
    padding: 24px;
    display: flex;
    justify-content: center;
`