
import { useContext, useEffect, useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm'
import { Context } from './main'
import { observer } from 'mobx-react-lite'
import { IUser } from './models/IUser'
import UserService from './service/UserService'

function App() {
  const { store } = useContext(Context)
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }

  }, [])

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers()
      setUsers(response.data)
    } catch (e) {
      console.log(e);
    }
  }

  if (store.isLoading) {
    return (
      <h1>Загрузка</h1>
    )
  }

  if (!store.isAuth) {
    return (
      <LoginForm />
    )
  }

  return (
    <>
      <h1>{store.isAuth ? `Пользователь авторизирован под почтой ${store.user.email}` : 'Авторизуйтесь'}</h1>
      <h1>{store.user.isActivated ? 'Аккаунт подтвержден':'Аккаунт не подтвержден'}</h1>
      <button onClick={() => store.logout()}>logout</button>
      <div>
        <button onClick={getUsers}>Получить всех пользователей </button>
      </div>
      {users.map(user =>
        <div key={user.email}>{user.email}</div>
      )}
    </>
  )
}

export default observer(App);
