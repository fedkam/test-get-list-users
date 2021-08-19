import { UserActions, UserActionTypes } from '../../common/types/user'
import { AuthActions, AuthActionTypes } from '../../common/types/auth';
import { Dispatch } from 'redux'
import moment from 'moment'
import UserService from '../../service/UserService'

export const createUser = (name: string, date: string, email: string, phone: string, address: string) => {
    return async (dispatch: Dispatch<UserActions>) => {
        try {
            dispatch({ type: UserActionTypes.CREATE_USER })
            const response = await UserService.createUser(name, date, email, phone, address)
            dispatch({ type: UserActionTypes.CREATE_USER_SUCCESS })
            return {
                errors: response?.data?.errors,
                success: response?.data?.success
            }
        } catch (err) {
            console.log(err)
        }
    }
}

export const previosUserPage = () => (dispatch: Dispatch<UserActions>) => {
    dispatch({ type: UserActionTypes.PREVIOUS_USER_PAGE })
}

export const nextUserPage = () => (dispatch: Dispatch<UserActions>) => {
    dispatch({ type: UserActionTypes.NEXT_USER_PAGE })
}

export const fetchUsers = (page = 0) => {
    return async (dispatch: Dispatch<UserActions | AuthActions>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USERS })
            const response = await UserService.fetchUsers(page)
            let items = response.data.items.map((user: any) => (
                {
                    id: user.id,
                    name: user.name,
                    dob: moment(user.dob, 'DD-MM-YYYY'),
                    balance: user.balance,
                    e_date: moment(user.e_date),
                    email: user.email,
                    phone: user.phone,
                    addr: user.addr,
                    custom_photo: ''
                }
            ))

            // Примеры
            items[0].custom_photo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
            items[0].e_date = moment('22.11.2000', 'DD-MM-YYYY')
            items[1].e_date = moment()
            //

            dispatch(
                {
                    type: UserActionTypes.FETCH_USERS_SUCCESS,
                    payload: {
                        page: response.data.page,
                        users: items
                    }
                }
            )
        } catch (err) {
            console.log(err)
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
            if (err.response.status == 401) {
                dispatch({ type: AuthActionTypes.LOGOUT })
            }
        }
    }
}

