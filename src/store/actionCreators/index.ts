import * as UserActionCreators from './user'
import * as AuthActionCreators from './auth'

export default {
    ...UserActionCreators,
    ...AuthActionCreators
}
