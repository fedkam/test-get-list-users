import React, { useEffect } from 'react'
import styled from 'styled-components'
import { LoginForm } from './components/Login'
import UserList from './components/UserList'
import { useActions } from './customHooks/useActions'
import { useTypedSelector } from './customHooks/useTypedSelector'

function App() {
  const { isAuth } = useTypedSelector(state => state.auth)

  return (
    <>
      {!isAuth && <LoginForm />}
      {isAuth && <UserList />}
    </>
  )
}

export default App

