import React, { FC, useEffect, useState } from 'react'
import { useActions } from '../../customHooks/useActions'
import { useTypedSelector } from '../../customHooks/useTypedSelector'

export const LoginForm: FC = () => {
    const [email, setEmail] = useState('test-task@alfacrm.pro')
    const [password, setPassword] = useState('9616c537-f7c9-11ea-a4f7-0cc47ae3c526')
    const { error, loading } = useTypedSelector(state => state.auth)
    const { login, fetchUsers } = useActions()

    if (loading) {
        return <h1>Выполняется вход...</h1>
    }

    return (
        <>
            <div>
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
                <button onClick={() => login(email, password)}>Войти</button>
                <button onClick={() => fetchUsers(0)}>Загрузить</button>
            </div>
            <h1>{error}</h1>
        </>
    )
}
