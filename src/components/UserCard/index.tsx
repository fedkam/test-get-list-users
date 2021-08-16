import moment from 'moment'
import React from 'react'
import styled from 'styled-components'
import { User } from '../../common/types/user'

const testLocalData = {
    name: "Agni Agni",
    dob: moment("06.05.2000", 'DD-MM-YYYY'),
    balance: 6998.5,
    e_date: moment("2030-12-31"),
    email: ["5544433123@alfacrm.pro", "twrkpmail@gmail.com", "y.paramonova@eastinn.ru"],
    phone: ["+7(915)387-81-40", "+7(888)888-88-88"],
    addr: ["Ленина 1"],
    custom_photo: '',
}

const UserCard: React.FC = () => {

    return (
        <CardStyle>
            12
        </CardStyle>
    )
}

export default UserCard;

const CardStyle = styled.div`
    min-width: 300px;
    padding: 24px;
    border: 1px solid grey;
    border-radius: 16px;
`
