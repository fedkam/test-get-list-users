import React, { FC, useState } from 'react'

import { ControllButton } from '../Pagination/styles'
import * as Style from './styles'

export type CreateUserProps = {
    createUser: (name: string, date: string, email: string, phone: string, address: string) => any,
    close: () => void
}

export const CreateUser: FC<CreateUserProps> = ({ createUser, close }) => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [error, setError] = useState('')

    const onSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (name && date && email && phone && address) {
            const result = await createUser(name, date, email, phone, address);
            result?.success && alert('Пользователь успешно создан')
            close()
        } else {
            setError('Необходимо заполнить все поля')
        }
    }

    return (
        <Style.Wrapper>
            <form>
                <Style.Header>Создание пользователя</Style.Header>
                <Style.Fields>

                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder='Имя'
                        type='text'
                        required
                    />
                    <input
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        placeholder='Дата'
                        type='date'
                        required
                    />
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='Email'
                        type='email'
                        required
                    />
                    <input
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder='Телефон'
                        type='tel'
                        required
                    />
                    <input
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        placeholder='Адрес'
                        type='text'
                        required
                    />
                </Style.Fields>
                <Style.ButtonsWrapper>
                    <ControllButton type={'submit'} onClick={onSubmit}>Создать</ControllButton>
                    <ControllButton onClick={close}>Отмена</ControllButton>
                </Style.ButtonsWrapper>
                {error && <h1>Заполните все поля</h1>}
            </form>
        </Style.Wrapper>
    )
}
