import moment from 'moment';
import { Moment } from 'moment';
import React, { FC, useState } from 'react'
import styled from 'styled-components';
import { ThemeType } from '../../common/types/theme'
import { ControllButton } from '../Pagination/styles'

type CreateUserProps = {
    createUser: (name: string, date: Moment, email: string, phone: string, address: string) => void,
    close: () => void
}
export const CreateUser: FC<CreateUserProps> = ({ createUser, close }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('')
    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const dateMoment = moment(date)
        if (name && date && email && phone && address) {
            createUser(name, dateMoment, email, phone, address)
        } else {
            setError('Необходимо заполнить все поля')
        }
    }
    return (
        <Wrapper>
            <form>
                <Header>Создание пользователя</Header>
                <Fields>

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
                </Fields>
                <ButtonsWrapper>
                    <ControllButton type={'submit'} onClick={onSubmit}>Создать</ControllButton>
                    <ControllButton onClick={close}>Отмена</ControllButton>
                </ButtonsWrapper>
                {error && <h1>Заполните все поля</h1>}
            </form>
        </Wrapper>
    )
}

export const Header = styled.h1`
    margin-bottom: 34px;
    font-weight:700;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Fields = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & > :nth-child(n) {
        margin-bottom: 24px;
        min-width: 400px;
        min-height: 40px;
        border-radius: 12px;
        border: 1px solid ${props => (props.theme as ThemeType).color.gray10};
        padding: 16px;
        :invalid { border: 2px solid red;}
    }
`

export const Wrapper = styled.div` 
    width: 100%;
    height: 100vh;
    background-color:  ${props => (props.theme as ThemeType).color.white};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`