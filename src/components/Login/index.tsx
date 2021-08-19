import React, { FC, useState } from 'react'
import { useActions } from '../../customHooks/useActions'
import { useTypedSelector } from '../../customHooks/useTypedSelector'
import { Preloader } from '../UserList/styles'
import * as Style from './styles'
import { ControllButton } from '../Pagination/styles'

export const LoginForm: FC = () => {
    const [email, setEmail] = useState('test-task@alfacrm.pro')
    const [password, setPassword] = useState('9616c537-f7c9-11ea-a4f7-0cc47ae3c526')
    const { error, loading } = useTypedSelector(state => state.auth)
    const { login } = useActions()

    if (loading) {
        return <Preloader>Выполняется вход...</Preloader>
    }

    return (
        <Style.Wrapper>
            <Style.Fields>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Email'
                    type='text'
                />
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Password'
                    type='text'
                />

                <ControllButton onClick={() => login(email, password)}>Войти</ControllButton>
            </Style.Fields>
            <h1>{error}</h1>
        </Style.Wrapper>
    )
}
