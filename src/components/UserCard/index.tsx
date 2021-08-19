import React, { FC } from 'react'
import moment from 'moment'
import { User } from '../../common/types/user'
import {
    FieldPropsType,
    ValidityFieldPropsType,
    ValidationFieldUserCardArg
} from './types'
import * as Style from './styles'



const Field: FC<FieldPropsType> = ({ children, items }) => {
    const validItems = validationFieldUserCard(items);
    return (
        <Style.FieldWrapper>
            <Style.LabelField>{children}</Style.LabelField>
            <Style.ItemsField>
                {
                    Array.isArray(validItems) ?
                        validItems.map((item, key) => (
                            <div key={`${item}${key}`}>
                                {item}
                            </div>
                        ))
                        :
                        <div>{validItems}</div>
                }
            </Style.ItemsField>
        </Style.FieldWrapper>
    )
}



const ValidityField: FC<ValidityFieldPropsType> = ({ children, item }) => (
    <>
        <Style.LabelValidityField>{children}</Style.LabelValidityField>
        <Style.ItemsValidityField>{item}</Style.ItemsValidityField>
    </>
)



function validationFieldUserCard(item: ValidationFieldUserCardArg): string | string[] {
    const errMessage = 'Данные отсутствуют'
    switch (typeof item) {
        case 'string':
            return (String(item) ? item : errMessage)
        case 'object':
            if (moment.isMoment(item)) {
                if (item.isValid()) return item.format('DD.MM.YYYY')
            }
            if (Array.isArray(item)) {
                if (String(item)) return item
            }
            return errMessage
    }
}



const UserCard: FC<{ userData: User }> = ({ userData }) => {
    const {
        name,
        dob,
        balance,
        e_date,
        email,
        phone,
        addr,
        custom_photo
    } = userData
    function arrayWrapper(item: string | string[]): string[] {
        return (Array.isArray(item) ? item : [item])
    };
    const contacts = arrayWrapper(phone).concat(arrayWrapper(email));
    const isValid = moment() <= e_date;
    return (
        <Style.Card isValid={isValid}>
            <Style.HeaderUserCard>
                <Style.PhotoUser>
                    <img src={custom_photo ?? null} />
                </Style.PhotoUser>
                <Style.IconButton />
            </Style.HeaderUserCard>
            <div>
                <Style.NameField>{name}</Style.NameField>
                <Field items={dob}> Дата рождения </Field>
                <Field items={addr}> Адрес </Field>
                <Field items={contacts}> Контакты </Field>
                <Field items={balance}> Баланс </Field>
                <ValidityField item={e_date.format('DD.MM.YYYY')} >
                    Учетная запись действительна до:
                </ValidityField>
            </div>
        </Style.Card>
    )
}

export default UserCard;