import React, { FC, useState } from 'react'

export const LoginForm: FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
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
            <button>Войти</button>
        </div>
    )
}
