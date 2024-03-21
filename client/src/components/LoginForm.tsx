import { FC, useContext, useState } from "react"
import { Context } from "../main"
import { observer } from "mobx-react-lite"

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { store } = useContext(Context)


    return (
        <div>
            <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)} value={email} />
            <input type="email" placeholder="password" onChange={e => setPassword(e.target.value)} value={password} />
            <button onClick={() => store.login(email, password)}>логин</button>
            <button onClick={() => store.registration(email, password)}>регистрация</button>
        </div>
    )
}

export default observer(LoginForm)