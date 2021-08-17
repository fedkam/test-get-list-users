import moment from 'moment'
import React, { FC } from 'react'
import styled from 'styled-components'
import { ThemeType } from '../../common/types/theme';
import { User } from '../../common/types/user'

const props = {
    name: "Agni Agni",
    dob: moment("06.05.2000", 'DD-MM-YYYY'),
    balance: '6998.5',
    e_date: moment("2030-12-31"),
    email: ["5544433123@alfacrm.pro", "twrkpmail@gmail.com", "y.paramonova@eastinn.ru"],
    phone: ["+7(915)387-81-40", "+7(888)888-88-88"],
    addr: ["Ленина 1"],
    custom_photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
}



interface FieldPropsType {
    children: string;
    items: string | string[];
}

const FieldWrapper = styled.div`
    :nth-child(n){ margin-bottom: 24px; }
    :last-child{ margin-bottom: 32px; }
`

const LabelFieldStyle = styled.div`
    font-size: 14px;
    color: ${(props) => (props.theme as ThemeType).color.gray10};
`

const ItemsFieldStyle = styled.div`
    font-size: 18px;
    color: ${(props) => (props.theme as ThemeType).color.black10};
    margin-left: 16px;
`

const Field: FC<FieldPropsType> = ({ children, items }) => (
    <FieldWrapper>
        <LabelFieldStyle>{children}</LabelFieldStyle>
        <ItemsFieldStyle>
            {
                Array.isArray(items) ?
                    items.map((item, key) => (
                        <div key={`${item}${key}`}>
                            {item}
                        </div>
                    ))
                    :
                    <div>{items}</div>
            }
        </ItemsFieldStyle>
    </FieldWrapper>
)



interface ValidityFieldPropsType {
    children: string;
    item: string;
}

const LabelValidityFieldStyle = styled.span`
    font-size: 12px;
    color: ${(props) => (props.theme as ThemeType).color.gray10};
`

const ItemsValidityFieldStyle = styled.span`
    font-size: 14px;
    color: ${(props) => (props.theme as ThemeType).color.black10};
    margin-left: 4px;
`

const ValidityField: FC<ValidityFieldPropsType> = ({ children, item }) => (
    <>
        <LabelValidityFieldStyle>{children}</LabelValidityFieldStyle>
        <ItemsValidityFieldStyle>{item}</ItemsValidityFieldStyle>
    </>
)




const NameFieldStyle = styled.div`
    font-size: ${(props) => (props.theme as ThemeType).fonts.size._24};
    font-weight: 700;
    margin-bottom: 24px;
`



const CardStyle = styled.div`
    min-width: 300px;
    padding: 24px;
    border: 1px solid ${props => (props.theme as ThemeType).color.gray10};
    border-radius: 16px;
    background-color: ${props => (props.theme as ThemeType).color.white};
    box-shadow:  ${props => (props.theme as ThemeType).shadow.small};;
`
const HeaderUserCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 24px;
`

const PhotoUserStyle = styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid ${props => (props.theme as ThemeType).color.gray10};
    border-radius: 24px;
    background-color: ${props => (props.theme as ThemeType).color.white};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    > img {
        max-height: 100%;
    }
`

const IconButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    :hover{
        cursor: pointer;
        box-shadow: ${props => (props.theme as ThemeType).shadow.small};
        transition: box-shadow .2s linear;
    }
    :active{
        background-color: ${props => (props.theme as ThemeType).color.gray9};
    }
    ::after,::before{
        content: '';
        width: 6px;
        height: 6px;
        background-color: ${props => (props.theme as ThemeType).color.gray10};
        border-radius: 100%;
    }
    ::after{ margin-left:4px }
`

const UserCard: FC = () => {
    const {
        name,
        dob,
        balance,
        e_date,
        email,
        phone,
        addr,
        custom_photo
    }: User = props
    return (
        <CardStyle>
            <HeaderUserCard>
                <PhotoUserStyle>
                    <img src={custom_photo ?? null} />
                </PhotoUserStyle>
                <IconButton />
            </HeaderUserCard>
            <div>
                <NameFieldStyle>{name}</NameFieldStyle>
                <Field items={dob.format('DD.MM.YYYY')}> Дата рождения </Field>
                <Field items={addr}> Адрес </Field>
                <Field items={phone.concat(email)}> Контакты </Field>
                <Field items={balance}> Баланс </Field>
                <ValidityField item={e_date.format('DD.MM.YYYY')}>Учетная запись действительна до:</ValidityField>
            </div>
        </CardStyle>
    )
}

export default UserCard;