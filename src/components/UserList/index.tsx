import { FC, useEffect, useState } from 'react'
import { useActions } from '../../customHooks/useActions'
import { useTypedSelector } from '../../customHooks/useTypedSelector'
import UserCard from '../UserCard'
import * as Style from './styles'
import { Pagination } from '../Pagination'
import { ControllButton } from '../Pagination/styles'
import { CreateUser } from '../CreateUser'

const UserList: FC = () => {
    const { page, error, loading, users } = useTypedSelector(state => state.user)
    const { fetchUsers, nextUserPage, previosUserPage, createUser } = useActions()
    const [isOpenCreateUserForm, setIsOpenCreateUserForm] = useState(false)

    useEffect(() => {
        fetchUsers(page)
    }, [page])

    if (loading) {
        return <Style.Preloader>Идет загрузка...</Style.Preloader>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    if (isOpenCreateUserForm) {
        return (
            <CreateUser
                createUser={createUser}
                close={() => setIsOpenCreateUserForm(false)}
            />
        )
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
                <Style.PaginationContainer>
                    <ControllButton onClick={() => setIsOpenCreateUserForm(true)}>Создать пользователя</ControllButton>
                    <Pagination
                        page={page}
                        nextPage={nextUserPage}
                        prevPage={previosUserPage}
                    />
                </Style.PaginationContainer>
            </Style.PaginationWrapper>
        </Style.UserListWrapper>
    )
}

export default UserList
