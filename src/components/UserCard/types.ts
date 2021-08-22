import { Moment } from 'moment'

export type ValidationFieldUserCardArg = string | string[] | Moment

export interface FieldPropsType {
    children: string
    items: string | string[] | Moment
}

export interface ValidityFieldPropsType {
    children: string
    item: string
}
