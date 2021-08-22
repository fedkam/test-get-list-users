import { LoginForm } from './components/Login'
import UserList from './components/UserList'
import { useTypedSelector } from './customHooks/useTypedSelector'

function App () {
  const { isAuth } = useTypedSelector(state => state.auth)

  return (
    <>
      {!isAuth && <LoginForm />}
      {isAuth && <UserList />}
    </>
  )
}

export default App