const testLocalData = {
    "total": 887,
    "count": 20,
    "page": 0,
    "items": [
        {
            "id": 5303,
            "branch_ids": [
                1
            ],
            "teacher_ids": [],
            "name": "Agni Agni",
            "barcode": "",
            "color": "#ffcd70",
            "is_study": 1,
            "study_status_id": null,
            "lead_status_id": null,
            "lead_reject_id": null,
            "lead_source_id": 25,
            "assigned_id": 6,
            "legal_type": 1,
            "legal_name": "Agni  Agni",
            "company_id": null,
            "dob": "06.05.2000",
            "balance": "6998.50",
            "balance_base": "6998.50",
            "balance_bonus": 2320,
            "paid_count": 6998,
            "next_lesson_date": "2021-07-21 12:00:00",
            "paid_till": "2021-08-31 12:00:00",
            "last_attend_date": "2021-05-20",
            "b_date": "2020-09-17 14:28:27",
            "e_date": "2030-12-31",
            "note": "Без имени 1.csv\r\nКнига1.csv\r\nКнига1.csv\r\nПервый контакт: 29.01.2020",
            "paid_lesson_count": 6998,
            "paid_lesson_date": "2021-08-31 12:00:00",
            "phone": [
                "+7(915)387-81-40",
                "+7(888)888-88-88"
            ],
            "email": [
                "5544433123@alfacrm.pro",
                "twrkpmail@gmail.com",
                "y.paramonova@eastinn.ru"
            ],
            "web": [],
            "addr": [
                "Ленина 1"
            ],
            "custom_klatest": "",
            "custom_gorod": ""
        },
        {
            "id": 4004,
            "branch_ids": [
                1
            ],
            "teacher_ids": [
                "Chris Edwards"
            ],
            "name": "Aijamal Aijamal",
            "barcode": "",
            "color": null,
            "is_study": 1,
            "study_status_id": null,
            "lead_status_id": null,
            "lead_reject_id": null,
            "lead_source_id": 25,
            "assigned_id": null,
            "legal_type": 1,
            "legal_name": "Aijamal  Aijamal",
            "company_id": null,
            "dob": "",
            "balance": "1.00",
            "balance_base": "1.00",
            "balance_bonus": 0,
            "paid_count": 0,
            "next_lesson_date": null,
            "paid_till": null,
            "last_attend_date": null,
            "b_date": "2020-09-17 14:27:38",
            "e_date": "2030-12-31",
            "note": "Книга1.csv\nКнига1.csv\nПервый контакт: 13.07.2020",
            "paid_lesson_count": 0,
            "paid_lesson_date": null,
            "phone": [
                "+79261579095"
            ],
            "email": [],
            "web": [],
            "addr": [],
            "custom_klatest": "",
            "custom_gorod": ""
        },
        {
            "id": 11079,
            "branch_ids": [
                1
            ],
            "teacher_ids": [],
            "name": "Anna",
            "barcode": "",
            "color": null,
            "is_study": 1,
            "study_status_id": 10,
            "lead_status_id": null,
            "lead_reject_id": null,
            "lead_source_id": null,
            "assigned_id": null,
            "legal_type": 1,
            "legal_name": "Anna",
            "company_id": null,
            "dob": "",
            "balance": "0.00",
            "balance_base": "0.00",
            "balance_bonus": 0,
            "paid_count": 0,
            "next_lesson_date": null,
            "paid_till": null,
            "last_attend_date": null,
            "b_date": "2021-05-15 12:02:27",
            "e_date": "2030-12-31",
            "note": "",
            "paid_lesson_count": 0,
            "paid_lesson_date": null,
            "phone": [],
            "email": [],
            "web": [],
            "addr": [],
            "custom_klatest": "",
            "custom_gorod": ""
        },
        {
            "id": 3746,
            "branch_ids": [
                1
            ],
            "teacher_ids": [],
            "name": "Arlly Ахметшин",
            "barcode": "",
            "color": null,
            "is_study": 1,
            "study_status_id": null,
            "lead_status_id": null,
            "lead_reject_id": null,
            "lead_source_id": 25,
            "assigned_id": null,
            "legal_type": 1,
            "legal_name": "Arlly  Arlly",
            "company_id": null,
            "dob": "",
            "balance": "0.00",
            "balance_base": "0.00",
            "balance_bonus": 0,
            "paid_count": 0,
            "next_lesson_date": null,
            "paid_till": null,
            "last_attend_date": null,
            "b_date": "2020-09-17 14:27:27",
            "e_date": "2030-12-31",
            "note": "Книга1.csv\r\nКнига1.csv\r\nПервый контакт: 07.08.2020",
            "paid_lesson_count": 0,
            "paid_lesson_date": null,
            "phone": [
                "+7(901)185-34-79"
            ],
            "email": [],
            "web": [],
            "addr": [],
            "custom_klatest": "",
            "custom_gorod": ""
        },
        {
            "id": 239,
            "branch_ids": [
                1
            ],
            "teacher_ids": [
                "Chris Edwards"
            ],
            "name": "Arnold Robertson",
            "barcode": "",
            "color": null,
            "is_study": 1,
            "study_status_id": 6,
            "lead_status_id": null,
            "lead_reject_id": null,
            "lead_source_id": null,
            "assigned_id": 2,
            "legal_type": 1,
            "legal_name": "Arnold Robertson",
            "company_id": null,
            "dob": "09.03.1990",
            "balance": "-14160.00",
            "balance_base": "-14160.00",
            "balance_bonus": 10,
            "paid_count": -13,
            "next_lesson_date": "2021-04-19 13:00:01",
            "paid_till": null,
            "last_attend_date": "2021-03-31",
            "b_date": "2019-07-18 15:24:30",
            "e_date": "2030-12-31",
            "note": "",
            "paid_lesson_count": -13,
            "paid_lesson_date": null,
            "phone": [],
            "email": [
                "2516@alfacrm.pro"
            ],
            "web": [],
            "addr": [],
            "custom_klatest": "",
            "custom_gorod": ""
        },
        {
            "id": 5394,
            "branch_ids": [
                1
            ],
            "teacher_ids": [],
            "name": "Asel Асель",
            "barcode": "",
            "color": null,
            "is_study": 1,
            "study_status_id": null,
            "lead_status_id": null,
            "lead_reject_id": null,
            "lead_source_id": 25,
            "assigned_id": null,
            "legal_type": 1,
            "legal_name": "Аселька",
            "company_id": null,
            "dob": "",
            "balance": "-4600.00",
            "balance_base": "-4600.00",
            "balance_bonus": 20,
            "paid_count": -5,
            "next_lesson_date": "2021-05-19 11:00:01",
            "paid_till": null,
            "last_attend_date": "2021-05-18",
            "b_date": "2020-09-17 14:28:30",
            "e_date": "2030-12-31",
            "note": "Книга1.csv\r\nКнига1.csv\r\nПервый контакт: 25.01.2020",
            "paid_lesson_count": -5,
            "paid_lesson_date": null,
            "phone": [
                "+7(985)049-05-00"
            ],
            "email": [
                "50008@alfacrm.pro"
            ],
            "web": [],
            "addr": [],
            "custom_klatest": "",
            "custom_gorod": ""
        },
        {
            "id": 78,
            "branch_ids": [
                1
            ],
            "teacher_ids": [],
            "name": "Ashley Walsh",
            "barcode": "",
            "color": null,
            "is_study": 1,
            "study_status_id": 1,
            "lead_status_id": null,
            "lead_reject_id": null,
            "lead_source_id": null,
            "assigned_id": 2,
            "legal_type": 1,
            "legal_name": "Ashley djkmi",
            "company_id": null,
            "dob": "08.01.1999",
            "balance": "-411.70",
            "balance_base": "-411.70",
            "balance_bonus": 5,
            "paid_count": -40,
            "next_lesson_date": "2021-05-15 14:00:00",
            "paid_till": null,
            "last_attend_date": "2021-03-31",
            "b_date": "2019-06-24 15:24:24",
            "e_date": "2030-12-31",
            "note": "",
            "paid_lesson_count": -40,
            "paid_lesson_date": null,
            "phone": [
                "+7(949)917-19-15"
            ],
            "email": [
                "6233@alfacrm.pro"
            ],
            "web": [],
            "addr": [],
            "custom_klatest": "",
            "custom_gorod": ""
        },
        {
            "id": 3527,
            "branch_ids": [
                1
            ],
            "teacher_ids": [],
            "name": "Asi Asi",
            "barcode": "",
            "color": null,
            "is_study": 1,
            "study_status_id": null,
            "lead_status_id": null,
            "lead_reject_id": null,
            "lead_source_id": 25,
            "assigned_id": null,
            "legal_type": 1,
            "legal_name": "Asi  Asi",
            "company_id": null,
            "dob": "",
            "balance": "0.00",
            "balance_base": "0.00",
            "balance_bonus": 0,
            "paid_count": 0,
            "next_lesson_date": null,
            "paid_till": null,
            "last_attend_date": null,
            "b_date": "2020-09-17 14:27:21",
            "e_date": "2030-12-31",
            "note": "Книга1.csv\r\nКнига1.csv\r\nПервый контакт: 22.08.2020",
            "paid_lesson_count": 0,
            "paid_lesson_date": null,
            "phone": [
                "+7(999)823-25-13",
                "+49(1522)883-5173"
            ],
            "email": [],
            "web": [],
            "addr": [],
            "custom_klatest": "",
            "custom_gorod": ""
        },
        {
            "id": 4203,
            "branch_ids": [
                1
            ],
            "teacher_ids": [
                "John Coffey"
            ],
            "name": "Astx Астерикс",
            "barcode": "",
            "color": null,
            "is_study": 1,
            "study_status_id": null,
            "lead_status_id": null,
            "lead_reject_id": null,
            "lead_source_id": 25,
            "assigned_id": null,
            "legal_type": 1,
            "legal_name": "Astx  Astx",
            "company_id": null,
            "dob": "",
            "balance": "0.00",
            "balance_base": "0.00",
            "balance_bonus": 0,
            "paid_count": 0,
            "next_lesson_date": null,
            "paid_till": null,
            "last_attend_date": "2021-03-04",
            "b_date": "2020-09-17 14:27:45",
            "e_date": "2030-12-31",
            "note": "Книга1.csv\r\nКнига1.csv\r\nПервый контакт: 24.06.2020\r\nОплата, примечание: Не готова сейчас, просто узнать. Что и как , сама перезвонит.\r\nОплата, примечание: Не готова сейчас, просто узнать. Что и как , сама перезвонит.",
            "paid_lesson_count": 0,
            "paid_lesson_date": null,
            "phone": [
                "+7(926)388-63-42"
            ],
            "email": [],
            "web": [],
            "addr": [],
            "custom_klatest": "",
            "custom_gorod": ""
        },
        {
            "id": 4362,
            "branch_ids": [
                1
            ],
            "teacher_ids": [
                "Catherine Richards иван"
            ],
            "name": "Aбытов Союзбек Aбытов Союзбек",
            "barcode": "",
            "color": null,
            "is_study": 1,
            "study_status_id": null,
            "lead_status_id": null,
            "lead_reject_id": null,
            "lead_source_id": 25,
            "assigned_id": null,
            "legal_type": 1,
            "legal_name": "Aбытов Союзбек Aбытов Союзбек",
            "company_id": null,
            "dob": "",
            "balance": "0.00",
            "balance_base": "0.00",
            "balance_bonus": 0,
            "paid_count": 0,
            "next_lesson_date": null,
            "paid_till": null,
            "last_attend_date": null,
            "b_date": "2020-09-17 14:27:52",
            "e_date": "2030-12-31",
            "note": "Книга1.csv\nКнига1.csv\nПервый контакт: 01.04.2020",
            "paid_lesson_count": 0,
            "paid_lesson_date": null,
            "phone": [
                "+79263061223"
            ],
            "email": [],
            "web": [],
            "addr": [],
            "custom_klatest": "",
            "custom_gorod": ""
        },
        {
            "id": 5089,
            "branch_ids": [
                1
            ],
            "teacher_ids": [],
            "name": "BAKU BAKU",
            "barcode": "",
            "color": null,
            "is_study": 1,
            "study_status_id": null,
            "lead_status_id": null,
            "lead_reject_id": null,
            "lead_source_id": 25,
            "assigned_id": null,
            "legal_type": 1,
            "legal_name": "BAKU  BAKU",
            "company_id": null,
            "dob": "",
            "balance": "0.00",
            "balance_base": "0.00",
            "balance_bonus": 0,
            "paid_count": 0,
            "next_lesson_date": "2021-04-06 12:00:01",
            "paid_till": null,
            "last_attend_date": null,
            "b_date": "2020-09-17 14:28:19",
            "e_date": "2030-12-31",
            "note": "Книга1.csv\r\nКнига1.csv\r\nПервый контакт: 06.02.2020",
            "paid_lesson_count": 0,
            "paid_lesson_date": null,
            "phone": [
                "+7(929)911-11-39"
            ],
            "email": [
                "11390@alfacrm.pro"
            ],
            "web": [],
            "addr": [],
            "custom_klatest": "",
            "custom_gorod": ""
        },
        {
            "id": 400,
            "branch_ids": [
                1
            ],
            "teacher_ids": [
                "Catherine Richards иван"
            ],
            "name": "Barbara Thompson",
            "barcode": "",
            "color": null,
            "is_study": 1,
            "study_status_id": 1,
            "lead_status_id": null,
            "lead_reject_id": null,
            "lead_source_id": null,
            "assigned_id": 2,
            "legal_type": 1,
            "legal_name": "Barbara Thompson",
            "company_id": null,
            "dob": "09.10.1988",
            "balance": "-15350.00",
            "balance_base": "0.00",
            "balance_bonus": 0,
            "paid_count": -36,
            "next_lesson_date": null,
            "paid_till": null,
            "last_attend_date": "2021-03-01",
            "b_date": "2019-07-01 15:24:36",
            "e_date": "2030-12-31",
            "note": "",
            "paid_lesson_count": -36,
            "paid_lesson_date": null,
            "phone": [
                "+7(956)622-40-29"
            ],
            "email": [
                "9719@alfacrm.pro"
            ],
            "web": [],
            "addr": [],
            "custom_klatest": "",
            "custom_gorod": ""
        },
        {
            "id": 4532,
            "branch_ids": [
                1
            ],
            "teacher_ids": [],
            "name": "Barno Barno",
            "barcode": "",
            "color": null,
            "is_study": 1,
            "study_status_id": null,
            "lead_status_id": null,
            "lead_reject_id": null,
            "lead_source_id": 25,
            "assigned_id": null,
            "legal_type": 1,
            "legal_name": "Barno  Barno",
            "company_id": null,
            "dob": "",
            "balance": "0.00",
            "balance_base": "0.00",
            "balance_bonus": 0,
            "paid_count": 0,
            "next_lesson_date": null,
            "paid_till": null,
            "last_attend_date": null,
            "b_date": "2020-09-17 14:27:59",
            "e_date": "2030-12-31",
            "note": "Книга1.csv\r\nКнига1.csv\r\nПервый контакт: 05.03.2020",
            "paid_lesson_count": 0,
            "paid_lesson_date": null,
            "phone": [],
            "email": [
                "79772828533@alfacrm.pro"
            ],
            "web": [],
            "addr": [],
            "custom_klatest": "",
            "custom_gorod": ""
        },
        {
            "id": 5395,
            "branch_ids": [
                1
            ],
            "teacher_ids": [
                "Catherine Richards иван"
            ],
            "name": "baronessa_fon_sh baronessa_fon_sh",
            "barcode": "",
            "color": null,
            "is_study": 1,
            "study_status_id": null,
            "lead_status_id": null,
            "lead_reject_id": null,
            "lead_source_id": 25,
            "assigned_id": null,
            "legal_type": 1,
            "legal_name": "baronessa_fon_sh  baronessa_fon_sh",
            "company_id": null,
            "dob": "",
            "balance": "0.00",
            "balance_base": "0.00",
            "balance_bonus": 0,
            "paid_count": 0,
            "next_lesson_date": null,
            "paid_till": null,
            "last_attend_date": null,
            "b_date": "2020-09-17 14:28:30",
            "e_date": "2030-12-31",
            "note": "Книга1.csv\nКнига1.csv\nПервый контакт: 25.01.2020\nОплата, примечание: пробное 04.02\nОплата, примечание: пробное 04.02",
            "paid_lesson_count": 0,
            "paid_lesson_date": null,
            "phone": [
                "+79779834160"
            ],
            "email": [],
            "web": [],
            "addr": [],
            "custom_klatest": "",
            "custom_gorod": ""
        },
        {
            "id": 260,
            "branch_ids": [
                1
            ],
            "teacher_ids": [],
            "name": "Barry Cole",
            "barcode": "",
            "color": null,
            "is_study": 1,
            "study_status_id": 1,
            "lead_status_id": null,
            "lead_reject_id": null,
            "lead_source_id": null,
            "assigned_id": 2,
            "legal_type": 1,
            "legal_name": "Barry Cole",
            "company_id": null,
            "dob": "07.10.1988",
            "balance": "-4900.00",
            "balance_base": "3100.00",
            "balance_bonus": 5,
            "paid_count": 108,
            "next_lesson_date": "2021-04-21 10:00:00",
            "paid_till": null,
            "last_attend_date": "2021-03-31",
            "b_date": "2019-07-10 15:24:31",
            "e_date": "2030-12-31",
            "note": "",
            "paid_lesson_count": 108,
            "paid_lesson_date": null,
            "phone": [
                "+7(932)751-21-59",
                "+7(923)730-04-53"
            ],
            "email": [
                "6424@alfacrm.pro",
                "yulia1223111@alfacrm.pro"
            ],
            "web": [],
            "addr": [],
            "custom_klatest": "",
            "custom_gorod": ""
        },
        {
            "id": 210,
            "branch_ids": [
                1
            ],
            "teacher_ids": [
                "Elmer Owen"
            ],
            "name": "Barry Cole Barry Cole",
            "barcode": "",
            "color": null,
            "is_study": 1,
            "study_status_id": 1,
            "lead_status_id": null,
            "lead_reject_id": null,
            "lead_source_id": 1,
            "assigned_id": 2,
            "legal_type": 1,
            "legal_name": "Barry Cole Русский",
            "company_id": null,
            "dob": "05.10.1990",
            "balance": "7186.50",
            "balance_base": "7186.50",
            "balance_bonus": 0,
            "paid_count": 0,
            "next_lesson_date": "2021-04-19 10:00:00",
            "paid_till": null,
            "last_attend_date": "2021-03-19",
            "b_date": "2019-07-17 15:24:29",
            "e_date": "2030-12-31",
            "note": "customer_20200819180650.csv",
            "paid_lesson_count": 0,
            "paid_lesson_date": null,
            "phone": [
                "+7(937)693-65-33"
            ],
            "email": [
                "9446@alfacrm.pro"
            ],
            "web": [],
            "addr": [],
            "custom_klatest": "",
            "custom_gorod": ""
        },
        {
            "id": 3898,
            "branch_ids": [
                1
            ],
            "teacher_ids": [
                "Elmer Owen"
            ],
            "name": "bars89 bars89",
            "barcode": "",
            "color": null,
            "is_study": 1,
            "study_status_id": null,
            "lead_status_id": null,
            "lead_reject_id": null,
            "lead_source_id": 25,
            "assigned_id": null,
            "legal_type": 1,
            "legal_name": "bars89  bars89",
            "company_id": null,
            "dob": "",
            "balance": "200.00",
            "balance_base": "200.00",
            "balance_bonus": 0,
            "paid_count": 8,
            "next_lesson_date": "2021-04-06 12:00:01",
            "paid_till": "2021-05-25 12:00:00",
            "last_attend_date": null,
            "b_date": "2020-09-17 14:27:34",
            "e_date": "2030-12-31",
            "note": "Книга1.csv\nКнига1.csv\nПервый контакт: 27.07.2020",
            "paid_lesson_count": 8,
            "paid_lesson_date": "2021-05-25 12:00:00",
            "phone": [
                "+79670012108"
            ],
            "email": [],
            "web": [],
            "addr": [],
            "custom_klatest": "",
            "custom_gorod": ""
        },
        {
            "id": 5358,
            "branch_ids": [
                1
            ],
            "teacher_ids": [],
            "name": "Bella Bella",
            "barcode": "",
            "color": null,
            "is_study": 1,
            "study_status_id": null,
            "lead_status_id": null,
            "lead_reject_id": null,
            "lead_source_id": 25,
            "assigned_id": null,
            "legal_type": 1,
            "legal_name": "Bella  Bella",
            "company_id": null,
            "dob": "",
            "balance": "-50.00",
            "balance_base": "-50.00",
            "balance_bonus": 5,
            "paid_count": -1,
            "next_lesson_date": "2021-05-18 16:30:00",
            "paid_till": null,
            "last_attend_date": "2021-03-30",
            "b_date": "2020-09-17 14:28:29",
            "e_date": "2030-12-31",
            "note": "Книга1.csv\r\nКнига1.csv\r\nПервый контакт: 27.01.2020",
            "paid_lesson_count": -1,
            "paid_lesson_date": null,
            "phone": [
                "+7(915)413-46-56"
            ],
            "email": [
                "y.paramonova@eastinn.ru"
            ],
            "web": [],
            "addr": [],
            "custom_klatest": "",
            "custom_gorod": ""
        },
        {
            "id": 75,
            "branch_ids": [
                1
            ],
            "teacher_ids": [
                "Elmer Owen"
            ],
            "name": "Ben Edwards",
            "barcode": "",
            "color": null,
            "is_study": 1,
            "study_status_id": 1,
            "lead_status_id": null,
            "lead_reject_id": null,
            "lead_source_id": null,
            "assigned_id": 2,
            "legal_type": 1,
            "legal_name": "Ben Edwards",
            "company_id": null,
            "dob": "20.04.1991",
            "balance": "1710.00",
            "balance_base": "1710.00",
            "balance_bonus": 0,
            "paid_count": 0,
            "next_lesson_date": null,
            "paid_till": null,
            "last_attend_date": "2019-07-18",
            "b_date": "2019-07-20 15:24:24",
            "e_date": "2030-12-31",
            "note": "",
            "paid_lesson_count": 0,
            "paid_lesson_date": null,
            "phone": [
                "+7(952)772-84-36"
            ],
            "email": [
                "4132@alfacrm.pro"
            ],
            "web": [],
            "addr": [],
            "custom_klatest": "",
            "custom_gorod": ""
        },
        {
            "id": 128,
            "branch_ids": [
                1
            ],
            "teacher_ids": [
                "Elmer Owen"
            ],
            "name": "Ben Green",
            "barcode": "",
            "color": null,
            "is_study": 1,
            "study_status_id": 1,
            "lead_status_id": null,
            "lead_reject_id": null,
            "lead_source_id": null,
            "assigned_id": 2,
            "legal_type": 1,
            "legal_name": "Ben Green",
            "company_id": null,
            "dob": "27.11.1985",
            "balance": "3952.50",
            "balance_base": "3952.50",
            "balance_bonus": 10,
            "paid_count": 158,
            "next_lesson_date": "2021-05-17 18:00:00",
            "paid_till": "2021-08-11 18:00:00",
            "last_attend_date": "2021-03-31",
            "b_date": "2019-07-02 15:24:26",
            "e_date": "2030-12-31",
            "note": "",
            "paid_lesson_count": 158,
            "paid_lesson_date": "2021-08-11 18:00:00",
            "phone": [
                "+7(999)139-11-82"
            ],
            "email": [
                "6593@alfacrm.pro"
            ],
            "web": [],
            "addr": [],
            "custom_klatest": "",
            "custom_gorod": ""
        }
    ]
}